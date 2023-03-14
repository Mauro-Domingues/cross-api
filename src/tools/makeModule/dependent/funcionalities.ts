import { appendFile, existsSync, truncate } from 'fs';
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
import messages from '@tools/messages';

export class MakeDependentFunctionalities {
  private messages: typeof messages;
  private names: IModuleNamesDTO | undefined;
  private fatherNames: IModuleNamesDTO | undefined;
  private updateDependentService: UpdateDependentService;
  private updateDependentController: UpdateDependentController;
  private showDependentService: ShowDependentService;
  private showDependentController: ShowDependentController;
  private listDependentService: ListDependentService;
  private listDependentController: ListDependentController;
  private deleteDependentService: DeleteDependentService;
  private deleteDependentController: DeleteDependentController;
  private createDependentService: CreateDependentService;
  private createDependentController: CreateDependentController;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = messages;
    this.names = names;
    this.fatherNames = fatherNames;
    this.updateDependentService = new UpdateDependentService(
      this.names,
      this.fatherNames,
    );
    this.updateDependentController = new UpdateDependentController(
      this.names,
      this.fatherNames,
    );
    this.showDependentService = new ShowDependentService(
      this.names,
      this.fatherNames,
    );
    this.showDependentController = new ShowDependentController(this.names);
    this.listDependentService = new ListDependentService(
      this.names,
      this.fatherNames,
    );
    this.listDependentController = new ListDependentController(this.names);
    this.deleteDependentService = new DeleteDependentService(
      this.names,
      this.fatherNames,
    );
    this.deleteDependentController = new DeleteDependentController(this.names);
    this.createDependentService = new CreateDependentService(
      this.names,
      this.fatherNames,
    );
    this.createDependentController = new CreateDependentController(
      this.names,
      this.fatherNames,
    );
  }

  public async execute(): Promise<void> {
    if (!this.names || !this.fatherNames) {
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
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`,
        this.createDependentController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller.ts`,
        this.createDependentController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`,
        this.createDependentService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Service.ts`,
        this.createDependentService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`,
        this.deleteDependentController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller.ts`,
        this.deleteDependentController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`,
        this.deleteDependentService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Service.ts`,
        this.deleteDependentService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`,
        this.listDependentController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller.ts`,
        this.listDependentController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`,
        this.listDependentService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Service.ts`,
        this.listDependentService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`,
        this.showDependentController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller.ts`,
        this.showDependentController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`,
        this.showDependentService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Service.ts`,
        this.showDependentService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`,
        this.updateDependentController.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller.ts`,
        this.updateDependentController.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`,
        this.updateDependentService.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Service.ts`,
        this.updateDependentService.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
  }
}
