"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDependentUnitTests = makeDependentUnitTests;
var _fs = require("fs");
var _createControllerSpec = require("../../../../dist/templates/modules/services/createDependent/createControllerSpec");
var _createServiceSpec = require("../../../../dist/templates/modules/services/createDependent/createServiceSpec");
var _deleteControllerSpec = require("../../../../dist/templates/modules/services/deleteDependent/deleteControllerSpec");
var _deleteServiceSpec = require("../../../../dist/templates/modules/services/deleteDependent/deleteServiceSpec");
var _listControllerSpec = require("../../../../dist/templates/modules/services/listDependent/listControllerSpec");
var _listServiceSpec = require("../../../../dist/templates/modules/services/listDependent/listServiceSpec");
var _showControllerSpec = require("../../../../dist/templates/modules/services/showDependent/showControllerSpec");
var _showServiceSpec = require("../../../../dist/templates/modules/services/showDependent/showServiceSpec");
var _updateControllerSpec = require("../../../../dist/templates/modules/services/updateDependent/updateControllerSpec");
var _updateServiceSpec = require("../../../../dist/templates/modules/services/updateDependent/updateServiceSpec");
async function makeDependentUnitTests(names, fatherNames) {
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`, (0, _createControllerSpec.createSpecDependentController)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`, (0, _createControllerSpec.createSpecDependentController)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`, (0, _createServiceSpec.createSpecDependentService)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`, (0, _createServiceSpec.createSpecDependentService)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`, (0, _deleteControllerSpec.deleteSpecDependentController)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`, (0, _deleteControllerSpec.deleteSpecDependentController)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`, (0, _deleteServiceSpec.deleteSpecDependentService)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`, (0, _deleteServiceSpec.deleteSpecDependentService)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`, (0, _listControllerSpec.listSpecDependentController)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`, (0, _listControllerSpec.listSpecDependentController)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`, (0, _listServiceSpec.listSpecDependentService)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`, (0, _listServiceSpec.listSpecDependentService)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`, (0, _showControllerSpec.showSpecDependentController)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`, (0, _showControllerSpec.showSpecDependentController)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`, (0, _showServiceSpec.showSpecDependentService)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`, (0, _showServiceSpec.showSpecDependentService)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`, (0, _updateControllerSpec.updateSpecDependentController)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`, (0, _updateControllerSpec.updateSpecDependentController)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`, (0, _updateServiceSpec.updateSpecDependentService)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`, (0, _updateServiceSpec.updateSpecDependentService)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
}