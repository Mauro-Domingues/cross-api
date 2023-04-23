import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class CreateIndependentRoute {
  private messages: IMessagesDTO;
  private console: Console;
  private names:
    | Omit<IModuleNamesDTO, 'dbModuleName' | 'pluralUpperModuleName'>
    | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
  }

  public execute(): string {
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

    return `import { Router } from 'express';

import { Create${this.names.upperModuleName}Controller } from '@modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller';
import { Show${this.names.upperModuleName}Controller } from '@modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller';
import { List${this.names.upperModuleName}Controller } from '@modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller';
import { Update${this.names.upperModuleName}Controller } from '@modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller';
import { Delete${this.names.upperModuleName}Controller } from '@modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller';

const ${this.names.lowerModuleName}Router = Router();
const create${this.names.upperModuleName}Controller = new Create${this.names.upperModuleName}Controller();
const list${this.names.upperModuleName}Controller = new List${this.names.upperModuleName}Controller();
const show${this.names.upperModuleName}Controller = new Show${this.names.upperModuleName}Controller();
const update${this.names.upperModuleName}Controller = new Update${this.names.upperModuleName}Controller();
const delete${this.names.upperModuleName}Controller = new Delete${this.names.upperModuleName}Controller();

${this.names.lowerModuleName}Router.post('/${this.names.routeModuleName}', create${this.names.upperModuleName}Controller.handle);
${this.names.lowerModuleName}Router.get('/${this.names.routeModuleName}', list${this.names.upperModuleName}Controller.handle);
${this.names.lowerModuleName}Router.get('/${this.names.routeModuleName}/:id', show${this.names.upperModuleName}Controller.handle);
${this.names.lowerModuleName}Router.put('/${this.names.routeModuleName}/:id', update${this.names.upperModuleName}Controller.handle);
${this.names.lowerModuleName}Router.delete('/${this.names.routeModuleName}/:id', delete${this.names.upperModuleName}Controller.handle);

export { ${this.names.lowerModuleName}Router };
`;
  }
}
