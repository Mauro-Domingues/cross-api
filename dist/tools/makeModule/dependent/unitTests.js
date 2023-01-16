"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDependentUnitTests;
var _fs = _interopRequireDefault(require("fs"));
var _createControllerSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/createDependent/createControllerSpec"));
var _createServiceSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/createDependent/createServiceSpec"));
var _deleteControllerSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/deleteDependent/deleteControllerSpec"));
var _deleteServiceSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/deleteDependent/deleteServiceSpec"));
var _listControllerSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/listDependent/listControllerSpec"));
var _listServiceSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/listDependent/listServiceSpec"));
var _showControllerSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/showDependent/showControllerSpec"));
var _showServiceSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/showDependent/showServiceSpec"));
var _updateControllerSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/updateDependent/updateControllerSpec"));
var _updateServiceSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/updateDependent/updateServiceSpec"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeDependentUnitTests(moduleData, fatherData) {
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.spec.ts`, (0, _createControllerSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.spec.ts`, (0, _createControllerSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.spec.ts`, (0, _createServiceSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.spec.ts`, (0, _createServiceSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.spec.ts`, (0, _deleteControllerSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.pluralLowerModuleName, moduleData.dbModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.spec.ts`, (0, _deleteControllerSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.pluralLowerModuleName, moduleData.dbModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.spec.ts`, (0, _deleteServiceSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.spec.ts`, (0, _deleteServiceSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`, (0, _listControllerSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.pluralLowerModuleName, moduleData.dbModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`, (0, _listControllerSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.pluralLowerModuleName, moduleData.dbModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`, (0, _listServiceSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`, (0, _listServiceSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`, (0, _showControllerSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.pluralLowerModuleName, moduleData.dbModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`, (0, _showControllerSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.pluralLowerModuleName, moduleData.dbModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`, (0, _showServiceSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`, (0, _showServiceSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`, (0, _updateControllerSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.pluralLowerModuleName, moduleData.dbModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`, (0, _updateControllerSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.pluralLowerModuleName, moduleData.dbModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`, (0, _updateServiceSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`, (0, _updateServiceSpec.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
}