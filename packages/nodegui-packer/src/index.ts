import process from 'process';

export function getPacker(platformName: string) {
  switch (platformName) {
    case 'darwin': {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      return require('./darwin');
    }
    case 'win32': {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      return require('./win32');
    }
    case 'linux': {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      return require('./linux');
    }
    default: {
      throw new Error(`Unsupported platform ${process.platform}`);
    }
  }
}
