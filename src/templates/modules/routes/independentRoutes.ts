import { IModuleNamesDTO } from '@tools/names';

export class CreateIndependentRoute {
  private names: Pick<
    IModuleNamesDTO,
    'lowerModuleName' | 'upperModuleName' | 'pluralLowerModuleName'
  >;

  constructor(names: IModuleNamesDTO) {
    this.names = names;
  }

  public execute(): string {
    return `import { Router } from 'express';

import Create${this.names.upperModuleName}Controller from '@modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller';
import Show${this.names.upperModuleName}Controller from '@modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller';
import List${this.names.upperModuleName}Controller from '@modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller';
import Update${this.names.upperModuleName}Controller from '@modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller';
import Delete${this.names.upperModuleName}Controller from '@modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller';

const ${this.names.lowerModuleName}Router = Router();
const create${this.names.upperModuleName}Controller = new Create${this.names.upperModuleName}Controller();
const list${this.names.upperModuleName}Controller = new List${this.names.upperModuleName}Controller();
const show${this.names.upperModuleName}Controller = new Show${this.names.upperModuleName}Controller();
const update${this.names.upperModuleName}Controller = new Update${this.names.upperModuleName}Controller();
const delete${this.names.upperModuleName}Controller = new Delete${this.names.upperModuleName}Controller();

${this.names.lowerModuleName}Router.post('/', create${this.names.upperModuleName}Controller.handle);
${this.names.lowerModuleName}Router.get('/', list${this.names.upperModuleName}Controller.handle);
${this.names.lowerModuleName}Router.get('/:id', show${this.names.upperModuleName}Controller.handle);
${this.names.lowerModuleName}Router.put('/:id', update${this.names.upperModuleName}Controller.handle);
${this.names.lowerModuleName}Router.delete('/:id', delete${this.names.upperModuleName}Controller.handle);

export default ${this.names.lowerModuleName}Router;
`;
  }
}
