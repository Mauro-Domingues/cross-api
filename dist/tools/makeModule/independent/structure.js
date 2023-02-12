"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStructure = makeStructure;
var _fs = require("fs");
async function makeStructure(names) {
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
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}`)) {
    (0, _fs.mkdirSync)(`src/modules/${names.pluralLowerModuleName}`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/dtos`)) {
    (0, _fs.mkdirSync)(`src/modules/${names.pluralLowerModuleName}/dtos`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/entities`)) {
    (0, _fs.mkdirSync)(`src/modules/${names.pluralLowerModuleName}/entities`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/repositories`)) {
    (0, _fs.mkdirSync)(`src/modules/${names.pluralLowerModuleName}/repositories`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/repositories/fakes`)) {
    (0, _fs.mkdirSync)(`src/modules/${names.pluralLowerModuleName}/repositories/fakes`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services`)) {
    (0, _fs.mkdirSync)(`src/modules/${names.pluralLowerModuleName}/services`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}`)) {
    (0, _fs.mkdirSync)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}`)) {
    (0, _fs.mkdirSync)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}`)) {
    (0, _fs.mkdirSync)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}`)) {
    (0, _fs.mkdirSync)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}`);
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}`)) {
    (0, _fs.mkdirSync)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}`);
  }
}