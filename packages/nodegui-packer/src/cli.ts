#!/usr/bin/env node
import { program } from 'commander';
import process from 'process';
import { getPacker } from './index';
import { getAppConfig } from './config';

program
  .option('-i, --init', 'Creates initial deploy files')
  .option('-p, --pack', 'Packs the app into deployable');

program.parse(process.argv);
const options = program.opts();

const platformName = process.platform;
const packer = getPacker(platformName);

getAppConfig().then((config) => {
  if (options.init) {
    packer.init(config);
    return;
  }

  if (options.pack) {
    packer.pack(config);
    return;
  }
});
