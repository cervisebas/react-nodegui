import fs from 'fs-extra';
import path from 'path';

import {
  deployDirectory,
  configFile,
  fixupTemplateApp,
  copyQode,
  copyAppDist,
  runMacDeployQt,
  usertemplateDir,
  buildDir,
} from './helpers';
import { Config } from '../types';
import { AppConfig } from '../config';

export async function init(config: AppConfig) {
  const templateDirectory = path.resolve(__dirname, '../../template/darwin');
  const templateApp = path.resolve(usertemplateDir, `${config.appName}.app`);
  await fs.mkdirp(path.resolve(usertemplateDir, templateApp));
  await fs.copy(templateDirectory, templateApp);
  const configJson: Config = { appName: config.appName };
  await fs.writeJSON(configFile, configJson);
  await fixupTemplateApp(configJson, templateApp);
}

export async function pack(config: AppConfig) {
  const configJson = await fs.readJSON(
    path.resolve(deployDirectory, 'config.json'),
  );
  const { appName } = configJson;

  const templateAppDir = path.resolve(usertemplateDir, `${appName}.app`);
  const buildAppPackage = path.resolve(buildDir, `${appName}.app`);
  const Contents = path.resolve(buildAppPackage, 'Contents');
  const MacOs = path.resolve(Contents, 'MacOS');
  const resourceDir = path.resolve(Contents, 'Resources');
  console.log(`cleaning build directory at ${buildDir}`);
  await fs.remove(buildDir);
  console.log(`creating build directory at ${buildDir}`);
  await fs.copy(templateAppDir, buildAppPackage);
  console.log(`copying qode`);
  await copyQode(MacOs);
  console.log(`copying dist`);
  await copyAppDist(config.packDir, resourceDir);
  console.log(`running macdeployqt`);
  await runMacDeployQt({ appName, buildDir, resourceDir });
  console.log(`Build successful. Find the app at ${buildDir}`);
}
