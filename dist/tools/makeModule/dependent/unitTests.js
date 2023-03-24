"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeDependentUnitTests = void 0;
const fs_1 = require("fs");
const createControllerSpec_1 = require("@templates/modules/services/createDependent/createControllerSpec");
const createServiceSpec_1 = require("@templates/modules/services/createDependent/createServiceSpec");
const deleteControllerSpec_1 = require("@templates/modules/services/deleteDependent/deleteControllerSpec");
const deleteServiceSpec_1 = require("@templates/modules/services/deleteDependent/deleteServiceSpec");
const listControllerSpec_1 = require("@templates/modules/services/listDependent/listControllerSpec");
const listServiceSpec_1 = require("@templates/modules/services/listDependent/listServiceSpec");
const showControllerSpec_1 = require("@templates/modules/services/showDependent/showControllerSpec");
const showServiceSpec_1 = require("@templates/modules/services/showDependent/showServiceSpec");
const updateControllerSpec_1 = require("@templates/modules/services/updateDependent/updateControllerSpec");
const updateServiceSpec_1 = require("@templates/modules/services/updateDependent/updateServiceSpec");
const messages_1 = require("@tools/messages");
const path_1 = require("path");
class MakeDependentUnitTests {
    constructor(names, fatherNames) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
        this.fatherNames = fatherNames;
        this.updateSpecDependentService = new updateServiceSpec_1.UpdateSpecDependentService(this.names, this.fatherNames);
        this.updateSpecDependentController = new updateControllerSpec_1.UpdateSpecDependentController(this.names, this.fatherNames);
        this.showSpecDependentService = new showServiceSpec_1.ShowSpecDependentService(this.names, this.fatherNames);
        this.showSpecDependentController = new showControllerSpec_1.ShowSpecDependentController(this.names, this.fatherNames);
        this.listSpecDependentService = new listServiceSpec_1.ListSpecDependentService(this.names, this.fatherNames);
        this.listSpecDependentController = new listControllerSpec_1.ListSpecDependentController(this.names, this.fatherNames);
        this.deleteSpecDependentService = new deleteServiceSpec_1.DeleteSpecDependentService(this.names, this.fatherNames);
        this.deleteSpecDependentController = new deleteControllerSpec_1.DeleteSpecDependentController(this.names, this.fatherNames);
        this.createSpecDependentService = new createServiceSpec_1.CreateSpecDependentService(this.names, this.fatherNames);
        this.createSpecDependentController = new createControllerSpec_1.CreateSpecDependentController(this.names, this.fatherNames);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.names || !this.fatherNames) {
                console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
                throw new Error();
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`), this.createSpecDependentController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`), this.createSpecDependentController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`), this.createSpecDependentService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`), this.createSpecDependentService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`), this.deleteSpecDependentController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`), this.deleteSpecDependentController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`), this.deleteSpecDependentService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`), this.deleteSpecDependentService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`), this.listSpecDependentController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`), this.listSpecDependentController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`), this.listSpecDependentService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`), this.listSpecDependentService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`), this.showSpecDependentController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`), this.showSpecDependentController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`), this.showSpecDependentService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`), this.showSpecDependentService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`), this.updateSpecDependentController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`), this.updateSpecDependentController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`), this.updateSpecDependentService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`), this.updateSpecDependentService.execute());
            }
        });
    }
}
exports.MakeDependentUnitTests = MakeDependentUnitTests;
