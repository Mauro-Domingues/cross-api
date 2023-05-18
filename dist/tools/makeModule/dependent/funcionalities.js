import { CreateDependentController } from '../../../templates/modules/services/createDependent/createController.js';
import { CreateDependentService } from '../../../templates/modules/services/createDependent/createService.js';
import { DeleteDependentController } from '../../../templates/modules/services/deleteDependent/deleteController.js';
import { DeleteDependentService } from '../../../templates/modules/services/deleteDependent/deleteService.js';
import { ListDependentController } from '../../../templates/modules/services/listDependent/listController.js';
import { ListDependentService } from '../../../templates/modules/services/listDependent/listService.js';
import { ShowDependentController } from '../../../templates/modules/services/showDependent/showController.js';
import { ShowDependentService } from '../../../templates/modules/services/showDependent/showService.js';
import { UpdateDependentController } from '../../../templates/modules/services/updateDependent/updateController.js';
import { UpdateDependentService } from '../../../templates/modules/services/updateDependent/updateService.js';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';
import { FileManager } from '../../fileManager.js';
export class MakeDependentFunctionalities {
    messages;
    fileManager;
    console;
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
        this.fileManager = new FileManager();
        this.console = new Console();
        this.names = names;
        this.fatherNames = fatherNames;
        this.updateDependentService = new UpdateDependentService(this.names, this.fatherNames);
        this.updateDependentController = new UpdateDependentController(this.names, this.fatherNames);
        this.showDependentService = new ShowDependentService(this.names, this.fatherNames);
        this.showDependentController = new ShowDependentController(this.names, this.fatherNames);
        this.listDependentService = new ListDependentService(this.names, this.fatherNames);
        this.listDependentController = new ListDependentController(this.names);
        this.deleteDependentService = new DeleteDependentService(this.names, this.fatherNames);
        this.deleteDependentController = new DeleteDependentController(this.names, this.fatherNames);
        this.createDependentService = new CreateDependentService(this.names, this.fatherNames);
        this.createDependentController = new CreateDependentController(this.names, this.fatherNames);
    }
    async execute() {
        if (!this.names || !this.fatherNames) {
            this.console.one([
                this.messages.moduleNotFound,
                'red',
                true,
                false,
                false,
            ]);
            throw new Error();
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'services',
            `create${this.names.upperModuleName}`,
            `Create${this.names.upperModuleName}Controller.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `create${this.names.upperModuleName}`,
                `Create${this.names.upperModuleName}Controller.ts`,
            ], this.createDependentController.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `create${this.names.upperModuleName}`,
                `Create${this.names.upperModuleName}Controller.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `create${this.names.upperModuleName}`,
                `Create${this.names.upperModuleName}Controller.ts`,
            ], this.createDependentController.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'services',
            `create${this.names.upperModuleName}`,
            `Create${this.names.upperModuleName}Service.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `create${this.names.upperModuleName}`,
                `Create${this.names.upperModuleName}Service.ts`,
            ], this.createDependentService.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `create${this.names.upperModuleName}`,
                `Create${this.names.upperModuleName}Service.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `create${this.names.upperModuleName}`,
                `Create${this.names.upperModuleName}Service.ts`,
            ], this.createDependentService.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'services',
            `delete${this.names.upperModuleName}`,
            `Delete${this.names.upperModuleName}Controller.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `delete${this.names.upperModuleName}`,
                `Delete${this.names.upperModuleName}Controller.ts`,
            ], this.deleteDependentController.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `delete${this.names.upperModuleName}`,
                `Delete${this.names.upperModuleName}Controller.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `delete${this.names.upperModuleName}`,
                `Delete${this.names.upperModuleName}Controller.ts`,
            ], this.deleteDependentController.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'services',
            `delete${this.names.upperModuleName}`,
            `Delete${this.names.upperModuleName}Service.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `delete${this.names.upperModuleName}`,
                `Delete${this.names.upperModuleName}Service.ts`,
            ], this.deleteDependentService.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `delete${this.names.upperModuleName}`,
                `Delete${this.names.upperModuleName}Service.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `delete${this.names.upperModuleName}`,
                `Delete${this.names.upperModuleName}Service.ts`,
            ], this.deleteDependentService.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'services',
            `list${this.names.upperModuleName}`,
            `List${this.names.upperModuleName}Controller.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `list${this.names.upperModuleName}`,
                `List${this.names.upperModuleName}Controller.ts`,
            ], this.listDependentController.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `list${this.names.upperModuleName}`,
                `List${this.names.upperModuleName}Controller.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `list${this.names.upperModuleName}`,
                `List${this.names.upperModuleName}Controller.ts`,
            ], this.listDependentController.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'services',
            `list${this.names.upperModuleName}`,
            `List${this.names.upperModuleName}Service.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `list${this.names.upperModuleName}`,
                `List${this.names.upperModuleName}Service.ts`,
            ], this.listDependentService.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `list${this.names.upperModuleName}`,
                `List${this.names.upperModuleName}Service.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `list${this.names.upperModuleName}`,
                `List${this.names.upperModuleName}Service.ts`,
            ], this.listDependentService.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'services',
            `show${this.names.upperModuleName}`,
            `Show${this.names.upperModuleName}Controller.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `show${this.names.upperModuleName}`,
                `Show${this.names.upperModuleName}Controller.ts`,
            ], this.showDependentController.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `show${this.names.upperModuleName}`,
                `Show${this.names.upperModuleName}Controller.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `show${this.names.upperModuleName}`,
                `Show${this.names.upperModuleName}Controller.ts`,
            ], this.showDependentController.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'services',
            `show${this.names.upperModuleName}`,
            `Show${this.names.upperModuleName}Service.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `show${this.names.upperModuleName}`,
                `Show${this.names.upperModuleName}Service.ts`,
            ], this.showDependentService.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `show${this.names.upperModuleName}`,
                `Show${this.names.upperModuleName}Service.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `show${this.names.upperModuleName}`,
                `Show${this.names.upperModuleName}Service.ts`,
            ], this.showDependentService.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'services',
            `update${this.names.upperModuleName}`,
            `Update${this.names.upperModuleName}Controller.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `update${this.names.upperModuleName}`,
                `Update${this.names.upperModuleName}Controller.ts`,
            ], this.updateDependentController.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `update${this.names.upperModuleName}`,
                `Update${this.names.upperModuleName}Controller.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `update${this.names.upperModuleName}`,
                `Update${this.names.upperModuleName}Controller.ts`,
            ], this.updateDependentController.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'services',
            `update${this.names.upperModuleName}`,
            `Update${this.names.upperModuleName}Service.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `update${this.names.upperModuleName}`,
                `Update${this.names.upperModuleName}Service.ts`,
            ], this.updateDependentService.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `update${this.names.upperModuleName}`,
                `Update${this.names.upperModuleName}Service.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'services',
                `update${this.names.upperModuleName}`,
                `Update${this.names.upperModuleName}Service.ts`,
            ], this.updateDependentService.execute());
        }
    }
}
