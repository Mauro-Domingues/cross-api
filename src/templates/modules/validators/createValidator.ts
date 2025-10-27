import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
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
    return `import { I${this.names.upperModuleName}DTO } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { baseValidator } fr\om '@shared/container/modules/validators/baseValidator';
import { ${this.names.lowerModuleName}Schema } fr\om './${this.names.lowerModuleName}Schema';

export const create${this.names.upperModuleName} = baseValidator(ctx => ({
  params: ctx.object({}),
  query: ctx.object({}),
  body: ctx.object<I${this.names.upperModuleName}DTO>({
    ...${this.names.lowerModuleName}Schema,
    name: ${this.names.lowerModuleName}Schema.name.required(),
  }),
}));
`;
  }
}
