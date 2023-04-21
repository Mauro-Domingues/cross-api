import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';
import { CreateSpecController } from '../../../templates/modules/services/create/createControllerSpec.js';
import { CreateSpecService } from '../../../templates/modules/services/create/createServiceSpec.js';
import { DeleteSpecController } from '../../../templates/modules/services/delete/deleteControllerSpec.js';
import { DeleteSpecService } from '../../../templates/modules/services/delete/deleteServiceSpec.js';
import { ListSpecController } from '../../../templates/modules/services/list/listControllerSpec.js';
import { ListSpecService } from '../../../templates/modules/services/list/listServiceSpec.js';
import { ShowSpecController } from '../../../templates/modules/services/show/showControllerSpec.js';
import { ShowSpecService } from '../../../templates/modules/services/show/showServiceSpec.js';
import { UpdateSpecController } from '../../../templates/modules/services/update/updateControllerSpec.js';
import { UpdateSpecService } from '../../../templates/modules/services/update/updateServiceSpec.js';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';

export class MakeUnitTests {
  messages;
  console;
  names;
  updateSpecService;
  updateSpecController;
  showSpecService;
  showSpecController;
  listSpecService;
  listSpecController;
  deleteSpecService;
  deleteSpecController;
  createSpecService;
  createSpecController;
  constructor(names) {
    this.messages = new Messages().execute();
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
  async execute() {
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
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Controller.spec.ts`,
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
          `Create${this.names.upperModuleName}Controller.spec.ts`,
        ),
        this.createSpecController.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Controller.spec.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Controller.spec.ts`,
        ),
        this.createSpecController.execute(),
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
          `Create${this.names.upperModuleName}Service.spec.ts`,
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
          `Create${this.names.upperModuleName}Service.spec.ts`,
        ),
        this.createSpecService.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Service.spec.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
          `Create${this.names.upperModuleName}Service.spec.ts`,
        ),
        this.createSpecService.execute(),
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
          `Delete${this.names.upperModuleName}Controller.spec.ts`,
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
          `Delete${this.names.upperModuleName}Controller.spec.ts`,
        ),
        this.deleteSpecController.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Controller.spec.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Controller.spec.ts`,
        ),
        this.deleteSpecController.execute(),
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
          `Delete${this.names.upperModuleName}Service.spec.ts`,
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
          `Delete${this.names.upperModuleName}Service.spec.ts`,
        ),
        this.deleteSpecService.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Service.spec.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
          `Delete${this.names.upperModuleName}Service.spec.ts`,
        ),
        this.deleteSpecService.execute(),
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
          `List${this.names.upperModuleName}Controller.spec.ts`,
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
          `List${this.names.upperModuleName}Controller.spec.ts`,
        ),
        this.listSpecController.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Controller.spec.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Controller.spec.ts`,
        ),
        this.listSpecController.execute(),
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
          `List${this.names.upperModuleName}Service.spec.ts`,
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
          `List${this.names.upperModuleName}Service.spec.ts`,
        ),
        this.listSpecService.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Service.spec.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
          `List${this.names.upperModuleName}Service.spec.ts`,
        ),
        this.listSpecService.execute(),
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
          `Show${this.names.upperModuleName}Controller.spec.ts`,
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
          `Show${this.names.upperModuleName}Controller.spec.ts`,
        ),
        this.showSpecController.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Controller.spec.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Controller.spec.ts`,
        ),
        this.showSpecController.execute(),
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
          `Show${this.names.upperModuleName}Service.spec.ts`,
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
          `Show${this.names.upperModuleName}Service.spec.ts`,
        ),
        this.showSpecService.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Service.spec.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
          `Show${this.names.upperModuleName}Service.spec.ts`,
        ),
        this.showSpecService.execute(),
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
          `Update${this.names.upperModuleName}Controller.spec.ts`,
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
          `Update${this.names.upperModuleName}Controller.spec.ts`,
        ),
        this.updateSpecController.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Controller.spec.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Controller.spec.ts`,
        ),
        this.updateSpecController.execute(),
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
          `Update${this.names.upperModuleName}Service.spec.ts`,
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
          `Update${this.names.upperModuleName}Service.spec.ts`,
        ),
        this.updateSpecService.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Service.spec.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
          `Update${this.names.upperModuleName}Service.spec.ts`,
        ),
        this.updateSpecService.execute(),
      );
    }
  }
}
