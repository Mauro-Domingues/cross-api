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
exports.MakeUnitTests = void 0;
const fs_1 = require("fs");
const createControllerSpec_1 = require("../../../templates/modules/services/create/createControllerSpec");
const createServiceSpec_1 = require("../../../templates/modules/services/create/createServiceSpec");
const deleteControllerSpec_1 = require("../../../templates/modules/services/delete/deleteControllerSpec");
const deleteServiceSpec_1 = require("../../../templates/modules/services/delete/deleteServiceSpec");
const listControllerSpec_1 = require("../../../templates/modules/services/list/listControllerSpec");
const listServiceSpec_1 = require("../../../templates/modules/services/list/listServiceSpec");
const showControllerSpec_1 = require("../../../templates/modules/services/show/showControllerSpec");
const showServiceSpec_1 = require("../../../templates/modules/services/show/showServiceSpec");
const updateControllerSpec_1 = require("../../../templates/modules/services/update/updateControllerSpec");
const updateServiceSpec_1 = require("../../../templates/modules/services/update/updateServiceSpec");
const messages_1 = require("../../messages");
const path_1 = require("path");
class MakeUnitTests {
    constructor(names) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
        this.updateSpecService = new updateServiceSpec_1.UpdateSpecService(this.names);
        this.updateSpecController = new updateControllerSpec_1.UpdateSpecController(this.names);
        this.showSpecService = new showServiceSpec_1.ShowSpecService(this.names);
        this.showSpecController = new showControllerSpec_1.ShowSpecController(this.names);
        this.listSpecService = new listServiceSpec_1.ListSpecService(this.names);
        this.listSpecController = new listControllerSpec_1.ListSpecController(this.names);
        this.deleteSpecService = new deleteServiceSpec_1.DeleteSpecService(this.names);
        this.deleteSpecController = new deleteControllerSpec_1.DeleteSpecController(this.names);
        this.createSpecService = new createServiceSpec_1.CreateSpecService(this.names);
        this.createSpecController = new createControllerSpec_1.CreateSpecController(this.names);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.names) {
                console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
                throw new Error();
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`), this.createSpecController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`), this.createSpecController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`), this.createSpecService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`), this.createSpecService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`), this.deleteSpecController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`), this.deleteSpecController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`), this.deleteSpecService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`), this.deleteSpecService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`), this.listSpecController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`), this.listSpecController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`), this.listSpecService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`), this.listSpecService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`), this.showSpecController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`), this.showSpecController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`), this.showSpecService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`), this.showSpecService.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`), this.updateSpecController.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`), this.updateSpecController.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`), this.updateSpecService.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`), this.updateSpecService.execute());
            }
        });
    }
}
exports.MakeUnitTests = MakeUnitTests;
