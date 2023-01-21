"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDependentStructure;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeDependentStructure(moduleData, fatherData) {
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
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/dtos`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/dtos`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/entities`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/entities`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/repositories`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/repositories`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/services`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}`);
  }
}