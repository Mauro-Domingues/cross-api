import { CreateDependentController } from '@templates/modules/services/createDependent/createController';
import { CreateDependentService } from '@templates/modules/services/createDependent/createService';
import { DeleteDependentController } from '@templates/modules/services/deleteDependent/deleteController';
import { DeleteDependentService } from '@templates/modules/services/deleteDependent/deleteService';
import { ListDependentController } from '@templates/modules/services/listDependent/listController';
import { ListDependentService } from '@templates/modules/services/listDependent/listService';
import { ShowDependentController } from '@templates/modules/services/showDependent/showController';
import { ShowDependentService } from '@templates/modules/services/showDependent/showService';
import { UpdateDependentController } from '@templates/modules/services/updateDependent/updateController';
import { UpdateDependentService } from '@templates/modules/services/updateDependent/updateService';
import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeDependentFunctionalities {
  private readonly updateDependentController: UpdateDependentController;
  private readonly createDependentController: CreateDependentController;
  private readonly deleteDependentController: DeleteDependentController;
  private readonly showDependentController: ShowDependentController;
  private readonly listDependentController: ListDependentController;
  private readonly updateDependentService: UpdateDependentService;
  private readonly deleteDependentService: DeleteDependentService;
  private readonly createDependentService: CreateDependentService;
  private readonly showDependentService: ShowDependentService;
  private readonly listDependentService: ListDependentService;
  private readonly fileManager: FileManager;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly names: IModuleNamesDTO | undefined,
    private readonly fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.updateDependentController = new UpdateDependentController(
      this.names,
      this.fatherNames,
    );
    this.createDependentController = new CreateDependentController(
      this.names,
      this.fatherNames,
    );
    this.deleteDependentController = new DeleteDependentController(
      this.names,
      this.fatherNames,
    );
    this.showDependentController = new ShowDependentController(
      this.names,
      this.fatherNames,
    );
    this.listDependentController = new ListDependentController(
      this.names,
      this.fatherNames,
    );
    this.deleteDependentService = new DeleteDependentService(
      this.names,
      this.fatherNames,
    );
    this.createDependentService = new CreateDependentService(
      this.names,
      this.fatherNames,
    );
    this.updateDependentService = new UpdateDependentService(
      this.names,
      this.fatherNames,
    );
    this.showDependentService = new ShowDependentService(
      this.names,
      this.fatherNames,
    );
    this.listDependentService = new ListDependentService(
      this.names,
      this.fatherNames,
    );
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
  }

  public execute(): void {
    if (!this.names || !this.fatherNames) {
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
        this.fatherNames.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Controller.ts`,
      ],
      this.createDependentController,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Service.ts`,
      ],
      this.createDependentService,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Controller.ts`,
      ],
      this.deleteDependentController,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Service.ts`,
      ],
      this.deleteDependentService,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Controller.ts`,
      ],
      this.listDependentController,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Service.ts`,
      ],
      this.listDependentService,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Controller.ts`,
      ],
      this.showDependentController,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Service.ts`,
      ],
      this.showDependentService,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Controller.ts`,
      ],
      this.updateDependentController,
    );
    return this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Service.ts`,
      ],
      this.updateDependentService,
    );
  }
}
