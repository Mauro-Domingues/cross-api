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
exports.MakeFunctionalities = void 0;
const fs_1 = require("fs");
const createController_1 = require("../../../templates/modules/services/create/createController");
const createService_1 = require("../../../templates/modules/services/create/createService");
const deleteController_1 = require("../../../templates/modules/services/delete/deleteController");
const deleteService_1 = require("../../../templates/modules/services/delete/deleteService");
const listController_1 = require("../../../templates/modules/services/list/listController");
const listService_1 = require("../../../templates/modules/services/list/listService");
const showController_1 = require("../../../templates/modules/services/show/showController");
const showService_1 = require("../../../templates/modules/services/show/showService");
const updateController_1 = require("../../../templates/modules/services/update/updateController");
const updateService_1 = require("../../../templates/modules/services/update/updateService");
const messages_1 = require("../../messages");
const path_1 = require("path");
class MakeFunctionalities {
    constructor(names) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
        this.updateService = new updateService_1.UpdateService(this.names);
        this.updateController = new updateController_1.UpdateController(this.names);
        this.showService = new showService_1.ShowService(this.names);
        this.showController = new showController_1.ShowController(this.names);
        this.listService = new listService_1.ListService(this.names);
        this.listController = new listController_1.ListController(this.names);
        this.deleteService = new deleteService_1.DeleteService(this.names);
        this.deleteController = new deleteController_1.DeleteController(this.names);
        this.createService = new createService_1.CreateService(this.names);
        this.createController = new createController_1.CreateController(this.names);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.names) {
                console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
                throw new Error();
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.ts`), this.createController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.ts`), this.createController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.ts`), this.createService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.ts`), this.createService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.ts`), this.deleteController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.ts`), this.deleteController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.ts`), this.deleteService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.ts`), this.deleteService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.ts`), this.listController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.ts`), this.listController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.ts`), this.listService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.ts`), this.listService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.ts`), this.showController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.ts`), this.showController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.ts`), this.showService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.ts`), this.showService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.ts`), this.updateController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.ts`), this.updateController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.ts`), this.updateService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.ts`), this.updateService.execute());
            }
        });
    }
}
exports.MakeFunctionalities = MakeFunctionalities;
