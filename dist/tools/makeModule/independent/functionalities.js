"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeFunctionalities = void 0;
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
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeFunctionalities {
  constructor(names) {
    this.messages = void 0;
    this.names = void 0;
    this.updateService = void 0;
    this.updateController = void 0;
    this.showService = void 0;
    this.showController = void 0;
    this.listService = void 0;
    this.listController = void 0;
    this.deleteService = void 0;
    this.deleteController = void 0;
    this.createService = void 0;
    this.createController = void 0;
    this.messages = _messages.default;
    this.names = names;
    this.updateService = new _updateService.UpdateService(this.names);
    this.updateController = new _updateController.UpdateController(this.names);
    this.showService = new _showService.ShowService(this.names);
    this.showController = new _showController.ShowController(this.names);
    this.listService = new _listService.ListService(this.names);
    this.listController = new _listController.ListController(this.names);
    this.deleteService = new _deleteService.DeleteService(this.names);
    this.deleteController = new _deleteController.DeleteController(this.names);
    this.createService = new _createService.CreateService(this.names);
    this.createController = new _createController.CreateController(this.names);
  }
  async execute() {
    if (!this.names) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`, this.createController.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`, this.createController.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`, this.createService.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`, this.createService.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`, this.deleteController.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`, this.deleteController.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`, this.deleteService.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`, this.deleteService.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`, this.listController.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`, this.listController.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`, this.listService.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`, this.listService.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`, this.showController.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`, this.showController.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`, this.showService.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`, this.showService.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`, this.updateController.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`, this.updateController.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`, this.updateService.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`, this.updateService.execute());
    }
  }
}
exports.MakeFunctionalities = MakeFunctionalities;