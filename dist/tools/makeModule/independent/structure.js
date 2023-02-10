"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeStructure;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeStructure(names) {
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
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${names.pluralLowerModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/dtos`)) {
    _fs.default.mkdirSync(`src/modules/${names.pluralLowerModuleName}/dtos`);
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/entities`)) {
    _fs.default.mkdirSync(`src/modules/${names.pluralLowerModuleName}/entities`);
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/repositories`)) {
    _fs.default.mkdirSync(`src/modules/${names.pluralLowerModuleName}/repositories`);
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/repositories/fakes`)) {
    _fs.default.mkdirSync(`src/modules/${names.pluralLowerModuleName}/repositories/fakes`);
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services`)) {
    _fs.default.mkdirSync(`src/modules/${names.pluralLowerModuleName}/services`);
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}`);
  }
}