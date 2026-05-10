import fs from 'fs-extra';
import path from 'path';
import qode from '@nodegui/qode';
import { spawn } from 'child_process';
import { qtHome } from '@nodegui/nodegui/config/qtConfig';
import { switchToGuiSubsystem } from './patchQode';
import { AppConfig } from '../config';
import { Data, NtExecutable, NtExecutableResource, Resource } from 'resedit';

const cwd = process.cwd();
const deployDirectory = path.resolve(cwd, 'deploy');
const configFile = path.resolve(deployDirectory, 'config.json');
let qodeFileName = '';

const getDistFolderName = function getDistFolderName(distPath: string) {
  distPath = distPath.trim();

  if (distPath.at(-1) === '/') {
    distPath = distPath.slice(0, -1);
  }

  if (!distPath.includes('/')) {
    return distPath;
  }

  return distPath.slice(distPath.lastIndexOf('/') + 1);
};

const copyQode = (dest: string) => {
  const qodeBinaryFile = qode.qodePath;
  fs.chmodSync(qodeBinaryFile, '755');
  fs.copyFileSync(qodeBinaryFile, path.resolve(dest, 'qode.exe'));

  fs.rename(path.resolve(dest, 'qode.exe'), path.resolve(dest, qodeFileName));
};

const copyAppDist = (distPath: string, resourceDir: string) => {
  fs.copySync(distPath, path.resolve(resourceDir, getDistFolderName(distPath)));
};

function getAllNodeAddons(dirPath: string) {
  const addonExt = 'node';
  const dir = fs.readdirSync(dirPath);
  return dir
    .filter((elm) => elm.match(new RegExp(`.*.(${addonExt}$)`, 'ig')))
    .map((eachElement) => path.resolve(dirPath, eachElement));
}

const runWinDeployQt = async (
  appName: string,
  buildDir: string,
  originDistPath: string,
) => {
  const winDeployQtBin = path.resolve(qtHome, 'bin', 'windeployqt.exe');
  // insert qtHome/bin into the PATH for windeployqt work correctly
  process.env.PATH = `${path.resolve(qtHome, 'bin')};${process.env.PATH}`;

  const distPath = path.resolve(buildDir, getDistFolderName(originDistPath));
  const allAddons = getAllNodeAddons(distPath);

  const winDeployQt = spawn(
    winDeployQtBin,
    [
      ...allAddons,
      '--verbose=2',
      '--release',
      '--no-translations',
      '--compiler-runtime',
      `--dir=${buildDir}`,
    ],
    {
      cwd: buildDir,
      env: process.env,
    },
  );

  return new Promise((resolve, reject) => {
    winDeployQt.stdout.on('data', function (data) {
      console.info('stdout: ' + data.toString());
    });

    winDeployQt.stderr.on('data', function (data) {
      console.error('stderr: ' + data.toString());
    });

    winDeployQt.on('exit', function (code) {
      if (!code) {
        return resolve(true);
      }
      return reject('child process exited with code ' + code);
    });
  });
};

const updateExecutable = async (
  config: AppConfig,
  quodeFilePath: string,
  buildAppPackage: string,
) => {
  const exeData = fs.readFileSync(quodeFilePath);
  const exe = NtExecutable.from(exeData);
  const res = NtExecutableResource.from(exe);

  if (config.iconApp) {
    const iconPath = path.resolve(process.cwd(), config.iconApp);
    const iconGroupIds = Resource.IconGroupEntry.fromEntries(res.entries).map(
      (entry) => entry.id,
    );
    const icon = Data.IconFile.from(fs.readFileSync(iconPath));

    for (const id of iconGroupIds) {
      Resource.IconGroupEntry.replaceIconsForResource(
        res.entries,
        id,
        0,
        icon.icons.map((item) => item.data),
      );
    }
  }

  const viList = Resource.VersionInfo.fromEntries(res.entries);
  const vi = viList[0];

  vi?.setProductVersion(config.version);
  vi?.setStringValues(
    { lang: 1033, codepage: 1200 },
    {
      FileDescription: config.description || config.appName,
      ProductName: config.appName,
    },
  );

  vi?.outputToResourceEntries(res.entries);

  res.outputResource(exe);
  const newBinary = exe.generate();

  const finalPath = path.resolve(buildAppPackage, `${config.appName}.exe`);
  fs.writeFileSync(finalPath, Buffer.from(newBinary));
};

export const init = (config: AppConfig) => {
  const templateDirectory = path.resolve(__dirname, '../../template/win32');
  const userTemplate = path.resolve(deployDirectory, 'win32');
  const appDir = path.resolve(userTemplate, config.appName);

  fs.mkdirpSync(path.resolve(userTemplate, appDir));
  fs.copySync(templateDirectory, appDir);

  const configJson = {
    appName: config.appName,
  };
  fs.writeJSONSync(configFile, configJson);
};

export const pack = async (config: AppConfig) => {
  const configJson = fs.readJSONSync(
    path.resolve(deployDirectory, 'config.json'),
  );
  const { appName } = configJson;
  qodeFileName = config.appName + '.exe';

  const usertemplate = path.resolve(deployDirectory, 'win32');
  const templateAppDir = path.resolve(usertemplate, appName);
  const buildDir = path.resolve(usertemplate, 'build');
  const buildAppPackage = path.resolve(buildDir, appName);

  console.log(`cleaning build directory at ${buildDir}`);
  fs.removeSync(buildDir);

  console.log(`creating build directory at ${buildDir}`);
  fs.copySync(templateAppDir, buildAppPackage);

  console.log(`copying qode`);
  copyQode(buildAppPackage);

  console.log(`copying dist`);
  copyAppDist(config.packDir, buildAppPackage);

  console.log(`running windeployqt`);
  await runWinDeployQt(appName, buildAppPackage, config.packDir);

  console.log(`Hiding Qode's console`);
  switchToGuiSubsystem(path.resolve(buildAppPackage, qodeFileName));

  console.log('Updating executable');
  updateExecutable(
    config,
    path.resolve(buildAppPackage, qodeFileName),
    buildAppPackage,
  );

  console.log(`Build successful. Find the app at ${buildDir}`);
};
