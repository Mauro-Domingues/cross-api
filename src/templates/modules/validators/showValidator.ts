import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class ShowValidator extends BaseTemplateModule {
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
    return `import { celebrate, Segments, Joi } ${'from'} 'celebrate';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { ${this.names.lowerModuleName}Schema } ${'from'} './${
      this.names.lowerModuleName
    }Schema';

export const show${this.names.upperModuleName} = celebrate({
  [Segments.PARAMS]: Joi.object<${this.names.upperModuleName}>({ id: ${
      this.names.lowerModuleName
    }Schema.id.required() }),
  [Segments.QUERY]: Joi.object({}),
  [Segments.BODY]: Joi.object({}),
});
`;
  }
}
