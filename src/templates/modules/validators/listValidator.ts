import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class ListValidator extends BaseTemplateModule {
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
import { ${this.names.lowerModuleName}Schema } ${'from'} './${
      this.names.lowerModuleName
    }Schema';

export const list${this.names.upperModuleName} = celebrate({
  [Segments.PARAMS]: Joi.object({}),
  [Segments.QUERY]: Joi.object<${
    this.names.upperModuleName
  } & { page: number; limit: number }>({
    ...${this.names.lowerModuleName}Schema,
    page: Joi.number().integer().positive().optional(),
    limit: Joi.number().integer().positive().optional(),
  }),
  [Segments.BODY]: Joi.object({}),
});
`;
  }
}
