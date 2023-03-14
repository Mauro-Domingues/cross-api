import { appendFile, existsSync, truncate } from 'fs';
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
import messages from '@tools/messages';

export class MakeFunctionalities {
  private messages: typeof messages;
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
    this.messages = messages;
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
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`,
        this.createController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`,
        this.createController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`,
        this.createService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`,
        this.createService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`,
        this.deleteController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`,
        this.deleteController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`,
        this.deleteService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`,
        this.deleteService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`,
        this.listController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`,
        this.listController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`,
        this.listService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`,
        this.listService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`,
        this.showController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`,
        this.showController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`,
        this.showService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`,
        this.showService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`,
        this.updateController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`,
        this.updateController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`,
        this.updateService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`,
        this.updateService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
  }
}
