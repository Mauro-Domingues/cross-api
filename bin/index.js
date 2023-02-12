#!/usr/bin/env node
"use strict";

var _shelljs = require("shelljs");
var _board = require("../dist/tools/board");
var _config = require("../dist/tools/config");
var _languageConfig = require("../dist/tools/languageConfig");
var _listProvider = require("../dist/tools/listProvider");
var _makeApi = require("../dist/tools/makeApi");
var _makeModule = require("../dist/tools/makeModule");
var _makeProvider = require("../dist/tools/makeProvider");
var _messages = _interopRequireDefault(require("../dist/tools/messages"));
var _pluralize = require("pluralize");
var _save = require("../dist/tools/lastModification/save");
var _delete = require("../dist/tools/lastModification/delete");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const fullComand = process.argv.slice(2);
const comand = process.argv[2];
const arg = process.argv[3];
const father = process.argv[4];
class GetNames {
  getSingularAndPlural(word) {
    if ((0, _pluralize.isSingular)(word)) {
      return {
        singular: word,
        pluralName: (0, _pluralize.plural)(word)
      };
    }
    return {
      singular: (0, _pluralize.singular)(word),
      pluralName: word
    };
  }
  getModuleNames(name) {
    if (!name) {
      return undefined;
    }
    const {
      singular,
      pluralName
    } = this.getSingularAndPlural(name);
    const lowerModuleName = singular.replace(singular.charAt(0), singular.charAt(0).toLowerCase());
    const upperModuleName = singular.replace(singular.charAt(0), singular.charAt(0).toUpperCase());
    const pluralLowerModuleName = pluralName.replace(pluralName.charAt(0), pluralName.charAt(0).toLowerCase());
    const pluralUpperModuleName = pluralName.replace(pluralName.charAt(0), pluralName.charAt(0).toUpperCase());
    const dbModuleName = Array.from(pluralLowerModuleName).reduce((accumulator, letter) => {
      if (letter === letter.toUpperCase()) {
        return `${accumulator}_${letter.toLowerCase()}`;
      }
      return `${accumulator}${letter}`;
    });
    const routeModuleName = Array.from(pluralLowerModuleName).reduce((accumulator, letter) => {
      if (letter === letter.toUpperCase()) {
        return `${accumulator}-${letter.toLowerCase()}`;
      }
      return `${accumulator}${letter}`;
    });
    return {
      lowerModuleName,
      upperModuleName,
      pluralLowerModuleName,
      pluralUpperModuleName,
      dbModuleName,
      routeModuleName
    };
  }
}
if (comand) {
  (0, _save.createRegister)(fullComand, arg, new GetNames().getModuleNames(arg), new GetNames().getModuleNames(father));
  switch (comand) {
    case 'config':
      (0, _config.configJson)();
      break;
    case 'comands':
      (0, _board.board)();
      break;
    case 'language':
      (0, _languageConfig.configLanguage)();
      break;
    case 'list:provider':
      (0, _listProvider.listProvider)();
      break;
    case 'make:api':
      (0, _makeApi.createApi)();
      break;
    case 'make:module':
      (0, _makeModule.createModule)(new GetNames().getModuleNames(arg), new GetNames().getModuleNames(father));
      break;
    case 'make:provider':
      (0, _makeProvider.createProvider)(arg, new GetNames().getModuleNames(father));
      break;
    case 'migration:generate':
      (0, _shelljs.exec)('ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:generate ./src/shared/typeorm/migrations/default');
      break;
    case 'migration:run':
      (0, _shelljs.exec)('ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:run');
      break;
    case 'revert':
      (0, _delete.deleteRegister)();
      break;
    default:
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', _messages.default.notFound, '\x1b[0m');
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', _messages.default.try, '\x1b[0m');
      console.log('');
      break;
  }
} else {
  console.log('');
  console.log('\x1b[1m', '\x1b[38;2;255;0;0m', _messages.default.notFound, '\x1b[0m');
  console.log('');
  console.log('\x1b[1m', '\x1b[38;2;255;255;0m', _messages.default.try, '\x1b[0m');
  console.log('');
}