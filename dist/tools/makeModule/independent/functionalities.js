import { CreateController } from '../../../templates/modules/services/create/createController.js';
import { CreateService } from '../../../templates/modules/services/create/createService.js';
import { DeleteController } from '../../../templates/modules/services/delete/deleteController.js';
import { DeleteService } from '../../../templates/modules/services/delete/deleteService.js';
import { ListController } from '../../../templates/modules/services/list/listController.js';
import { ListService } from '../../../templates/modules/services/list/listService.js';
import { ShowController } from '../../../templates/modules/services/show/showController.js';
import { ShowService } from '../../../templates/modules/services/show/showService.js';
import { UpdateController } from '../../../templates/modules/services/update/updateController.js';
import { UpdateService } from '../../../templates/modules/services/update/updateService.js';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';
import { FileManager } from '../../fileManager.js';
export class MakeFunctionalities {
    messages;
    fileManager;
    console;
    names;
    updateService;
    updateController;
    showService;
    showController;
    listService;
    listController;
    deleteService;
    deleteController;
    createService;
    createController;
    constructor(names) {
        this.messages = new Messages().execute();
        this.fileManager = new FileManager();
        this.console = new Console();
        this.names = names;
        this.updateService = new UpdateService(this.names);
        this.updateController = new UpdateController(this.names);
        this.showService = new ShowService(this.names);
        this.showController = new ShowController(this.names);
        this.listService = new ListService(this.names);
        this.listController = new ListController(this.names);
        this.deleteService = new DeleteService(this.names);
        this.deleteController = new DeleteController(this.names);
        this.createService = new CreateService(this.names);
        this.createController = new CreateController(this.names);
    }
    async execute() {
        if (!this.names) {
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
            this.names.pluralLowerModuleName,
            'services',
            `create${this.names.upperModuleName}`,
            `Create${this.names.upperModuleName}Controller.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `create${this.names.upperModuleName}`,
                `Create${this.names.upperModuleName}Controller.ts`,
            ], this.createController.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `create${this.names.upperModuleName}`,
                `Create${this.names.upperModuleName}Controller.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `create${this.names.upperModuleName}`,
                `Create${this.names.upperModuleName}Controller.ts`,
            ], this.createController.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.names.pluralLowerModuleName,
            'services',
            `create${this.names.upperModuleName}`,
            `Create${this.names.upperModuleName}Service.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `create${this.names.upperModuleName}`,
                `Create${this.names.upperModuleName}Service.ts`,
            ], this.createService.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `create${this.names.upperModuleName}`,
                `Create${this.names.upperModuleName}Service.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `create${this.names.upperModuleName}`,
                `Create${this.names.upperModuleName}Service.ts`,
            ], this.createService.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.names.pluralLowerModuleName,
            'services',
            `delete${this.names.upperModuleName}`,
            `Delete${this.names.upperModuleName}Controller.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `delete${this.names.upperModuleName}`,
                `Delete${this.names.upperModuleName}Controller.ts`,
            ], this.deleteController.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `delete${this.names.upperModuleName}`,
                `Delete${this.names.upperModuleName}Controller.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `delete${this.names.upperModuleName}`,
                `Delete${this.names.upperModuleName}Controller.ts`,
            ], this.deleteController.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.names.pluralLowerModuleName,
            'services',
            `delete${this.names.upperModuleName}`,
            `Delete${this.names.upperModuleName}Service.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `delete${this.names.upperModuleName}`,
                `Delete${this.names.upperModuleName}Service.ts`,
            ], this.deleteService.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `delete${this.names.upperModuleName}`,
                `Delete${this.names.upperModuleName}Service.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `delete${this.names.upperModuleName}`,
                `Delete${this.names.upperModuleName}Service.ts`,
            ], this.deleteService.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.names.pluralLowerModuleName,
            'services',
            `list${this.names.upperModuleName}`,
            `List${this.names.upperModuleName}Controller.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `list${this.names.upperModuleName}`,
                `List${this.names.upperModuleName}Controller.ts`,
            ], this.listController.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `list${this.names.upperModuleName}`,
                `List${this.names.upperModuleName}Controller.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `list${this.names.upperModuleName}`,
                `List${this.names.upperModuleName}Controller.ts`,
            ], this.listController.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.names.pluralLowerModuleName,
            'services',
            `list${this.names.upperModuleName}`,
            `List${this.names.upperModuleName}Service.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `list${this.names.upperModuleName}`,
                `List${this.names.upperModuleName}Service.ts`,
            ], this.listService.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `list${this.names.upperModuleName}`,
                `List${this.names.upperModuleName}Service.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `list${this.names.upperModuleName}`,
                `List${this.names.upperModuleName}Service.ts`,
            ], this.listService.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.names.pluralLowerModuleName,
            'services',
            `show${this.names.upperModuleName}`,
            `Show${this.names.upperModuleName}Controller.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `show${this.names.upperModuleName}`,
                `Show${this.names.upperModuleName}Controller.ts`,
            ], this.showController.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `show${this.names.upperModuleName}`,
                `Show${this.names.upperModuleName}Controller.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `show${this.names.upperModuleName}`,
                `Show${this.names.upperModuleName}Controller.ts`,
            ], this.showController.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.names.pluralLowerModuleName,
            'services',
            `show${this.names.upperModuleName}`,
            `Show${this.names.upperModuleName}Service.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `show${this.names.upperModuleName}`,
                `Show${this.names.upperModuleName}Service.ts`,
            ], this.showService.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `show${this.names.upperModuleName}`,
                `Show${this.names.upperModuleName}Service.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `show${this.names.upperModuleName}`,
                `Show${this.names.upperModuleName}Service.ts`,
            ], this.showService.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.names.pluralLowerModuleName,
            'services',
            `update${this.names.upperModuleName}`,
            `Update${this.names.upperModuleName}Controller.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `update${this.names.upperModuleName}`,
                `Update${this.names.upperModuleName}Controller.ts`,
            ], this.updateController.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `update${this.names.upperModuleName}`,
                `Update${this.names.upperModuleName}Controller.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `update${this.names.upperModuleName}`,
                `Update${this.names.upperModuleName}Controller.ts`,
            ], this.updateController.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.names.pluralLowerModuleName,
            'services',
            `update${this.names.upperModuleName}`,
            `Update${this.names.upperModuleName}Service.ts`,
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `update${this.names.upperModuleName}`,
                `Update${this.names.upperModuleName}Service.ts`,
            ], this.updateService.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `update${this.names.upperModuleName}`,
                `Update${this.names.upperModuleName}Service.ts`,
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.names.pluralLowerModuleName,
                'services',
                `update${this.names.upperModuleName}`,
                `Update${this.names.upperModuleName}Service.ts`,
            ], this.updateService.execute());
        }
    }
}
