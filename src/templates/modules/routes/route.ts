import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class CreateRoute extends BaseTemplateModule {
  public constructor(
    protected readonly names: Omit<
      IModuleNameDTO,
      'dbModuleName' | 'pluralUpperModuleName'
    >,
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { Create${
      this.names.upperModuleName
    }Controller } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/services/create${this.names.upperModuleName}/Create${
      this.names.upperModuleName
    }Controller';
import { Show${this.names.upperModuleName}Controller } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/services/show${this.names.upperModuleName}/Show${
      this.names.upperModuleName
    }Controller';
import { List${this.names.upperModuleName}Controller } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/services/list${this.names.upperModuleName}/List${
      this.names.upperModuleName
    }Controller';
import { Update${this.names.upperModuleName}Controller } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/services/update${this.names.upperModuleName}/Update${
      this.names.upperModuleName
    }Controller';
import { Delete${this.names.upperModuleName}Controller } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/services/delete${this.names.upperModuleName}/Delete${
      this.names.upperModuleName
    }Controller';

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

${this.baseNames.lowerModuleName}Router
  .route('/${this.names.routeModuleName}')
  .post(create${this.names.upperModuleName}Controller.handle)
  .get(list${this.names.upperModuleName}Controller.handle);

${this.baseNames.lowerModuleName}Router
  .route('/${this.names.routeModuleName}/:id')
  .get(show${this.names.upperModuleName}Controller.handle)
  .put(update${this.names.upperModuleName}Controller.handle)
  .delete(delete${this.names.upperModuleName}Controller.handle);
`;
  }
}
