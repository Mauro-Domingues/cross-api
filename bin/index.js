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
var _save = require("../dist/tools/lastModification/save");
var _delete = require("../dist/tools/lastModification/delete");
var _names = require("../dist/tools/names");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const fullComand = process.argv.slice(2);
const comand = process.argv[2];
const arg = process.argv[3];
const father = process.argv[4];
if (comand) {
  new _save.CreateRegister(fullComand, arg, new _names.GetNames(arg).execute(), new _names.GetNames(father).execute()).execute();
  switch (comand) {
    case 'config':
      new _config.ConfigJson().execute();
      break;
    case 'comands':
      new _board.Board().execute();
      break;
    case 'language':
      new _languageConfig.ConfigLanguage().execute();
      break;
    case 'list:provider':
      new _listProvider.ListProvider().execute();
      break;
    case 'make:api':
      new _makeApi.CreateApi().execute();
      break;
    case 'make:module':
      new _makeModule.CreateModule(new _names.GetNames(arg).execute(), new _names.GetNames(father).execute()).execute();
      break;
    case 'make:provider':
      new _makeProvider.CreateProvider(arg, new _names.GetNames(father).execute()).execute();
      break;
    case 'migration:generate':
      (0, _shelljs.exec)('ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:generate ./src/shared/typeorm/migrations/default');
      break;
    case 'migration:run':
      (0, _shelljs.exec)('ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:run');
      break;
    case 'revert':
      new _delete.DeleteRegister().execute();
      break;
    default:
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', _messages.default.notFound, '\x1b[0m');
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${_messages.default.try[0]}`, '\x1b[38;2;255;255;0m', `${_messages.default.try[1]}`, '\x1b[38;2;0;155;255m', `${_messages.default.try[2]}`, '\x1b[0m');
      console.log('');
      break;
  }
} else {
  console.log('');
  console.log('\x1b[1m', '\x1b[38;2;255;0;0m', _messages.default.notFound, '\x1b[0m');
  console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${_messages.default.try[0]}`, '\x1b[38;2;255;255;0m', `${_messages.default.try[1]}`, '\x1b[38;2;0;155;255m', `${_messages.default.try[2]}`, '\x1b[0m');
  console.log('');
}