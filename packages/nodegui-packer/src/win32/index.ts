import fs from 'fs-extra';
import path from 'path';
import qode from '@nodegui/qode';
import { qtHome } from '@nodegui/nodegui/config/qtConfig';
import { switchToGuiSubsystem } from './patchQode';

const cwd = process.cwd();
const deployDirectory = path.resolve(cwd, 'deploy');
const configFile = path.resolve(deployDirectory, 'config.json');

/**
 * Console color helpers
 */
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
};

/**
 * Colorizes a console message
 * @param text - Text to colorize
 * @param color - Color to use
 * @returns Colorized text
 */
function colorize(text: string, color: string): string {
  return `${color}${text}${colors.reset}`;
}

const copyQode = async (dest: string) => {
  // Fix: access qodePath directly from the module
  const qodeBinaryFile = qode.qodePath || require.resolve('@nodegui/qode');

  console.log(`Using qode path: ${qodeBinaryFile}`);
  await fs.chmod(qodeBinaryFile, '755');
  await fs.copyFile(qodeBinaryFile, path.resolve(dest, 'qode.exe'));
};

const copyAppDist = async (distPath: string, resourceDir: string) => {
  console.log(
    colorize(
      `Copying application files (excluding node_modules)...`,
      colors.blue,
    ),
  );
  await fs.copy(distPath, path.resolve(resourceDir, 'bundle'), {
    filter: (src) => {
      // Exclude any node_modules folders from the source
      return !src.includes(path.join('node_modules'));
    },
  });
  console.log(colorize(`Finished copying application files`, colors.green));
};

const runWinDeployQt = async (appName: string, buildDir: string) => {
  try {
    console.log(
      colorize(
        `Using manual Qt deployment approach...`,
        colors.bright + colors.blue,
      ),
    );

    const qtBinDir = path.resolve(qtHome, 'bin');
    const qtPluginsDir = path.resolve(qtHome, 'plugins');

    const targetPluginsDir = path.resolve(buildDir, 'plugins');
    await fs.mkdirp(targetPluginsDir);

    const qtConfContent = `[Paths]\nPlugins = ./plugins\n`;
    await fs.writeFile(path.resolve(buildDir, 'qt.conf'), qtConfContent);

    console.log('Copying MSVC runtime DLLs...');
    const vcRedistDir = path.resolve(qtBinDir, '../../../vcredist');
    if (await fs.pathExists(vcRedistDir)) {
      const vcFiles = await fs.readdir(vcRedistDir);
      for (const file of vcFiles) {
        if (file.endsWith('.dll')) {
          await fs.copy(
            path.resolve(vcRedistDir, file),
            path.resolve(buildDir, file),
          );
        }
      }
    } else {
      console.log('MSVC redist dir not found, skipping...');
    }

    console.log('Copying all DLLs from Qt bin directory...');
    try {
      const allFiles = await fs.readdir(qtBinDir);
      const dllFiles = allFiles.filter((file) => {
        const lowerFile = file.toLowerCase();
        return (
          lowerFile.endsWith('.dll') &&
          !lowerFile.endsWith('d.dll') &&
          !lowerFile.includes('designer') &&
          !lowerFile.includes('help') &&
          !lowerFile.includes('uitool')
        );
      });

      console.log(
        `Found ${dllFiles.length} DLL files to copy (excluding debug and designer DLLs)`,
      );

      for (const dll of dllFiles) {
        const sourcePath = path.resolve(qtBinDir, dll);
        const targetPath = path.resolve(buildDir, dll);

        console.log(`Copying ${dll}...`);
        await fs.copy(sourcePath, targetPath);
      }
    } catch (err) {
      console.warn(
        `Warning: Error copying DLLs: ${err && typeof err === 'object' && 'message' in err && err.message}`,
      );
    }

    const pluginFolders = [
      'platforms',
      'styles',
      'imageformats',
      'iconengines',
      'sqldrivers',
      'bearer',
      'printsupport',
    ];

    for (const folder of pluginFolders) {
      const sourcePluginDir = path.resolve(qtPluginsDir, folder);
      const targetPluginDir = path.resolve(targetPluginsDir, folder);

      if (await fs.pathExists(sourcePluginDir)) {
        console.log(`Copying plugin folder ${folder}...`);
        await fs.copy(sourcePluginDir, targetPluginDir);
      } else {
        console.warn(
          `Warning: Could not find plugin directory ${sourcePluginDir}`,
        );
      }
    }

    const launcherContent = `@echo off\necho Starting application...\nstart qode.exe\n`;
    await fs.writeFile(path.resolve(buildDir, 'start.bat'), launcherContent);

    console.log(
      colorize('Manual Qt deployment completed successfully', colors.green),
    );
    return true;
  } catch (error) {
    console.error(colorize(`Error during Qt deployment: ${error}`, colors.red));
    throw new Error(
      `Failed during Qt deployment: ${error && typeof error === 'object' && 'message' in error ? error['message'] : error}`,
      {
        cause: error,
      },
    );
  }
};

