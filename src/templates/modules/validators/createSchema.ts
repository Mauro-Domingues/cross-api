import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class CreateSchema extends BaseTemplateModule {
  public constructor(
    protected readonly names: Pick<
      IModuleNameDTO,
      'pluralLowerModuleName' | 'lowerModuleName' | 'upperModuleName'
    >,
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }
  public execute(): string {
    return `import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { Joi } ${'from'} 'celebrate';

export const ${this.names.lowerModuleName}Schema: Record<keyof ${
      this.names.upperModuleName
    }, Joi.Schema> = {
  id: Joi.string().uuid({ separator: '-', version: 'uuidv4' }).length(36),
  name: Joi.string().max(255),
  description: Joi.string().max(255),
  createdAt: Joi.date().iso(),
  updatedAt: Joi.date().iso(),
  deletedAt: Joi.date().iso(),
};
`;
  }
}
