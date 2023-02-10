"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeUnitTests;
var _fs = _interopRequireDefault(require("fs"));
var _createControllerSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/create/createControllerSpec"));
var _createServiceSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/create/createServiceSpec"));
var _deleteControllerSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/delete/deleteControllerSpec"));
var _deleteServiceSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/delete/deleteServiceSpec"));
var _listControllerSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/list/listControllerSpec"));
var _listServiceSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/list/listServiceSpec"));
var _showControllerSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/show/showControllerSpec"));
var _showServiceSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/show/showServiceSpec"));
var _updateControllerSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/update/updateControllerSpec"));
var _updateServiceSpec = _interopRequireDefault(require("../../../../dist/templates/modules/services/update/updateServiceSpec"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeUnitTests(names) {
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`, (0, _createControllerSpec.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`, (0, _createControllerSpec.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`, (0, _createServiceSpec.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`, (0, _createServiceSpec.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`, (0, _deleteControllerSpec.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`, (0, _deleteControllerSpec.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`, (0, _deleteServiceSpec.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`, (0, _deleteServiceSpec.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`, (0, _listControllerSpec.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`, (0, _listControllerSpec.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`, (0, _listServiceSpec.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`, (0, _listServiceSpec.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`, (0, _showControllerSpec.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`, (0, _showControllerSpec.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`, (0, _showServiceSpec.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`, (0, _showServiceSpec.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`, (0, _updateControllerSpec.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`, (0, _updateControllerSpec.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`, (0, _updateServiceSpec.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`, (0, _updateServiceSpec.default)(names), error => {
      if (error) throw error;
    });
  }
}