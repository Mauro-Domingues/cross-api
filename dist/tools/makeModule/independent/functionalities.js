"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeFunctionalities;
var _fs = _interopRequireDefault(require("fs"));
var _createController = _interopRequireDefault(require("../../../../dist/templates/modules/services/create/createController"));
var _createService = _interopRequireDefault(require("../../../../dist/templates/modules/services/create/createService"));
var _deleteController = _interopRequireDefault(require("../../../../dist/templates/modules/services/delete/deleteController"));
var _deleteService = _interopRequireDefault(require("../../../../dist/templates/modules/services/delete/deleteService"));
var _listController = _interopRequireDefault(require("../../../../dist/templates/modules/services/list/listController"));
var _listService = _interopRequireDefault(require("../../../../dist/templates/modules/services/list/listService"));
var _showController = _interopRequireDefault(require("../../../../dist/templates/modules/services/show/showController"));
var _showService = _interopRequireDefault(require("../../../../dist/templates/modules/services/show/showService"));
var _updateController = _interopRequireDefault(require("../../../../dist/templates/modules/services/update/updateController"));
var _updateService = _interopRequireDefault(require("../../../../dist/templates/modules/services/update/updateService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeFunctionalities(names) {
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`, (0, _createController.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`, (0, _createController.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`, (0, _createService.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`, (0, _createService.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`, (0, _deleteController.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`, (0, _deleteController.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`, (0, _deleteService.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`, (0, _deleteService.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`, (0, _listController.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`, (0, _listController.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`, (0, _listService.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`, (0, _listService.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`, (0, _showController.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`, (0, _showController.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`, (0, _showService.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`, (0, _showService.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`, (0, _updateController.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`, (0, _updateController.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`, (0, _updateService.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`, (0, _updateService.default)(names), error => {
      if (error) throw error;
    });
  }
}