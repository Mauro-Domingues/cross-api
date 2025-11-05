import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class UpdateValidator extends BaseTemplateModule {
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

export const update${this.names.upperModuleName} = baseValidator(ctx => {
  const ${this.names.lowerModuleName}Fields = ${this.names.lowerModuleName}Schema(ctx);

  return {
    params: ctx.object<${this.names.upperModuleName}>({ id: ${this.names.lowerModuleName}Fields.extract('id').required() }),
    query: ctx.object({}),
    body: ${this.names.lowerModuleName}Fields,
  };
});
`;
  }
}
