"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeUnitTests = void 0;
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
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeUnitTests {
  constructor(names) {
    this.messages = void 0;
    this.names = void 0;
    this.updateSpecService = void 0;
    this.updateSpecController = void 0;
    this.showSpecService = void 0;
    this.showSpecController = void 0;
    this.listSpecService = void 0;
    this.listSpecController = void 0;
    this.deleteSpecService = void 0;
    this.deleteSpecController = void 0;
    this.createSpecService = void 0;
    this.createSpecController = void 0;
    this.messages = _messages.default;
    this.names = names;
    this.updateSpecService = new _updateServiceSpec.UpdateSpecService(this.names);
    this.updateSpecController = new _updateControllerSpec.UpdateSpecController(this.names);
    this.showSpecService = new _showServiceSpec.ShowSpecService(this.names);
    this.showSpecController = new _showControllerSpec.ShowSpecController(this.names);
    this.listSpecService = new _listServiceSpec.ListSpecService(this.names);
    this.listSpecController = new _listControllerSpec.ListSpecController(this.names);
    this.deleteSpecService = new _deleteServiceSpec.DeleteSpecService(this.names);
    this.deleteSpecController = new _deleteControllerSpec.DeleteSpecController(this.names);
    this.createSpecService = new _createServiceSpec.CreateSpecService(this.names);
    this.createSpecController = new _createControllerSpec.CreateSpecController(this.names);
  }
  async execute() {
    if (!this.names) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.spec.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.spec.ts`, this.createSpecController.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.spec.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.spec.ts`, this.createSpecController.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.spec.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.spec.ts`, this.createSpecService.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.spec.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.spec.ts`, this.createSpecService.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.spec.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.spec.ts`, this.deleteSpecController.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.spec.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.spec.ts`, this.deleteSpecController.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.spec.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.spec.ts`, this.deleteSpecService.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.spec.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.spec.ts`, this.deleteSpecService.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.spec.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.spec.ts`, this.listSpecController.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.spec.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.spec.ts`, this.listSpecController.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.spec.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.spec.ts`, this.listSpecService.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.spec.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.spec.ts`, this.listSpecService.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.spec.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.spec.ts`, this.showSpecController.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.spec.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.spec.ts`, this.showSpecController.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.spec.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.spec.ts`, this.showSpecService.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.spec.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.spec.ts`, this.showSpecService.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.spec.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.spec.ts`, this.updateSpecController.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.spec.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.spec.ts`, this.updateSpecController.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.spec.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.spec.ts`, this.updateSpecService.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.spec.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.spec.ts`, this.updateSpecService.execute(), error => {
        if (error) throw error;
      });
    }
  }
}
exports.MakeUnitTests = MakeUnitTests;