import { CreateSpecController } from '@templates/modules/services/create/createControllerSpec';
import { CreateSpecService } from '@templates/modules/services/create/createServiceSpec';
import { DeleteSpecController } from '@templates/modules/services/delete/deleteControllerSpec';
import { DeleteSpecService } from '@templates/modules/services/delete/deleteServiceSpec';
import { ListSpecController } from '@templates/modules/services/list/listControllerSpec';
import { ListSpecService } from '@templates/modules/services/list/listServiceSpec';
import { ShowSpecController } from '@templates/modules/services/show/showControllerSpec';
import { ShowSpecService } from '@templates/modules/services/show/showServiceSpec';
import { UpdateSpecController } from '@templates/modules/services/update/updateControllerSpec';
import { UpdateSpecService } from '@templates/modules/services/update/updateServiceSpec';
import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeUnitTests {
  private readonly updateSpecController: UpdateSpecController;
  private readonly createSpecController: CreateSpecController;
  private readonly deleteSpecController: DeleteSpecController;
  private readonly showSpecController: ShowSpecController;
  private readonly listSpecController: ListSpecController;
  private readonly updateSpecService: UpdateSpecService;
  private readonly createSpecService: CreateSpecService;
  private readonly deleteSpecService: DeleteSpecService;
  private readonly showSpecService: ShowSpecService;
  private readonly listSpecService: ListSpecService;
  private readonly fileManager: FileManager;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(private readonly names: IModuleNamesDTO | undefined) {
    this.createSpecController = new CreateSpecController(this.names);
    this.updateSpecController = new UpdateSpecController(this.names);
    this.deleteSpecController = new DeleteSpecController(this.names);
    this.showSpecController = new ShowSpecController(this.names);
    this.listSpecController = new ListSpecController(this.names);
    this.deleteSpecService = new DeleteSpecService(this.names);
    this.createSpecService = new CreateSpecService(this.names);
    this.updateSpecService = new UpdateSpecService(this.names);
    this.showSpecService = new ShowSpecService(this.names);
    this.listSpecService = new ListSpecService(this.names);
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
        `Create${this.names.upperModuleName}Controller.spec.ts`,
      ],
      this.createSpecController,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Service.spec.ts`,
      ],
      this.createSpecService,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Controller.spec.ts`,
      ],
      this.deleteSpecController,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Service.spec.ts`,
      ],
      this.deleteSpecService,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Controller.spec.ts`,
      ],
      this.listSpecController,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Service.spec.ts`,
      ],
      this.listSpecService,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Controller.spec.ts`,
      ],
      this.showSpecController,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Service.spec.ts`,
      ],
      this.showSpecService,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Controller.spec.ts`,
      ],
      this.updateSpecController,
    );
    return this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Service.spec.ts`,
      ],
      this.updateSpecService,
    );
  }
}
