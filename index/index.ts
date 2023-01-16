#!/usr/bin/env node

import shell from 'shelljs';
import board from '@tools/board';
import configJson from '@tools/config';
import configLanguage from '@tools/languageConfig';
import listProvider from '@tools/listProvider';
import createApi from '@tools/makeApi';
import createModule from '@tools/makeModule';
import createProvider from '@tools/makeProvider';
import messages from '@tools/messages';

const [comand] = process.argv.slice(2);
const [arg] = process.argv.slice(3);
const [father] = process.argv.slice(4);

class GetName {
  getModuleName(name: string):
    | {
        [key: string]: string;
      }
    | undefined {
    if (!name) {
      return undefined;
    }

    const lowerModuleName = `${name.slice(0, 1).toLowerCase()}${name.slice(1)}`;
    const upperModuleName = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;

    const pluralLowerModuleName =
      lowerModuleName.slice(-1) === 's'
        ? lowerModuleName
        : `${lowerModuleName}s`;

    const pluralUpperModuleName =
      upperModuleName.slice(-1) === 's'
        ? upperModuleName
        : `${upperModuleName}s`;

    let dbModuleName = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const letter of pluralLowerModuleName) {
      if (letter === letter.toUpperCase()) {
        dbModuleName = `${dbModuleName}_${letter.toLowerCase()}`;
      } else {
        dbModuleName = `${dbModuleName}${letter}`;
      }
    }

    return {
      lowerModuleName,
      upperModuleName,
      pluralLowerModuleName,
      pluralUpperModuleName,
      dbModuleName,
    };
  }
}

if (comand) {
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
        new GetName().getModuleName(arg),
        new GetName().getModuleName(father),
      );
      break;
    case 'make:provider':
      createProvider(arg, new GetName().getModuleName(father));
      break;
    case 'migration:generate':
      shell.exec(
        'ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:generate ./src/shared/typeorm/migrations/default',
      );
      break;
    case 'migration:run':
      shell.exec(
        'ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:run',
      );
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
