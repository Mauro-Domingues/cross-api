"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeDependentStructure = void 0;
var _fs = require("fs");
var _messages = require("../../../../dist/tools/messages");
var _path = require("path");
class MakeDependentStructure {
  constructor(names, fatherNames) {
    this.messages = void 0;
    this.names = void 0;
    this.fatherNames = void 0;
    this.messages = new _messages.Messages().execute();
    this.names = names;
    this.fatherNames = fatherNames;
  }
  async execute() {
    if (!this.names || !this.fatherNames) {
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
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'dtos'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'dtos'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'entities'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'entities'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', 'fakes'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', 'fakes'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`));
    }
  }
}
exports.MakeDependentStructure = MakeDependentStructure;