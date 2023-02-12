"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFunctionalities = makeFunctionalities;
var _fs = require("fs");
var _createController = require("../../../../dist/templates/modules/services/create/createController");
var _createService = require("../../../../dist/templates/modules/services/create/createService");
var _deleteController = require("../../../../dist/templates/modules/services/delete/deleteController");
var _deleteService = require("../../../../dist/templates/modules/services/delete/deleteService");
var _listController = require("../../../../dist/templates/modules/services/list/listController");
var _listService = require("../../../../dist/templates/modules/services/list/listService");
var _showController = require("../../../../dist/templates/modules/services/show/showController");
var _showService = require("../../../../dist/templates/modules/services/show/showService");
var _updateController = require("../../../../dist/templates/modules/services/update/updateController");
var _updateService = require("../../../../dist/templates/modules/services/update/updateService");
async function makeFunctionalities(names) {
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`, (0, _createController.createController)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`, (0, _createController.createController)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`, (0, _createService.createService)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`, (0, _createService.createService)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`, (0, _deleteController.deleteController)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`, (0, _deleteController.deleteController)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`, (0, _deleteService.deleteService)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`, (0, _deleteService.deleteService)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`, (0, _listController.listController)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`, (0, _listController.listController)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`, (0, _listService.listService)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`, (0, _listService.listService)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`, (0, _showController.showController)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`, (0, _showController.showController)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`, (0, _showService.showService)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`, (0, _showService.showService)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`, (0, _updateController.updateController)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`, (0, _updateController.updateController)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`, (0, _updateService.updateService)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`, (0, _updateService.updateService)(names), error => {
      if (error) throw error;
    });
  }
}