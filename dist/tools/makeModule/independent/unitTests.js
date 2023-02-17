"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUnitTests = makeUnitTests;
var _fs = require("fs");
var _createControllerSpec = require("../../../../dist/templates/modules/services/create/createControllerSpec");
var _createServiceSpec = require("../../../../dist/templates/modules/services/create/createServiceSpec");
var _deleteControllerSpec = require("../../../../dist/templates/modules/services/delete/deleteControllerSpec");
var _deleteServiceSpec = require("../../../../dist/templates/modules/services/delete/deleteServiceSpec");
var _listControllerSpec = require("../../../../dist/templates/modules/services/list/listControllerSpec");
var _listServiceSpec = require("../../../../dist/templates/modules/services/list/listServiceSpec");
var _showControllerSpec = require("../../../../dist/templates/modules/services/show/showControllerSpec");
var _showServiceSpec = require("../../../../dist/templates/modules/services/show/showServiceSpec");
var _updateControllerSpec = require("../../../../dist/templates/modules/services/update/updateControllerSpec");
var _updateServiceSpec = require("../../../../dist/templates/modules/services/update/updateServiceSpec");
async function makeUnitTests(names) {
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`, (0, _createControllerSpec.createSpecController)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`, (0, _createControllerSpec.createSpecController)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`, (0, _createServiceSpec.createSpecService)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`, (0, _createServiceSpec.createSpecService)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`, (0, _deleteControllerSpec.deleteSpecController)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`, (0, _deleteControllerSpec.deleteSpecController)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`, (0, _deleteServiceSpec.deleteSpecService)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`, (0, _deleteServiceSpec.deleteSpecService)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`, (0, _listControllerSpec.listSpecController)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`, (0, _listControllerSpec.listSpecController)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`, (0, _listServiceSpec.listSpecService)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`, (0, _listServiceSpec.listSpecService)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`, (0, _showControllerSpec.showSpecController)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`, (0, _showControllerSpec.showSpecController)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`, (0, _showServiceSpec.showSpecService)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`, (0, _showServiceSpec.showSpecService)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`, (0, _updateControllerSpec.updateSpecController)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`, (0, _updateControllerSpec.updateSpecController)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`, (0, _updateServiceSpec.updateSpecService)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`, (0, _updateServiceSpec.updateSpecService)(names), error => {
      if (error) throw error;
    });
  }
}