import { CreateController } from '@templates/modules/services/create/createController';
import { CreateService } from '@templates/modules/services/create/createService';
import { DeleteController } from '@templates/modules/services/delete/deleteController';
import { DeleteService } from '@templates/modules/services/delete/deleteService';
import { ListController } from '@templates/modules/services/list/listController';
import { ListService } from '@templates/modules/services/list/listService';
import { ShowController } from '@templates/modules/services/show/showController';
import { ShowService } from '@templates/modules/services/show/showService';
import { UpdateController } from '@templates/modules/services/update/updateController';
import { UpdateService } from '@templates/modules/services/update/updateService';
import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeFunctionalities {
  private readonly createController: CreateController;
  private readonly deleteController: DeleteController;
  private readonly updateController: UpdateController;
  private readonly showController: ShowController;
  private readonly listController: ListController;
  private readonly updateService: UpdateService;
  private readonly deleteService: DeleteService;
  private readonly createService: CreateService;
  private readonly listService: ListService;
  private readonly showService: ShowService;
  private readonly fileManager: FileManager;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(private readonly names: IModuleNamesDTO | undefined) {
    this.updateController = new UpdateController(this.names);
    this.createController = new CreateController(this.names);
    this.deleteController = new DeleteController(this.names);
    this.showController = new ShowController(this.names);
    this.listController = new ListController(this.names);
    this.updateService = new UpdateService(this.names);
    this.deleteService = new DeleteService(this.names);
    this.createService = new CreateService(this.names);
    this.showService = new ShowService(this.names);
    this.listService = new ListService(this.names);
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
  }

  public execute(): void {
    if (!this.names) {
      throw this.console.one({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Controller.ts`,
      ],
      this.createController,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Service.ts`,
      ],
      this.createService,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Controller.ts`,
      ],
      this.deleteController,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Service.ts`,
      ],
      this.deleteService,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Controller.ts`,
      ],
      this.listController,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Service.ts`,
      ],
      this.listService,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Controller.ts`,
      ],
      this.showController,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Service.ts`,
      ],
      this.showService,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Controller.ts`,
      ],
      this.updateController,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Service.ts`,
      ],
      this.updateService,
    );
  }
}
