import { execa, execaCommandSync } from 'execa';
import { platform } from 'os';
import fs from 'fs';
import path from 'path';

if (platform() === 'darwin') {
  if (fs.existsSync(path.resolve(process.cwd(), 'miniqt'))) {
    await execa('ln -s node_modules/@nodegui/nodegui/miniqt miniqt');
  }
}
