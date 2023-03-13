#!/usr/bin/env node

import { exec } from 'shelljs';
import { board } from '@tools/board';
import { configJson } from '@tools/config';
import { configLanguage } from '@tools/languageConfig';
import { listProvider } from '@tools/listProvider';
import { createApi } from '@tools/makeApi';
import { createModule } from '@tools/makeModule';
import { createProvider } from '@tools/makeProvider';
import messages from '@tools/messages';
import { createRegister } from '@tools/lastModification/save';
import { deleteRegister } from '@tools/lastModification/delete';
import { GetNames } from '@tools/names';

const fullComand = process.argv.slice(2);
const comand = process.argv[2];
const arg = process.argv[3];
const father = process.argv[4];

if (comand) {
  createRegister(
    fullComand,
    arg,
    new GetNames().getModuleNames(arg),
    new GetNames().getModuleNames(father),
  );
  switch (comand) {
    case 'config':
      configJson();
      break;
    case 'comands':
      board();
      break;
    case 'language':
      configLanguage();
      break;
    case 'list:provider':
      listProvider();
      break;
    case 'make:api':
      createApi();
      break;
    case 'make:module':
      createModule(
        new GetNames().getModuleNames(arg),
        new GetNames().getModuleNames(father),
      );
      break;
    case 'make:provider':
      createProvider(arg, new GetNames().getModuleNames(father));
      break;
    case 'migration:generate':
      exec(
        'ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:generate ./src/shared/typeorm/migrations/default',
      );
      break;
    case 'migration:run':
      exec(
        'ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:run',
      );
      break;
    case 'revert':
      deleteRegister();
      break;
    default:
      console.log('');
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        messages.notFound,
        '\x1b[0m',
      );
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', messages.try, '\x1b[0m');
      console.log('');
      break;
  }
} else {
  console.log('');
  console.log('\x1b[1m', '\x1b[38;2;255;0;0m', messages.notFound, '\x1b[0m');
  console.log('');
  console.log('\x1b[1m', '\x1b[38;2;255;255;0m', messages.try, '\x1b[0m');
  console.log('');
}
