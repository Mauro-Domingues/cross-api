import { IModuleNamesDTO } from '@tools/names';

export class CreateDependentRoute {
  private names: Pick<IModuleNamesDTO, 'upperModuleName' | 'routeModuleName'>;
  private fatherNames: Pick<
    IModuleNamesDTO,
    'pluralLowerModuleName' | 'lowerModuleName'
  >;

  constructor(names: IModuleNamesDTO, fatherNames: IModuleNamesDTO) {
    this.names = names;
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    return `import Create${this.names.upperModuleName}Controller from '@modules/${this.fatherNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller';
import Show${this.names.upperModuleName}Controller from '@modules/${this.fatherNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller';
import List${this.names.upperModuleName}Controller from '@modules/${this.fatherNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller';
import Update${this.names.upperModuleName}Controller from '@modules/${this.fatherNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller';
import Delete${this.names.upperModuleName}Controller from '@modules/${this.fatherNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller';

const create${this.names.upperModuleName}Controller = new Create${this.names.upperModuleName}Controller();
const list${this.names.upperModuleName}Controller = new List${this.names.upperModuleName}Controller();
const show${this.names.upperModuleName}Controller = new Show${this.names.upperModuleName}Controller();
const update${this.names.upperModuleName}Controller = new Update${this.names.upperModuleName}Controller();
const delete${this.names.upperModuleName}Controller = new Delete${this.names.upperModuleName}Controller();

${this.fatherNames.lowerModuleName}Router.post('/track/${this.names.routeModuleName}', create${this.names.upperModuleName}Controller.handle);
${this.fatherNames.lowerModuleName}Router.get('/track/${this.names.routeModuleName}', list${this.names.upperModuleName}Controller.handle);
${this.fatherNames.lowerModuleName}Router.get('/track/${this.names.routeModuleName}/:id', show${this.names.upperModuleName}Controller.handle);
${this.fatherNames.lowerModuleName}Router.put('/track/${this.names.routeModuleName}/:id', update${this.names.upperModuleName}Controller.handle);
${this.fatherNames.lowerModuleName}Router.delete('/track/${this.names.routeModuleName}/:id', delete${this.names.upperModuleName}Controller.handle);
`;
  }
}
