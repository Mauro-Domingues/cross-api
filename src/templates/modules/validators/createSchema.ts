import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class CreateSchema extends BaseTemplateModule {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'pluralLowerModuleName' | 'lowerModuleName' | 'upperModuleName'
    >,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { ${this.names.upperModuleName} } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { baseSchema } fr\om '@shared/container/modules/validators/baseSchema';
import { Joi } fr\om 'celebrate';

export const ${this.names.lowerModuleName}Schema: Record<keyof ${this.names.upperModuleName}, Joi.Schema> = {
  ...baseSchema,
  name: Joi.string().max(255),
  description: Joi.string().max(255),
};
`;
  }
}
