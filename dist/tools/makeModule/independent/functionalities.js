import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';
import { CreateController } from '../../../templates/modules/services/create/createController.js';
import { CreateService } from '../../../templates/modules/services/create/createService.js';
import { DeleteController } from '../../../templates/modules/services/delete/deleteController.js';
import { DeleteService } from '../../../templates/modules/services/delete/deleteService.js';
import { ListController } from '../../../templates/modules/services/list/listController.js';
import { ListService } from '../../../templates/modules/services/list/listService.js';
import { ShowController } from '../../../templates/modules/services/show/showController.js';
import { ShowService } from '../../../templates/modules/services/show/showService.js';
import { UpdateController } from '../../../templates/modules/services/update/updateController.js';
import { UpdateService } from '../../../templates/modules/services/update/updateService.js';
import { Messages } from '../../messages.js';

export class MakeFunctionalities {
  messages;
  names;
  updateService;
  updateController;
  showService;
  showController;
  listService;
  listController;
  deleteService;
  deleteController;
  createService;
  createController;
  constructor(names) {
    this.messages = new Messages().execute();
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
  async execute() {
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
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Controller.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Controller.ts`,
        ),
        this.createController.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Controller.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Controller.ts`,
        ),
        this.createController.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Service.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Service.ts`,
        ),
        this.createService.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Service.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Service.ts`,
        ),
        this.createService.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Controller.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Controller.ts`,
        ),
        this.deleteController.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Controller.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Controller.ts`,
        ),
        this.deleteController.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Service.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Service.ts`,
        ),
        this.deleteService.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Service.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Service.ts`,
        ),
        this.deleteService.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Controller.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Controller.ts`,
        ),
        this.listController.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Controller.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Controller.ts`,
        ),
        this.listController.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Service.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Service.ts`,
        ),
        this.listService.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Service.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Service.ts`,
        ),
        this.listService.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Controller.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Controller.ts`,
        ),
        this.showController.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Controller.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Controller.ts`,
        ),
        this.showController.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Service.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Service.ts`,
        ),
        this.showService.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Service.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Service.ts`,
        ),
        this.showService.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Controller.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Controller.ts`,
        ),
        this.updateController.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Controller.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Controller.ts`,
        ),
        this.updateController.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Service.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Service.ts`,
        ),
        this.updateService.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Service.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Service.ts`,
        ),
        this.updateService.execute(),
      );
    }
  }
}
