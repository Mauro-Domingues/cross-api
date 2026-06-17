import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class CreateFullRoute extends BaseTemplateModule {
  public constructor(
    private readonly names: Omit<
      IModuleNameDTO,
      'dbModuleName' | 'pluralUpperModuleName'
    >,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { Router } fr\u006Fm 'express';
import { container } fr\u006Fm 'tsyringe';
import { Create${this.names.upperModuleName}Controller } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller';
import { Delete${this.names.upperModuleName}Controller } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller';
import { List${this.names.upperModuleName}Controller } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller';
import { Show${this.names.upperModuleName}Controller } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller';
import { Update${this.names.upperModuleName}Controller } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller';
import { create${this.names.upperModuleName} } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/validators/${this.names.pluralLowerModuleName}/create${this.names.upperModuleName}';
import { delete${this.names.upperModuleName} } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/validators/${this.names.pluralLowerModuleName}/delete${this.names.upperModuleName}';
import { list${this.names.upperModuleName} } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/validators/${this.names.pluralLowerModuleName}/list${this.names.upperModuleName}';
import { show${this.names.upperModuleName} } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/validators/${this.names.pluralLowerModuleName}/show${this.names.upperModuleName}';
import { update${this.names.upperModuleName} } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/validators/${this.names.pluralLowerModuleName}/update${this.names.upperModuleName}';

const ${this.baseNames.lowerModuleName}Router = Router();
const create${this.names.upperModuleName}Controller = container.resolve(Create${this.names.upperModuleName}Controller);
const list${this.names.upperModuleName}Controller = container.resolve(List${this.names.upperModuleName}Controller);
const show${this.names.upperModuleName}Controller = container.resolve(Show${this.names.upperModuleName}Controller);
const update${this.names.upperModuleName}Controller = container.resolve(Update${this.names.upperModuleName}Controller);
const delete${this.names.upperModuleName}Controller = container.resolve(Delete${this.names.upperModuleName}Controller);

${this.baseNames.lowerModuleName}Router
  .route('/${this.names.routeModuleName}')
  .post(create${this.names.upperModuleName}, create${this.names.upperModuleName}Controller.handle.bind(create${this.names.upperModuleName}Controller))
  .get(list${this.names.upperModuleName}, list${this.names.upperModuleName}Controller.handle.bind(list${this.names.upperModuleName}Controller));

${this.baseNames.lowerModuleName}Router
  .route('/${this.names.routeModuleName}/:id')
  .get(show${this.names.upperModuleName}, show${this.names.upperModuleName}Controller.handle.bind(show${this.names.upperModuleName}Controller))
  .put(update${this.names.upperModuleName}, update${this.names.upperModuleName}Controller.handle.bind(update${this.names.upperModuleName}Controller))
  .delete(delete${this.names.upperModuleName}, delete${this.names.upperModuleName}Controller.handle.bind(delete${this.names.upperModuleName}Controller));

export { ${this.baseNames.lowerModuleName}Router };
`;
  }
}
