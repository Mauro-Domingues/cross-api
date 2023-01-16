"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDependentFunctionalities;
var _fs = _interopRequireDefault(require("fs"));
var _createController = _interopRequireDefault(require("../../../../dist/templates/modules/services/createDependent/createController"));
var _createService = _interopRequireDefault(require("../../../../dist/templates/modules/services/createDependent/createService"));
var _deleteController = _interopRequireDefault(require("../../../../dist/templates/modules/services/deleteDependent/deleteController"));
var _deleteService = _interopRequireDefault(require("../../../../dist/templates/modules/services/deleteDependent/deleteService"));
var _listController = _interopRequireDefault(require("../../../../dist/templates/modules/services/listDependent/listController"));
var _listService = _interopRequireDefault(require("../../../../dist/templates/modules/services/listDependent/listService"));
var _showController = _interopRequireDefault(require("../../../../dist/templates/modules/services/showDependent/showController"));
var _showService = _interopRequireDefault(require("../../../../dist/templates/modules/services/showDependent/showService"));
var _updateController = _interopRequireDefault(require("../../../../dist/templates/modules/services/updateDependent/updateController"));
var _updateService = _interopRequireDefault(require("../../../../dist/templates/modules/services/updateDependent/updateService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeDependentFunctionalities(moduleData, fatherData) {
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.ts`, (0, _createController.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.ts`, (0, _createController.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.ts`, (0, _createService.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.ts`, (0, _createService.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.ts`, (0, _deleteController.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.ts`, (0, _deleteController.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.ts`, (0, _deleteService.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.ts`, (0, _deleteService.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.ts`, (0, _listController.default)(moduleData.upperModuleName, moduleData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.ts`, (0, _listController.default)(moduleData.upperModuleName, moduleData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.ts`, (0, _listService.default)(moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.ts`, (0, _listService.default)(moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.ts`, (0, _showController.default)(moduleData.lowerModuleName, moduleData.upperModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.ts`, (0, _showController.default)(moduleData.lowerModuleName, moduleData.upperModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.ts`, (0, _showService.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.ts`, (0, _showService.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.ts`, (0, _updateController.default)(moduleData.lowerModuleName, moduleData.upperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.ts`, (0, _updateController.default)(moduleData.lowerModuleName, moduleData.upperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.ts`, (0, _updateService.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.ts`, (0, _updateService.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
}