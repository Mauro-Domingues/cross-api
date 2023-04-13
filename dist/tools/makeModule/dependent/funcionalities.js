import { appendFileSync, existsSync, truncateSync } from 'fs';
import { CreateDependentController } from '../../../templates/modules/services/createDependent/createController';
import { CreateDependentService } from '../../../templates/modules/services/createDependent/createService';
import { DeleteDependentController } from '../../../templates/modules/services/deleteDependent/deleteController';
import { DeleteDependentService } from '../../../templates/modules/services/deleteDependent/deleteService';
import { ListDependentController } from '../../../templates/modules/services/listDependent/listController';
import { ListDependentService } from '../../../templates/modules/services/listDependent/listService';
import { ShowDependentController } from '../../../templates/modules/services/showDependent/showController';
import { ShowDependentService } from '../../../templates/modules/services/showDependent/showService';
import { UpdateDependentController } from '../../../templates/modules/services/updateDependent/updateController';
import { UpdateDependentService } from '../../../templates/modules/services/updateDependent/updateService';
import { Messages } from '../../messages';
import { resolve } from 'path';
export class MakeDependentFunctionalities {
    messages;
    names;
    fatherNames;
    updateDependentService;
    updateDependentController;
    showDependentService;
    showDependentController;
    listDependentService;
    listDependentController;
    deleteDependentService;
    deleteDependentController;
    createDependentService;
    createDependentController;
    constructor(names, fatherNames) {
        this.messages = new Messages().execute();
        this.names = names;
        this.fatherNames = fatherNames;
        this.updateDependentService = new UpdateDependentService(this.names, this.fatherNames);
        this.updateDependentController = new UpdateDependentController(this.names, this.fatherNames);
        this.showDependentService = new ShowDependentService(this.names, this.fatherNames);
        this.showDependentController = new ShowDependentController(this.names);
        this.listDependentService = new ListDependentService(this.names, this.fatherNames);
        this.listDependentController = new ListDependentController(this.names);
        this.deleteDependentService = new DeleteDependentService(this.names, this.fatherNames);
        this.deleteDependentController = new DeleteDependentController(this.names);
        this.createDependentService = new CreateDependentService(this.names, this.fatherNames);
        this.createDependentController = new CreateDependentController(this.names, this.fatherNames);
    }
    async execute() {
        if (!this.names || !this.fatherNames) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.ts`), this.createDependentController.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.ts`), this.createDependentController.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.ts`), this.createDependentService.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.ts`), this.createDependentService.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.ts`), this.deleteDependentController.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.ts`), this.deleteDependentController.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.ts`), this.deleteDependentService.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.ts`), this.deleteDependentService.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.ts`), this.listDependentController.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.ts`), this.listDependentController.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.ts`), this.listDependentService.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.ts`), this.listDependentService.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.ts`), this.showDependentController.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.ts`), this.showDependentController.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.ts`), this.showDependentService.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.ts`), this.showDependentService.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.ts`), this.updateDependentController.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.ts`), this.updateDependentController.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.ts`), this.updateDependentService.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.ts`), this.updateDependentService.execute());
        }
    }
}