export const init = async (appName: string) => {
  console.log(colorize(`Initializing application ${appName}...`, colors.blue));

  // Create necessary directories
  const userTemplate = path.resolve(deployDirectory, 'win32');
  const appDir = path.resolve(userTemplate, appName);

  await fs.mkdirp(deployDirectory);
  await fs.mkdirp(userTemplate);
  await fs.mkdirp(appDir);

  // Write application configuration
  const config = { appName };
  await fs.writeJSON(configFile, config);

  // Create minimal template structure if template doesn't exist
  const templateDirectory = path.resolve(__dirname, '../../template/win32');
  if (await fs.pathExists(templateDirectory)) {
    console.log(
      colorize(`Copying template from ${templateDirectory}`, colors.yellow),
    );
    await fs.copy(templateDirectory, appDir);
  } else {
    console.log(colorize(`Creating minimal template structure`, colors.yellow));
    await fs.writeJSON(path.resolve(appDir, 'package.json'), {
      name: appName,
      version: '1.0.0',
    });
    await fs.writeFile(
      path.resolve(appDir, 'README.md'),
      `# ${appName}\n\nBuilt with NodeGUI`,
    );
  }

  console.log(colorize(`Template created at ${appDir}`, colors.green));
};

export const pack = async (distPath: string) => {
  const config = await fs.readJSON(
    path.resolve(deployDirectory, 'config.json'),
  );
  const { appName } = config;
  const usertemplate = path.resolve(deployDirectory, 'win32');
  const buildDir = path.resolve(usertemplate, 'build');
  const templateAppDir = path.resolve(usertemplate, appName);
  const buildAppPackage = path.resolve(buildDir, appName);

  console.log(`cleaning build directory at ${buildDir}`);
  await fs.remove(buildDir);

  console.log(`creating build directory at ${buildDir}`);
  await fs.copy(templateAppDir, buildAppPackage);

  console.log(`copying qode`);
  await copyQode(buildAppPackage);

  console.log(`copying dist`);
  await copyAppDist(distPath, buildAppPackage);

  console.log(`copying package dependencies`);
  await copyPackageDependencies(buildAppPackage);

  console.log(`running windeployqt`);
  await runWinDeployQt(appName, buildAppPackage);

  console.log(`Hiding Qode's console`);
  await switchToGuiSubsystem(path.resolve(buildAppPackage, 'qode.exe'));

  console.log(`Build successful. Find the app at ${buildDir}`);
};

/**
 * Recursively copies node modules from package.json to the build directory
 * Skips @nodegui modules and only includes production dependencies
 * @param buildDir - Build output directory
 */
