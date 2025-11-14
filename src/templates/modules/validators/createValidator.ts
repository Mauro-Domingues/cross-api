import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class CreateValidator extends BaseTemplateModule {
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
    return `import { baseValidator } fr\om '@shared/container/modules/validators/baseValidator';
import { ${this.names.lowerModuleName}Schema } fr\om './${this.names.lowerModuleName}Schema';

export const create${this.names.upperModuleName} = baseValidator(ctx => {
  const ${this.names.lowerModuleName}ValidationSchema = ${this.names.lowerModuleName}Schema(ctx);

  return {
    params: ctx.object({}),
    query: ctx.object({}),
    body: ${this.names.lowerModuleName}ValidationSchema.keys({
      name: ${this.names.lowerModuleName}ValidationSchema.extract('name').required(),
    }),
  };
});
`;
  }
}
