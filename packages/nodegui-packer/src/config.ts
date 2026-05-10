import path from 'node:path';

export interface AppConfig {
  version: string;
  appName: string;
  packDir: string;
  iconApp?: string;
  description?: string;
}

export async function getAppConfig() {
  const configPath = path.resolve(process.cwd(), 'config.app.js');
  const configModule = await import(configPath);
  const config = configModule.config;

  return config as AppConfig;
}
