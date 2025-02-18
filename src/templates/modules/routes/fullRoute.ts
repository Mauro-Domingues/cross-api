import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class CreateFullRoute extends BaseTemplateModule {
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
    return `import { Router } ${'from'} 'express';
import { celebrate } ${'from'} 'celebrate';
import { Create${this.names.upperModuleName}Controller } ${'from'} '@modules/${
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
import { create${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/validators/${this.names.pluralLowerModuleName}/create${
      this.names.upperModuleName
    }';
import { list${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/validators/${this.names.pluralLowerModuleName}/list${
      this.names.upperModuleName
    }';
import { show${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/validators/${this.names.pluralLowerModuleName}/show${
      this.names.upperModuleName
    }';
import { update${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/validators/${this.names.pluralLowerModuleName}/update${
      this.names.upperModuleName
    }';
import { delete${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/validators/${this.names.pluralLowerModuleName}/delete${
      this.names.upperModuleName
    }';

const ${this.baseNames.lowerModuleName}Router = Router();
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
  .post(create${this.names.upperModuleName}, create${
      this.names.upperModuleName
    }Controller.handle)
  .get(list${this.names.upperModuleName} as ReturnType<typeof celebrate>, list${
      this.names.upperModuleName
    }Controller.handle);

${this.baseNames.lowerModuleName}Router
  .route('/${this.names.routeModuleName}/:id')
  .get(show${this.names.upperModuleName} as ReturnType<typeof celebrate>, show${
      this.names.upperModuleName
    }Controller.handle)
  .put(update${
    this.names.upperModuleName
  } as ReturnType<typeof celebrate>, update${
      this.names.upperModuleName
    }Controller.handle)
  .delete(delete${
    this.names.upperModuleName
  } as ReturnType<typeof celebrate>, delete${
      this.names.upperModuleName
    }Controller.handle);

export { ${this.baseNames.lowerModuleName}Router };
`;
  }
}
