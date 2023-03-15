"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeDependentStructure = void 0;
var _fs = require("fs");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeDependentStructure {
  constructor(names, fatherNames) {
    this.messages = void 0;
    this.names = void 0;
    this.fatherNames = void 0;
    this.messages = _messages.default;
    this.names = names;
    this.fatherNames = fatherNames;
  }
  async execute() {
    if (!this.names || !this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    if (!(0, _fs.existsSync)('src')) {
      (0, _fs.mkdirSync)('src');
    }
    if (!(0, _fs.existsSync)('src/modules')) {
      (0, _fs.mkdirSync)('src/modules');
    }
    if (!(0, _fs.existsSync)('src/shared')) {
      (0, _fs.mkdirSync)('src/shared');
    }
    if (!(0, _fs.existsSync)('src/shared/container')) {
      (0, _fs.mkdirSync)('src/shared/container');
    }
    if (!(0, _fs.existsSync)('src/routes')) {
      (0, _fs.mkdirSync)('src/routes');
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/dtos`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/dtos`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/entities`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/entities`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/repositories`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/repositories`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/fakes`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/fakes`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}`);
    }
  }
}
exports.MakeDependentStructure = MakeDependentStructure;