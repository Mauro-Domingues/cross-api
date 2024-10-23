import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class UpdateValidator extends BaseTemplateModule {
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
    return `import { celebrate, Segments, Joi } ${'from'} 'celebrate';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { I${this.names.upperModuleName}DTO } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/dtos/I${this.names.upperModuleName}DTO';
import { ${this.names.lowerModuleName}Schema } ${'from'} './${
      this.names.lowerModuleName
    }Schema';

export const update${this.names.upperModuleName} = celebrate({
  [Segments.PARAMS]: Joi.object<${this.names.upperModuleName}>({ id: ${
      this.names.lowerModuleName
    }Schema.id.required() }),
  [Segments.QUERY]: Joi.object({}),
  [Segments.BODY]: Joi.object<I${this.names.upperModuleName}DTO>(${
      this.names.lowerModuleName
    }Schema),
});
`;
  }
}
