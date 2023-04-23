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
  private messages: IMessagesDTO;
  private fileManager: FileManager;
  private console: Console;
  private names: IModuleNamesDTO | undefined;
  private fatherNames: IModuleNamesDTO | undefined;
  private updateSpecDependentService: UpdateSpecDependentService;
  private updateSpecDependentController: UpdateSpecDependentController;
  private showSpecDependentService: ShowSpecDependentService;
  private showSpecDependentController: ShowSpecDependentController;
  private listSpecDependentService: ListSpecDependentService;
  private listSpecDependentController: ListSpecDependentController;
  private deleteSpecDependentService: DeleteSpecDependentService;
  private deleteSpecDependentController: DeleteSpecDependentController;
  private createSpecDependentService: CreateSpecDependentService;
  private createSpecDependentController: CreateSpecDependentController;

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
      this.fatherNames,
    );
    this.showSpecDependentService = new ShowSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.showSpecDependentController = new ShowSpecDependentController(
      this.names,
      this.fatherNames,
    );
    this.listSpecDependentService = new ListSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.listSpecDependentController = new ListSpecDependentController(
      this.names,
      this.fatherNames,
    );
    this.deleteSpecDependentService = new DeleteSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.deleteSpecDependentController = new DeleteSpecDependentController(
      this.names,
      this.fatherNames,
    );
    this.createSpecDependentService = new CreateSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.createSpecDependentController = new CreateSpecDependentController(
      this.names,
      this.fatherNames,
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

    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Controller.spec.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Controller.spec.ts`,
        ],
        this.createSpecDependentController.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Controller.spec.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Controller.spec.ts`,
        ],
        this.createSpecDependentController.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Service.spec.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Service.spec.ts`,
        ],
        this.createSpecDependentService.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
        `Create${this.names.upperModuleName}Service.spec.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Service.spec.ts`,
        ],
        this.createSpecDependentService.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Controller.spec.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Controller.spec.ts`,
        ],
        this.deleteSpecDependentController.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Controller.spec.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Controller.spec.ts`,
        ],
        this.deleteSpecDependentController.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Service.spec.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Service.spec.ts`,
        ],
        this.deleteSpecDependentService.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
        `Delete${this.names.upperModuleName}Service.spec.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Service.spec.ts`,
        ],
        this.deleteSpecDependentService.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Controller.spec.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Controller.spec.ts`,
        ],
        this.listSpecDependentController.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Controller.spec.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Controller.spec.ts`,
        ],
        this.listSpecDependentController.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Service.spec.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Service.spec.ts`,
        ],
        this.listSpecDependentService.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
        `List${this.names.upperModuleName}Service.spec.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Service.spec.ts`,
        ],
        this.listSpecDependentService.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Controller.spec.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Controller.spec.ts`,
        ],
        this.showSpecDependentController.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Controller.spec.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Controller.spec.ts`,
        ],
        this.showSpecDependentController.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Service.spec.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Service.spec.ts`,
        ],
        this.showSpecDependentService.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
        `Show${this.names.upperModuleName}Service.spec.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Service.spec.ts`,
        ],
        this.showSpecDependentService.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Controller.spec.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Controller.spec.ts`,
        ],
        this.updateSpecDependentController.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Controller.spec.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Controller.spec.ts`,
        ],
        this.updateSpecDependentController.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Service.spec.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Service.spec.ts`,
        ],
        this.updateSpecDependentService.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
        `Update${this.names.upperModuleName}Service.spec.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Service.spec.ts`,
        ],
        this.updateSpecDependentService.execute(),
      );
    }
  }
}
