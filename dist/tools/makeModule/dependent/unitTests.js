import { appendFileSync, existsSync, truncateSync } from 'fs';
import { CreateSpecDependentController } from '../../../templates/modules/services/createDependent/createControllerSpec';
import { CreateSpecDependentService } from '../../../templates/modules/services/createDependent/createServiceSpec';
import { DeleteSpecDependentController } from '../../../templates/modules/services/deleteDependent/deleteControllerSpec';
import { DeleteSpecDependentService } from '../../../templates/modules/services/deleteDependent/deleteServiceSpec';
import { ListSpecDependentController } from '../../../templates/modules/services/listDependent/listControllerSpec';
import { ListSpecDependentService } from '../../../templates/modules/services/listDependent/listServiceSpec';
import { ShowSpecDependentController } from '../../../templates/modules/services/showDependent/showControllerSpec';
import { ShowSpecDependentService } from '../../../templates/modules/services/showDependent/showServiceSpec';
import { UpdateSpecDependentController } from '../../../templates/modules/services/updateDependent/updateControllerSpec';
import { UpdateSpecDependentService } from '../../../templates/modules/services/updateDependent/updateServiceSpec';
import { Messages } from '../../messages';
import { resolve } from 'path';
export class MakeDependentUnitTests {
    messages;
    names;
    fatherNames;
    updateSpecDependentService;
    updateSpecDependentController;
    showSpecDependentService;
    showSpecDependentController;
    listSpecDependentService;
    listSpecDependentController;
    deleteSpecDependentService;
    deleteSpecDependentController;
    createSpecDependentService;
    createSpecDependentController;
    constructor(names, fatherNames) {
        this.messages = new Messages().execute();
        this.names = names;
        this.fatherNames = fatherNames;
        this.updateSpecDependentService = new UpdateSpecDependentService(this.names, this.fatherNames);
        this.updateSpecDependentController = new UpdateSpecDependentController(this.names, this.fatherNames);
        this.showSpecDependentService = new ShowSpecDependentService(this.names, this.fatherNames);
        this.showSpecDependentController = new ShowSpecDependentController(this.names, this.fatherNames);
        this.listSpecDependentService = new ListSpecDependentService(this.names, this.fatherNames);
        this.listSpecDependentController = new ListSpecDependentController(this.names, this.fatherNames);
        this.deleteSpecDependentService = new DeleteSpecDependentService(this.names, this.fatherNames);
        this.deleteSpecDependentController = new DeleteSpecDependentController(this.names, this.fatherNames);
        this.createSpecDependentService = new CreateSpecDependentService(this.names, this.fatherNames);
        this.createSpecDependentController = new CreateSpecDependentController(this.names, this.fatherNames);
    }
    async execute() {
        if (!this.names || !this.fatherNames) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`), this.createSpecDependentController.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Controller.spec.ts`), this.createSpecDependentController.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`), this.createSpecDependentService.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`, `Create${this.names.upperModuleName}Service.spec.ts`), this.createSpecDependentService.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`), this.deleteSpecDependentController.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Controller.spec.ts`), this.deleteSpecDependentController.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`), this.deleteSpecDependentService.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`, `Delete${this.names.upperModuleName}Service.spec.ts`), this.deleteSpecDependentService.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`), this.listSpecDependentController.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Controller.spec.ts`), this.listSpecDependentController.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`), this.listSpecDependentService.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`, `List${this.names.upperModuleName}Service.spec.ts`), this.listSpecDependentService.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`), this.showSpecDependentController.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Controller.spec.ts`), this.showSpecDependentController.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`), this.showSpecDependentService.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`, `Show${this.names.upperModuleName}Service.spec.ts`), this.showSpecDependentService.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`), this.updateSpecDependentController.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Controller.spec.ts`), this.updateSpecDependentController.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`), this.updateSpecDependentService.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`, `Update${this.names.upperModuleName}Service.spec.ts`), this.updateSpecDependentService.execute());
        }
    }
}
