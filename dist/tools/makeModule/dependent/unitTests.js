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
async function makeDependentUnitTests(names, fatherNames) {
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`, (0, _createControllerSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`, (0, _createControllerSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`, (0, _createServiceSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`, (0, _createServiceSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`, (0, _deleteControllerSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`, (0, _deleteControllerSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`, (0, _deleteServiceSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`, (0, _deleteServiceSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`, (0, _listControllerSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`, (0, _listControllerSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`, (0, _listServiceSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`, (0, _listServiceSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`, (0, _showControllerSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`, (0, _showControllerSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`, (0, _showServiceSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`, (0, _showServiceSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`, (0, _updateControllerSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`, (0, _updateControllerSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`, (0, _updateServiceSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`, (0, _updateServiceSpec.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
}