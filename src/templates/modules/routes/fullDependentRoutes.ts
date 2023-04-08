import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';

export class CreateFullDependentRoute {
  private messages: IMessagesDTO;
  private names:
    | Pick<IModuleNamesDTO, 'upperModuleName' | 'routeModuleName'>
    | undefined;
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
    | undefined;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = new Messages().execute();
    this.names = names;
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    if (!this.names || !this.fatherNames) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    return `import { Router } from 'express';

import { Create${this.names.upperModuleName}Controller } from '@modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller';
import { Show${this.names.upperModuleName}Controller } from '@modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller';
import { List${this.names.upperModuleName}Controller } from '@modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller';
import { Update${this.names.upperModuleName}Controller } from '@modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller';
import { Delete${this.names.upperModuleName}Controller } from '@modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller';

const ${this.fatherNames.lowerModuleName}Router = Router();
const create${this.names.upperModuleName}Controller = new Create${this.names.upperModuleName}Controller();
const list${this.names.upperModuleName}Controller = new List${this.names.upperModuleName}Controller();
const show${this.names.upperModuleName}Controller = new Show${this.names.upperModuleName}Controller();
const update${this.names.upperModuleName}Controller = new Update${this.names.upperModuleName}Controller();
const delete${this.names.upperModuleName}Controller = new Delete${this.names.upperModuleName}Controller();

${this.fatherNames.lowerModuleName}Router.post('/${this.names.routeModuleName}', create${this.names.upperModuleName}Controller.handle);
${this.fatherNames.lowerModuleName}Router.get('/${this.names.routeModuleName}', list${this.names.upperModuleName}Controller.handle);
${this.fatherNames.lowerModuleName}Router.get('/${this.names.routeModuleName}/:id', show${this.names.upperModuleName}Controller.handle);
${this.fatherNames.lowerModuleName}Router.put('/${this.names.routeModuleName}/:id', update${this.names.upperModuleName}Controller.handle);
${this.fatherNames.lowerModuleName}Router.delete('/${this.names.routeModuleName}/:id', delete${this.names.upperModuleName}Controller.handle);

export { ${this.fatherNames.lowerModuleName}Router };
`;
  }
}
