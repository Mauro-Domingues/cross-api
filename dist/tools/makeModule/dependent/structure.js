"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDependentStructure;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeDependentStructure(names, fatherNames) {
  if (!_fs.default.existsSync('src')) {
    _fs.default.mkdirSync('src');
  }
  if (!_fs.default.existsSync('src/modules')) {
    _fs.default.mkdirSync('src/modules');
  }
  if (!_fs.default.existsSync('src/shared')) {
    _fs.default.mkdirSync('src/shared');
  }
  if (!_fs.default.existsSync('src/shared/container')) {
    _fs.default.mkdirSync('src/shared/container');
  }
  if (!_fs.default.existsSync('src/routes')) {
    _fs.default.mkdirSync('src/routes');
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/dtos`)) {
    _fs.default.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/dtos`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/entities`)) {
    _fs.default.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/entities`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/repositories`)) {
    _fs.default.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/repositories`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes`)) {
    _fs.default.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services`)) {
    _fs.default.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/services`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}`);
  }
}