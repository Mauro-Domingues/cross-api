#!/usr/bin/env node
"use strict";

var _shelljs = _interopRequireDefault(require("shelljs"));
var _board = _interopRequireDefault(require("../dist/tools/board"));
var _config = _interopRequireDefault(require("../dist/tools/config"));
var _languageConfig = _interopRequireDefault(require("../dist/tools/languageConfig"));
var _listProvider = _interopRequireDefault(require("../dist/tools/listProvider"));
var _makeApi = _interopRequireDefault(require("../dist/tools/makeApi"));
var _makeModule = _interopRequireDefault(require("../dist/tools/makeModule"));
var _makeProvider = _interopRequireDefault(require("../dist/tools/makeProvider"));
var _messages = _interopRequireDefault(require("../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const [comand] = process.argv.slice(2);
const [arg] = process.argv.slice(3);
const [father] = process.argv.slice(4);
class GetName {
  getModuleName(name) {
    if (!name) {
      return undefined;
    }
    const lowerModuleName = `${name.slice(0, 1).toLowerCase()}${name.slice(1)}`;
    const upperModuleName = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
    const pluralLowerModuleName = lowerModuleName.slice(-1) === 's' ? lowerModuleName : `${lowerModuleName}s`;
    const pluralUpperModuleName = upperModuleName.slice(-1) === 's' ? upperModuleName : `${upperModuleName}s`;
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
      dbModuleName
    };
  }
}
if (comand) {
  switch (comand) {
    case 'config':
      (0, _config.default)();
      break;
    case 'comands':
      (0, _board.default)();
      break;
    case 'language':
      (0, _languageConfig.default)();
      break;
    case 'list:provider':
      (0, _listProvider.default)();
      break;
    case 'make:api':
      (0, _makeApi.default)();
      break;
    case 'make:module':
      (0, _makeModule.default)(new GetName().getModuleName(arg), new GetName().getModuleName(father));
      break;
    case 'make:provider':
      (0, _makeProvider.default)(arg, new GetName().getModuleName(father));
      break;
    case 'migration:generate':
      _shelljs.default.exec('ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:generate ./src/shared/typeorm/migrations/default');
      break;
    case 'migration:run':
      _shelljs.default.exec('ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:run');
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