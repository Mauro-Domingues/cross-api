"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeDependentUnitTests = void 0;
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
var _messages = require("../../../../dist/tools/messages");
var _path = require("path");
class MakeDependentUnitTests {
  constructor(names, fatherNames) {
    this.messages = void 0;
    this.names = void 0;
    this.fatherNames = void 0;
    this.updateSpecDependentService = void 0;
    this.updateSpecDependentController = void 0;
    this.showSpecDependentService = void 0;
    this.showSpecDependentController = void 0;
    this.listSpecDependentService = void 0;
    this.listSpecDependentController = void 0;
    this.deleteSpecDependentService = void 0;
    this.deleteSpecDependentController = void 0;
    this.createSpecDependentService = void 0;
    this.createSpecDependentController = void 0;
    this.messages = new _messages.Messages().execute();
    this.names = names;
    this.fatherNames = fatherNames;
    this.updateSpecDependentService = new _updateServiceSpec.UpdateSpecDependentService(this.names, this.fatherNames);
    this.updateSpecDependentController = new _updateControllerSpec.UpdateSpecDependentController(this.names, this.fatherNames);
    this.showSpecDependentService = new _showServiceSpec.ShowSpecDependentService(this.names, this.fatherNames);
    this.showSpecDependentController = new _showControllerSpec.ShowSpecDependentController(this.names, this.fatherNames);
    this.listSpecDependentService = new _listServiceSpec.ListSpecDependentService(this.names, this.fatherNames);
    this.listSpecDependentController = new _listControllerSpec.ListSpecDependentController(this.names, this.fatherNames);
    this.deleteSpecDependentService = new _deleteServiceSpec.DeleteSpecDependentService(this.names, this.fatherNames);
    this.deleteSpecDependentController = new _deleteControllerSpec.DeleteSpecDependentController(this.names, this.fatherNames);
    this.createSpecDependentService = new _createServiceSpec.CreateSpecDependentService(this.names, this.fatherNames);
    this.createSpecDependentController = new _createControllerSpec.CreateSpecDependentController(this.names, this.fatherNames);
  }
  async execute() {
    if (!this.names || !this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`), this.createSpecDependentController.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`), this.createSpecDependentController.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`), this.createSpecDependentService.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`), this.createSpecDependentService.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`), this.deleteSpecDependentController.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`), this.deleteSpecDependentController.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`), this.deleteSpecDependentService.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`), this.deleteSpecDependentService.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`), this.listSpecDependentController.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`), this.listSpecDependentController.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`), this.listSpecDependentService.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`), this.listSpecDependentService.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`), this.showSpecDependentController.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`), this.showSpecDependentController.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`), this.showSpecDependentService.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`), this.showSpecDependentService.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`), this.updateSpecDependentController.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`), this.updateSpecDependentController.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`), this.updateSpecDependentService.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`), this.updateSpecDependentService.execute());
    }
  }
}
exports.MakeDependentUnitTests = MakeDependentUnitTests;