async function copyPackageDependencies(buildDir: string) {
  console.log('Copying package dependencies...');

  // Read the project's package.json
  const packageJsonPath = path.resolve(cwd, 'package.json');
  if (!(await fs.pathExists(packageJsonPath))) {
    console.warn(
      'Warning: Could not find package.json, skipping dependency copying',
    );
    return;
  }

  const packageJson = await fs.readJSON(packageJsonPath);

  // Get dependencies (excluding devDependencies)
  const dependencies = packageJson.dependencies || {};

  // Create node_modules folder in the build directory
  const targetModulesDir = path.resolve(buildDir, 'node_modules');
  await fs.mkdirp(targetModulesDir);

  // Copy modules recursively
  const visited = new Set<string>();

  // Always include @nodegui/nodegui if it exists
  if (dependencies['@nodegui/nodegui']) {
    console.log(
      colorize(
        `Processing core NodeGUI module: @nodegui/nodegui`,
        colors.magenta,
      ),
    );
    await copyDependencyRecursive(
      '@nodegui/nodegui',
      targetModulesDir,
      visited,
    );
  }

  // Process all other non-nodegui dependencies
  for (const name of Object.keys(dependencies)) {
    // Skip all @nodegui modules (we already handled the core one)
    if (name.startsWith('@nodegui/')) {
      console.log(colorize(`Skipping ${name} (nodegui module)`, colors.yellow));
      continue;
    }

    console.log(colorize(`Processing dependency: ${name}`, colors.blue));
    await copyDependencyRecursive(name, targetModulesDir, visited);
  }

  console.log(colorize('Finished copying package dependencies', colors.green));
}

/**
 * Recursively copies a dependency and its sub-dependencies
 * @param name - Package name
 * @param targetDir - Target node_modules directory
 * @param visited - Set of already visited modules (to prevent circular dependencies)
 */
