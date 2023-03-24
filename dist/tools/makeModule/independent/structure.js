"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeStructure = void 0;
var _fs = require("fs");
var _messages = require("../../../../dist/tools/messages");
var _path = require("path");
class MakeStructure {
  constructor(names) {
    this.messages = void 0;
    this.names = void 0;
    this.messages = new _messages.Messages().execute();
    this.names = names;
  }
  async execute() {
    if (!this.names) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'routes'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'routes'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'dtos'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'dtos'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'entities'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'entities'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', 'fakes'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', 'fakes'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`));
    }
  }
}
exports.MakeStructure = MakeStructure;