import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class DeleteValidator extends BaseTemplateModule {
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
    return `import type { ${this.names.upperModuleName} } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { baseValidator } fr\om '@shared/container/modules/validators/baseValidator';
import { ${this.names.lowerModuleName}Schema } fr\om './${this.names.lowerModuleName}Schema';

export const delete${this.names.upperModuleName} = baseValidator(ctx => {
  const ${this.names.lowerModuleName}ValidationSchema = ${this.names.lowerModuleName}Schema(ctx);

  return {
    params: ctx.object<${this.names.upperModuleName}>({ id: ${this.names.lowerModuleName}ValidationSchema.extract('id').required() }),
    query: ctx.object({}),
    body: ctx.object({}),
  };
});
`;
  }
}
