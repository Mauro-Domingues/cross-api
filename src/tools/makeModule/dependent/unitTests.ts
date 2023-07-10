import { CreateSpecDependentController } from '@templates/modules/services/createDependent/createControllerSpec.js';
import { CreateSpecDependentService } from '@templates/modules/services/createDependent/createServiceSpec.js';
import { DeleteSpecDependentController } from '@templates/modules/services/deleteDependent/deleteControllerSpec.js';
import { DeleteSpecDependentService } from '@templates/modules/services/deleteDependent/deleteServiceSpec.js';
import { ListSpecDependentController } from '@templates/modules/services/listDependent/listControllerSpec.js';
import { ListSpecDependentService } from '@templates/modules/services/listDependent/listServiceSpec.js';
import { ShowSpecDependentController } from '@templates/modules/services/showDependent/showControllerSpec.js';
import { ShowSpecDependentService } from '@templates/modules/services/showDependent/showServiceSpec.js';
import { UpdateSpecDependentController } from '@templates/modules/services/updateDependent/updateControllerSpec.js';
import { UpdateSpecDependentService } from '@templates/modules/services/updateDependent/updateServiceSpec.js';
import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeDependentUnitTests {
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly names: IModuleNamesDTO | undefined;
  private readonly fatherNames: IModuleNamesDTO | undefined;
  private readonly updateSpecDependentService: UpdateSpecDependentService;
  private readonly updateSpecDependentController: UpdateSpecDependentController;
  private readonly showSpecDependentService: ShowSpecDependentService;
  private readonly showSpecDependentController: ShowSpecDependentController;
  private readonly listSpecDependentService: ListSpecDependentService;
  private readonly listSpecDependentController: ListSpecDependentController;
  private readonly deleteSpecDependentService: DeleteSpecDependentService;
  private readonly deleteSpecDependentController: DeleteSpecDependentController;
  private readonly createSpecDependentService: CreateSpecDependentService;
  private readonly createSpecDependentController: CreateSpecDependentController;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.names = names;
    this.fatherNames = fatherNames;
    this.updateSpecDependentService = new UpdateSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.updateSpecDependentController = new UpdateSpecDependentController(
      this.names,
    );
    this.showSpecDependentService = new ShowSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.showSpecDependentController = new ShowSpecDependentController(
      this.names,
    );
    this.listSpecDependentService = new ListSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.listSpecDependentController = new ListSpecDependentController(
      this.names,
    );
    this.deleteSpecDependentService = new DeleteSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.deleteSpecDependentController = new DeleteSpecDependentController(
      this.names,
    );
    this.createSpecDependentService = new CreateSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.createSpecDependentController = new CreateSpecDependentController(
      this.names,
    );
  }

  public async execute(): Promise<void> {
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

    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Controller.spec.ts`,
      ],
      this.createSpecDependentController,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Service.spec.ts`,
      ],
      this.createSpecDependentService,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Controller.spec.ts`,
      ],
      this.deleteSpecDependentController,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Service.spec.ts`,
      ],
      this.deleteSpecDependentService,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Controller.spec.ts`,
      ],
      this.listSpecDependentController,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Service.spec.ts`,
      ],
      this.listSpecDependentService,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Controller.spec.ts`,
      ],
      this.showSpecDependentController,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Service.spec.ts`,
      ],
      this.showSpecDependentService,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Controller.spec.ts`,
      ],
      this.updateSpecDependentController,
    );
    return this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Service.spec.ts`,
      ],
      this.updateSpecDependentService,
    );
  }
}
