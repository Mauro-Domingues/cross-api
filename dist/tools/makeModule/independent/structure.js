"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeStructure = void 0;
var _fs = require("fs");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeStructure {
  constructor(names) {
    this.messages = void 0;
    this.names = void 0;
    this.messages = _messages.default;
    this.names = names;
  }
  async execute() {
    if (!this.names) {
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
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.names.pluralLowerModuleName}`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/dtos`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.names.pluralLowerModuleName}/dtos`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/entities`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.names.pluralLowerModuleName}/entities`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/repositories`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.names.pluralLowerModuleName}/repositories`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/repositories/fakes`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.names.pluralLowerModuleName}/repositories/fakes`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.names.pluralLowerModuleName}/services`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}`);
    }
  }
}
exports.MakeStructure = MakeStructure;