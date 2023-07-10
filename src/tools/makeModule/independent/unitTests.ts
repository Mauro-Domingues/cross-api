import { CreateSpecController } from '@templates/modules/services/create/createControllerSpec.js';
import { CreateSpecService } from '@templates/modules/services/create/createServiceSpec.js';
import { DeleteSpecController } from '@templates/modules/services/delete/deleteControllerSpec.js';
import { DeleteSpecService } from '@templates/modules/services/delete/deleteServiceSpec.js';
import { ListSpecController } from '@templates/modules/services/list/listControllerSpec.js';
import { ListSpecService } from '@templates/modules/services/list/listServiceSpec.js';
import { ShowSpecController } from '@templates/modules/services/show/showControllerSpec.js';
import { ShowSpecService } from '@templates/modules/services/show/showServiceSpec.js';
import { UpdateSpecController } from '@templates/modules/services/update/updateControllerSpec.js';
import { UpdateSpecService } from '@templates/modules/services/update/updateServiceSpec.js';
import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeUnitTests {
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly names: IModuleNamesDTO | undefined;
  private readonly updateSpecService: UpdateSpecService;
  private readonly updateSpecController: UpdateSpecController;
  private readonly showSpecService: ShowSpecService;
  private readonly showSpecController: ShowSpecController;
  private readonly listSpecService: ListSpecService;
  private readonly listSpecController: ListSpecController;
  private readonly deleteSpecService: DeleteSpecService;
  private readonly deleteSpecController: DeleteSpecController;
  private readonly createSpecService: CreateSpecService;
  private readonly createSpecController: CreateSpecController;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.names = names;
    this.updateSpecService = new UpdateSpecService(this.names);
    this.updateSpecController = new UpdateSpecController(this.names);
    this.showSpecService = new ShowSpecService(this.names);
    this.showSpecController = new ShowSpecController(this.names);
    this.listSpecService = new ListSpecService(this.names);
    this.listSpecController = new ListSpecController(this.names);
    this.deleteSpecService = new DeleteSpecService(this.names);
    this.deleteSpecController = new DeleteSpecController(this.names);
    this.createSpecService = new CreateSpecService(this.names);
    this.createSpecController = new CreateSpecController(this.names);
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

    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
