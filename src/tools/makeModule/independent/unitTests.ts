import { appendFile, existsSync, truncate } from 'fs';
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
import messages from '@tools/messages';

export class MakeUnitTests {
  private messages: typeof messages;
  private names: IModuleNamesDTO | undefined;
  private updateSpecService: UpdateSpecService;
  private updateSpecController: UpdateSpecController;
  private showSpecService: ShowSpecService;
  private showSpecController: ShowSpecController;
  private listSpecService: ListSpecService;
  private listSpecController: ListSpecController;
  private deleteSpecService: DeleteSpecService;
  private deleteSpecController: DeleteSpecController;
  private createSpecService: CreateSpecService;
  private createSpecController: CreateSpecController;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = messages;
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
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.spec.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.spec.ts`,
        this.createSpecController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.spec.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.spec.ts`,
        this.createSpecController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.spec.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.spec.ts`,
        this.createSpecService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.spec.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.spec.ts`,
        this.createSpecService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.spec.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.spec.ts`,
        this.deleteSpecController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.spec.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.spec.ts`,
        this.deleteSpecController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.spec.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.spec.ts`,
        this.deleteSpecService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.spec.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.spec.ts`,
        this.deleteSpecService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.spec.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.spec.ts`,
        this.listSpecController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.spec.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.spec.ts`,
        this.listSpecController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.spec.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.spec.ts`,
        this.listSpecService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.spec.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.spec.ts`,
        this.listSpecService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.spec.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.spec.ts`,
        this.showSpecController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.spec.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.spec.ts`,
        this.showSpecController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.spec.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.spec.ts`,
        this.showSpecService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.spec.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.spec.ts`,
        this.showSpecService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.spec.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.spec.ts`,
        this.updateSpecController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.spec.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.spec.ts`,
        this.updateSpecController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.spec.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.spec.ts`,
        this.updateSpecService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.spec.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.spec.ts`,
        this.updateSpecService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
  }
}
