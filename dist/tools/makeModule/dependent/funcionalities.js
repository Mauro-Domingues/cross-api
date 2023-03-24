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
exports.MakeDependentFunctionalities = void 0;
const fs_1 = require("fs");
const createController_1 = require("@templates/modules/services/createDependent/createController");
const createService_1 = require("@templates/modules/services/createDependent/createService");
const deleteController_1 = require("@templates/modules/services/deleteDependent/deleteController");
const deleteService_1 = require("@templates/modules/services/deleteDependent/deleteService");
const listController_1 = require("@templates/modules/services/listDependent/listController");
const listService_1 = require("@templates/modules/services/listDependent/listService");
const showController_1 = require("@templates/modules/services/showDependent/showController");
const showService_1 = require("@templates/modules/services/showDependent/showService");
const updateController_1 = require("@templates/modules/services/updateDependent/updateController");
const updateService_1 = require("@templates/modules/services/updateDependent/updateService");
const messages_1 = require("@tools/messages");
const path_1 = require("path");
class MakeDependentFunctionalities {
    constructor(names, fatherNames) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
        this.fatherNames = fatherNames;
        this.updateDependentService = new updateService_1.UpdateDependentService(this.names, this.fatherNames);
        this.updateDependentController = new updateController_1.UpdateDependentController(this.names, this.fatherNames);
        this.showDependentService = new showService_1.ShowDependentService(this.names, this.fatherNames);
        this.showDependentController = new showController_1.ShowDependentController(this.names);
        this.listDependentService = new listService_1.ListDependentService(this.names, this.fatherNames);
        this.listDependentController = new listController_1.ListDependentController(this.names);
        this.deleteDependentService = new deleteService_1.DeleteDependentService(this.names, this.fatherNames);
        this.deleteDependentController = new deleteController_1.DeleteDependentController(this.names);
        this.createDependentService = new createService_1.CreateDependentService(this.names, this.fatherNames);
        this.createDependentController = new createController_1.CreateDependentController(this.names, this.fatherNames);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.names || !this.fatherNames) {
                console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
                throw new Error();
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.ts`), this.createDependentController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.ts`), this.createDependentController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.ts`), this.createDependentService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.ts`), this.createDependentService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.ts`), this.deleteDependentController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.ts`), this.deleteDependentController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.ts`), this.deleteDependentService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.ts`), this.deleteDependentService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.ts`), this.listDependentController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.ts`), this.listDependentController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.ts`), this.listDependentService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.ts`), this.listDependentService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.ts`), this.showDependentController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.ts`), this.showDependentController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.ts`), this.showDependentService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.ts`), this.showDependentService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.ts`), this.updateDependentController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.ts`), this.updateDependentController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.ts`), this.updateDependentService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.ts`), this.updateDependentService.execute());
            }
        });
    }
}
exports.MakeDependentFunctionalities = MakeDependentFunctionalities;
