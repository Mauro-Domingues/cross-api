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
class Index {
  constructor() {
    this.fullComand = process.argv.slice(2);
    this.comand = process.argv[2];
    this.arg = process.argv[3];
    this.father = process.argv[4];
    this.messages = void 0;
    this.getNames = void 0;
    this.getFatherNames = void 0;
    this.deleteRegister = void 0;
    this.createRegister = void 0;
    this.createProvider = void 0;
    this.createModule = void 0;
    this.createApi = void 0;
    this.listProvider = void 0;
    this.configLanguage = void 0;
    this.configJson = void 0;
    this.board = void 0;
    this.messages = _messages.default;
    this.getNames = new _names.GetNames(this.arg);
    this.getFatherNames = new _names.GetNames(this.father);
    this.deleteRegister = new _delete.DeleteRegister();
    this.createRegister = new _save.CreateRegister(this.fullComand, this.arg, this.getNames.execute(), this.getFatherNames.execute());
    this.createProvider = new _makeProvider.CreateProvider(this.arg, this.getFatherNames.execute());
    this.createModule = new _makeModule.CreateModule(this.getNames.execute(), this.getFatherNames.execute());
    this.createApi = new _makeApi.CreateApi();
    this.listProvider = new _listProvider.ListProvider();
    this.configLanguage = new _languageConfig.ConfigLanguage();
    this.configJson = new _config.ConfigJson();
    this.board = new _board.Board();
  }
  execute() {
    if (this.comand) {
      this.createRegister.execute();
      switch (this.comand) {
        case 'config':
          this.configJson.execute();
          break;
        case 'comands':
          this.board.execute();
          break;
        case 'language':
          this.configLanguage.execute();
          break;
        case 'list:provider':
          this.listProvider.execute();
          break;
        case 'make:api':
          this.createApi.execute();
          break;
        case 'make:module':
          this.createModule.execute();
          break;
        case 'make:provider':
          this.createProvider.execute();
          break;
        case 'migration:generate':
          (0, _shelljs.exec)('ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:generate ./src/shared/typeorm/migrations/default');
          break;
        case 'migration:run':
          (0, _shelljs.exec)('ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:run');
          break;
        case 'revert':
          this.deleteRegister.execute();
          break;
        default:
          console.log('');
          console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.notFound, '\x1b[0m');
          console.log('');
          console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${this.messages.try[0]}`, '\x1b[38;2;255;255;0m', `${this.messages.try[1]}`, '\x1b[38;2;0;155;255m', `${this.messages.try[2]}`, '\x1b[0m');
          console.log('');
          break;
      }
    } else {
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.notFound, '\x1b[0m');
      console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${this.messages.try[0]}`, '\x1b[38;2;255;255;0m', `${this.messages.try[1]}`, '\x1b[38;2;0;155;255m', `${this.messages.try[2]}`, '\x1b[0m');
      console.log('');
    }
  }
}
new Index().execute();