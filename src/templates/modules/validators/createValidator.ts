import { BaseTemplateModule } from '../base';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateValidator extends BaseTemplateModule {
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
    return `import { celebrate, Segments, Joi } from 'celebrate';
import { I${this.names.upperModuleName}DTO } from '@modules/${this.baseNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { ${this.names.lowerModuleName}Schema } from './${this.names.lowerModuleName}Schema';

export const create${this.names.upperModuleName} = celebrate({
  [Segments.PARAMS]: Joi.object({}),
  [Segments.QUERY]: Joi.object({}),
  [Segments.BODY]: Joi.object<${this.names.upperModuleName}>({
    ...${this.names.lowerModuleName}Schema,
    name: ${this.names.lowerModuleName}Schema.name.required(),
  }),
});
`;
  }
}
