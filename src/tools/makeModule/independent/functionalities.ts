import { CreateController } from '@templates/modules/services/create/createController.js';
import { CreateService } from '@templates/modules/services/create/createService.js';
import { DeleteController } from '@templates/modules/services/delete/deleteController.js';
import { DeleteService } from '@templates/modules/services/delete/deleteService.js';
import { ListController } from '@templates/modules/services/list/listController.js';
import { ListService } from '@templates/modules/services/list/listService.js';
import { ShowController } from '@templates/modules/services/show/showController.js';
import { ShowService } from '@templates/modules/services/show/showService.js';
import { UpdateController } from '@templates/modules/services/update/updateController.js';
import { UpdateService } from '@templates/modules/services/update/updateService.js';
import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeFunctionalities {
  private messages: IMessagesDTO;
  private fileManager: FileManager;
  private console: Console;
  private names: IModuleNamesDTO | undefined;
  private updateService: UpdateService;
  private updateController: UpdateController;
  private showService: ShowService;
  private showController: ShowController;
  private listService: ListService;
  private listController: ListController;
  private deleteService: DeleteService;
  private deleteController: DeleteController;
  private createService: CreateService;
  private createController: CreateController;

  constructor(names: IModuleNamesDTO | undefined) {
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

  public async execute(): Promise<void> {
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

    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Controller.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Controller.ts`,
        ],
        this.createController.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Controller.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Controller.ts`,
        ],
        this.createController.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Service.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Service.ts`,
        ],
        this.createService.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Service.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Service.ts`,
        ],
        this.createService.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Controller.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Controller.ts`,
        ],
        this.deleteController.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Controller.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Controller.ts`,
        ],
        this.deleteController.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Service.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Service.ts`,
        ],
        this.deleteService.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Service.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Service.ts`,
        ],
        this.deleteService.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Controller.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Controller.ts`,
        ],
        this.listController.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Controller.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Controller.ts`,
        ],
        this.listController.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Service.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Service.ts`,
        ],
        this.listService.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Service.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Service.ts`,
        ],
        this.listService.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Controller.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Controller.ts`,
        ],
        this.showController.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Controller.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Controller.ts`,
        ],
        this.showController.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Service.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Service.ts`,
        ],
        this.showService.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Service.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Service.ts`,
        ],
        this.showService.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Controller.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Controller.ts`,
        ],
        this.updateController.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Controller.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Controller.ts`,
        ],
        this.updateController.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Service.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Service.ts`,
        ],
        this.updateService.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Service.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Service.ts`,
        ],
        this.updateService.execute(),
      );
    }
  }
}
