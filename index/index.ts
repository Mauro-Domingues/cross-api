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
import { plural, singular, isSingular } from 'pluralize';
import createRegister from '@tools/lastModification/save';
import deleteRegister from '@tools/lastModification/delete';

const fullComand = process.argv.slice(2);
const comand = process.argv[2];
const arg = process.argv[3];
const father = process.argv[4];

export default interface IModuleNamesDTO {
  lowerModuleName: string;
  upperModuleName: string;
  pluralLowerModuleName: string;
  pluralUpperModuleName: string;
  dbModuleName: string;
  routeModuleName: string;
}

export class GetNames {
  private getSingularAndPlural(word: string): {
    singular: string;
    pluralName: string;
  } {
    if (isSingular(word)) {
      return {
        singular: word,
        pluralName: plural(word),
      };
    }
    return {
      singular: singular(word),
      pluralName: word,
    };
  }

  getModuleNames(name: string): IModuleNamesDTO | undefined {
    if (!name) {
      return undefined;
    }

    const { singular, pluralName } = this.getSingularAndPlural(name);

    const lowerModuleName = singular.replace(
      singular.charAt(0),
      singular.charAt(0).toLowerCase(),
    );

    const upperModuleName = singular.replace(
      singular.charAt(0),
      singular.charAt(0).toUpperCase(),
    );

    const pluralLowerModuleName = pluralName.replace(
      pluralName.charAt(0),
      pluralName.charAt(0).toLowerCase(),
    );

    const pluralUpperModuleName = pluralName.replace(
      pluralName.charAt(0),
      pluralName.charAt(0).toUpperCase(),
    );

    const dbModuleName = Array.from(pluralLowerModuleName).reduce(
      (accumulator, letter) => {
        if (letter === letter.toUpperCase()) {
          return `${accumulator}_${letter.toLowerCase()}`;
        }
        return `${accumulator}${letter}`;
      },
    );

    const routeModuleName = Array.from(pluralLowerModuleName).reduce(
      (accumulator, letter) => {
        if (letter === letter.toUpperCase()) {
          return `${accumulator}-${letter.toLowerCase()}`;
        }
        return `${accumulator}${letter}`;
      },
    );

    return {
      lowerModuleName,
      upperModuleName,
      pluralLowerModuleName,
      pluralUpperModuleName,
      dbModuleName,
      routeModuleName,
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
      createRegister(fullComand, undefined, undefined, undefined);
      createApi();
      break;
    case 'make:module':
      createRegister(
        fullComand,
        arg,
        new GetNames().getModuleNames(arg),
        new GetNames().getModuleNames(father),
      );
      createModule(
        new GetNames().getModuleNames(arg),
        new GetNames().getModuleNames(father),
      );
      break;
    case 'make:provider':
      createRegister(
        fullComand,
        arg,
        new GetNames().getModuleNames(arg),
        new GetNames().getModuleNames(father),
      );
      createProvider(arg, new GetNames().getModuleNames(father));
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
    case 'revert':
      deleteRegister(
        new GetNames().getModuleNames(arg),
        new GetNames().getModuleNames(father),
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
