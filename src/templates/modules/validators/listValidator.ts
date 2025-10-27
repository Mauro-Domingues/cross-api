import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class ListValidator extends BaseTemplateModule {
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
import { baseValidator } fr\om '@shared/container/modules/validators/baseValidator';
import { ${this.names.lowerModuleName}Schema } fr\om './${this.names.lowerModuleName}Schema';

export const list${this.names.upperModuleName} = baseValidator(ctx => {
  const ${this.names.lowerModuleName}Fields = ${this.names.lowerModuleName}Schema(ctx);

  return {
    params: ctx.object({}),
    query: ctx.object<${this.names.upperModuleName} & { page: number; limit: number }>({
      ...${this.names.lowerModuleName}Fields,
      page: ctx.number().integer().positive().optional(),
      limit: ctx.number().integer().positive().optional(),
    }),
    body: ctx.object({}),
  };
});
`;
  }
}
