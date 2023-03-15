"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeDependentFunctionalities = void 0;
var _fs = require("fs");
var _createController = require("../../../../dist/templates/modules/services/createDependent/createController");
var _createService = require("../../../../dist/templates/modules/services/createDependent/createService");
var _deleteController = require("../../../../dist/templates/modules/services/deleteDependent/deleteController");
var _deleteService = require("../../../../dist/templates/modules/services/deleteDependent/deleteService");
var _listController = require("../../../../dist/templates/modules/services/listDependent/listController");
var _listService = require("../../../../dist/templates/modules/services/listDependent/listService");
var _showController = require("../../../../dist/templates/modules/services/showDependent/showController");
var _showService = require("../../../../dist/templates/modules/services/showDependent/showService");
var _updateController = require("../../../../dist/templates/modules/services/updateDependent/updateController");
var _updateService = require("../../../../dist/templates/modules/services/updateDependent/updateService");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeDependentFunctionalities {
  constructor(names, fatherNames) {
    this.messages = void 0;
    this.names = void 0;
    this.fatherNames = void 0;
    this.updateDependentService = void 0;
    this.updateDependentController = void 0;
    this.showDependentService = void 0;
    this.showDependentController = void 0;
    this.listDependentService = void 0;
    this.listDependentController = void 0;
    this.deleteDependentService = void 0;
    this.deleteDependentController = void 0;
    this.createDependentService = void 0;
    this.createDependentController = void 0;
    this.messages = _messages.default;
    this.names = names;
    this.fatherNames = fatherNames;
    this.updateDependentService = new _updateService.UpdateDependentService(this.names, this.fatherNames);
    this.updateDependentController = new _updateController.UpdateDependentController(this.names, this.fatherNames);
    this.showDependentService = new _showService.ShowDependentService(this.names, this.fatherNames);
    this.showDependentController = new _showController.ShowDependentController(this.names);
    this.listDependentService = new _listService.ListDependentService(this.names, this.fatherNames);
    this.listDependentController = new _listController.ListDependentController(this.names);
    this.deleteDependentService = new _deleteService.DeleteDependentService(this.names, this.fatherNames);
    this.deleteDependentController = new _deleteController.DeleteDependentController(this.names);
    this.createDependentService = new _createService.CreateDependentService(this.names, this.fatherNames);
    this.createDependentController = new _createController.CreateDependentController(this.names, this.fatherNames);
  }
  async execute() {
    if (!this.names || !this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`, this.createDependentController.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`, this.createDependentController.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`, this.createDependentService.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`, this.createDependentService.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`, this.deleteDependentController.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`, this.deleteDependentController.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`, this.deleteDependentService.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`, this.deleteDependentService.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`, this.listDependentController.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`, this.listDependentController.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`, this.listDependentService.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`, this.listDependentService.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`, this.showDependentController.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`, this.showDependentController.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`, this.showDependentService.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`, this.showDependentService.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`, this.updateDependentController.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`, this.updateDependentController.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`, this.updateDependentService.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`, this.updateDependentService.execute(), error => {
        if (error) throw error;
      });
    }
  }
}
exports.MakeDependentFunctionalities = MakeDependentFunctionalities;