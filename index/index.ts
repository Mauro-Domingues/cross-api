#!/usr/bin/env node

import { exec } from 'shelljs';
import { Board } from '@tools/board';
import { ConfigJson } from '@tools/config';
import { ConfigLanguage } from '@tools/languageConfig';
import { ListProvider } from '@tools/listProvider';
import { CreateApi } from '@tools/makeApi';
import { CreateModule } from '@tools/makeModule';
import { CreateProvider } from '@tools/makeProvider';
import messages from '@tools/messages';
import { CreateRegister } from '@tools/lastModification/save';
import { DeleteRegister } from '@tools/lastModification/delete';
import { GetNames } from '@tools/names';

const fullComand: string[] = process.argv.slice(2);
const comand: string = process.argv[2];
const arg: string = process.argv[3];
const father: string = process.argv[4];

if (comand) {
  new CreateRegister(
    fullComand,
    arg,
    new GetNames(arg).execute(),
    new GetNames(father).execute(),
  ).execute();
  switch (comand) {
    case 'config':
      new ConfigJson().execute();
      break;
    case 'comands':
      new Board().execute();
      break;
    case 'language':
      new ConfigLanguage().execute();
      break;
    case 'list:provider':
      new ListProvider().execute();
      break;
    case 'make:api':
      new CreateApi().execute();
      break;
    case 'make:module':
      new CreateModule(
        new GetNames(arg).execute(),
        new GetNames(father).execute(),
      ).execute();
      break;
    case 'make:provider':
      new CreateProvider(arg, new GetNames(father).execute()).execute();
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
      new DeleteRegister().execute();
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
      console.log(
        '\x1b[1m',
        '\x1b[38;2;0;155;255m',
        `${messages.try[0]}`,
        '\x1b[38;2;255;255;0m',
        `${messages.try[1]}`,
        '\x1b[38;2;0;155;255m',
        `${messages.try[2]}`,
        '\x1b[0m',
      );
      console.log('');
      break;
  }
} else {
  console.log('');
  console.log('\x1b[1m', '\x1b[38;2;255;0;0m', messages.notFound, '\x1b[0m');
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    `${messages.try[0]}`,
    '\x1b[38;2;255;255;0m',
    `${messages.try[1]}`,
    '\x1b[38;2;0;155;255m',
    `${messages.try[2]}`,
    '\x1b[0m',
  );
  console.log('');
}