async function copyDependencyRecursive(
  name: string,
  targetDir: string,
  visited: Set<string>,
) {
  // Skip already visited modules to prevent circular dependencies
  if (visited.has(name)) {
    return;
  }
  visited.add(name);

  const modulePath = path.resolve(cwd, 'node_modules', name);
  const targetPath = path.resolve(targetDir, name);

  console.log(colorize(`Copying module: ${name}`, colors.cyan));
  // Check if module exists
  if (!(await fs.pathExists(modulePath))) {
    console.warn(
      colorize(`Warning: Could not find module ${name}`, colors.yellow),
    );
    return;
  }
  // Copy the module without its node_modules folder
  await fs.copy(modulePath, targetPath, {
    filter: (src: string) =>
      !src.includes(path.join(modulePath, 'node_modules')),
  });

  // If this is the nodegui module, remove the miniqt folder to reduce size
  if (name === '@nodegui/nodegui') {
    // Remove miniqt folder
    const miniqtPath = path.resolve(targetPath, 'miniqt');
    if (await fs.pathExists(miniqtPath)) {
      console.log(
        colorize(
          `Removing miniqt folder from ${name} to reduce size`,
          colors.yellow,
        ),
      );
      try {
        // Use rm with recursive: true and force: true to handle nested directories and read-only files
        await fs.rm(miniqtPath, {
          recursive: true,
          force: true,
        });
        console.log(
          colorize(`Successfully removed miniqt folder`, colors.green),
        );
      } catch (err) {
        // If rm fails, try other approach
        console.warn(
          colorize(
            `Warning: Failed to remove miniqt folder: ${err && typeof err === 'object' && 'message' in err && err.message}`,
            colors.yellow,
          ),
        );
        console.log(
          colorize(
            `Keeping miniqt folder but removing contents to reduce size`,
            colors.yellow,
          ),
        );

        try {
          // Alternative: Empty directory but keep the structure
          const miniqtContents = await fs.readdir(miniqtPath);
          for (const item of miniqtContents) {
            await fs.remove(path.resolve(miniqtPath, item)).catch(() => {});
          }
        } catch (innerErr) {
          console.warn(
            colorize(
              `Warning: Could not clean miniqt folder: ${innerErr && typeof innerErr === 'object' && 'message' in innerErr && innerErr.message}`,
              colors.yellow,
            ),
          );
        }
      }
    }

    // Remove src folder
    const srcPath = path.resolve(targetPath, 'src');
    if (await fs.pathExists(srcPath)) {
      console.log(
        colorize(
          `Removing src folder from ${name} to reduce size`,
          colors.yellow,
        ),
      );
      try {
        await fs.rm(srcPath, { recursive: true, force: true });
        console.log(colorize(`Successfully removed src folder`, colors.green));
      } catch (err) {
        console.warn(
          colorize(
            `Warning: Failed to remove src folder: ${err && typeof err === 'object' && 'message' in err && err.message}`,
            colors.yellow,
          ),
        );
      }
    }

    // Remove build/*.lib and *.exp files
    const buildReleasePath = path.resolve(targetPath, 'build', 'Release');
    if (await fs.pathExists(buildReleasePath)) {
      const libFile = path.resolve(buildReleasePath, 'nodegui_core.lib');
      const expFile = path.resolve(buildReleasePath, 'nodegui_core.exp');

      console.log(
        colorize(
          `Removing nodegui_core.lib and nodegui_core.exp files to reduce size`,
          colors.yellow,
        ),
      );

      // Remove lib file
      if (await fs.pathExists(libFile)) {
        try {
          await fs.remove(libFile);
          console.log(
            colorize(
              `Successfully removed nodegui_core.lib file`,
              colors.green,
            ),
          );
        } catch (err) {
          console.warn(
            colorize(
              `Warning: Failed to remove nodegui_core.lib file: ${err && typeof err === 'object' && 'message' in err && err.message}`,
              colors.yellow,
            ),
          );
        }
      }

      // Remove exp file
      if (await fs.pathExists(expFile)) {
        try {
          await fs.remove(expFile);
          console.log(
            colorize(
              `Successfully removed nodegui_core.exp file`,
              colors.green,
            ),
          );
        } catch (err) {
          console.warn(
            colorize(
              `Warning: Failed to remove nodegui_core.exp file: ${err && typeof err === 'object' && 'message' in err && err.message}`,
              colors.yellow,
            ),
          );
        }
      }
    }
  }

  // Copy .bin directory at the top level if it exists and hasn't been processed yet
  if (!visited.has('.bin')) {
    const isFirstLevelDependency = !name.includes('node_modules');

    // Only copy .bin directory when processing a top-level dependency
    if (isFirstLevelDependency) {
      const binPath = path.resolve(cwd, 'node_modules', '.bin');
      const targetBinPath = path.resolve(targetDir, '.bin');

      if (await fs.pathExists(binPath)) {
        console.log(
          colorize(`Copying .bin directory with executables`, colors.magenta),
        );
        await fs.copy(binPath, targetBinPath);
        visited.add('.bin');
      }
    }
  }

  // Copy package-lock.json if it exists and hasn't been processed yet
  if (!visited.has('package-lock.json')) {
    const packageLockPath = path.resolve(
      cwd,
      'node_modules',
      'package-lock.json',
    );
    const targetPackageLockPath = path.resolve(targetDir, 'package-lock.json');

    if (await fs.pathExists(packageLockPath)) {
      console.log(colorize(`Copying package-lock.json`, colors.magenta));
      await fs.copy(packageLockPath, targetPackageLockPath);
      visited.add('package-lock.json');
    }
  }

  // Read the module's package.json
  const modulePackageJsonPath = path.resolve(modulePath, 'package.json');
  if (!(await fs.pathExists(modulePackageJsonPath))) {
    return;
  }

  // Read dependencies from module's package.json
  try {
    const modulePackageJson = await fs.readJSON(modulePackageJsonPath);
    const moduleDependencies = modulePackageJson.dependencies || {};

    // Recursively copy each dependency
    for (const [depName] of Object.entries(moduleDependencies)) {
      // Skip all @nodegui modules except the core one
      if (depName.startsWith('@nodegui/') && depName !== '@nodegui/nodegui') {
        continue;
      }

      // Recursively copy each dependency
      await copyDependencyRecursive(depName, targetDir, visited);
    }
  } catch (err) {
    console.warn(
      `Warning: Error processing dependencies for ${name}: ${err && typeof err === 'object' && 'message' in err && err.message}`,
    );
  }
}
