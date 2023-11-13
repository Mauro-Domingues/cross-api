import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateFullDependentRoute {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Pick<IModuleNamesDTO, 'upperModuleName' | 'routeModuleName'>
      | undefined,
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names || !this.fatherNames) {
      throw this.console.one({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    return `import { Router } ${'from'} 'express';

import { Create${this.names.upperModuleName}Controller } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/services/create${this.names.upperModuleName}/Create${
      this.names.upperModuleName
    }Controller';
import { Show${this.names.upperModuleName}Controller } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/services/show${this.names.upperModuleName}/Show${
      this.names.upperModuleName
    }Controller';
import { List${this.names.upperModuleName}Controller } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/services/list${this.names.upperModuleName}/List${
      this.names.upperModuleName
    }Controller';
import { Update${this.names.upperModuleName}Controller } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/services/update${this.names.upperModuleName}/Update${
      this.names.upperModuleName
    }Controller';
import { Delete${this.names.upperModuleName}Controller } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/services/delete${this.names.upperModuleName}/Delete${
      this.names.upperModuleName
    }Controller';

const ${this.fatherNames.lowerModuleName}Router = Router();
const create${this.names.upperModuleName}Controller = new Create${
      this.names.upperModuleName
    }Controller();
const list${this.names.upperModuleName}Controller = new List${
      this.names.upperModuleName
    }Controller();
const show${this.names.upperModuleName}Controller = new Show${
      this.names.upperModuleName
    }Controller();
const update${this.names.upperModuleName}Controller = new Update${
      this.names.upperModuleName
    }Controller();
const delete${this.names.upperModuleName}Controller = new Delete${
      this.names.upperModuleName
    }Controller();

${this.fatherNames.lowerModuleName}Router
  .route('/${this.names.routeModuleName}')
  .post(create${this.names.upperModuleName}Controller.handle)
  .get(list${this.names.upperModuleName}Controller.handle);

${this.fatherNames.lowerModuleName}Router
  .route('/${this.names.routeModuleName}/:id')
  .get(show${this.names.upperModuleName}Controller.handle)
  .put(update${this.names.upperModuleName}Controller.handle)
  .delete(delete${this.names.upperModuleName}Controller.handle);

export { ${this.fatherNames.lowerModuleName}Router };
`;
  }
}
