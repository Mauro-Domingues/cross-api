import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
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
    return `import { ${this.names.upperModuleName} } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { baseValidator } fr\om '@shared/container/modules/validators/baseValidator';
import { ${this.names.lowerModuleName}Schema } fr\om './${this.names.lowerModuleName}Schema';

export const delete${this.names.upperModuleName} = baseValidator(ctx => ({
  params: ctx.object<${this.names.upperModuleName}>({ id: ${this.names.lowerModuleName}Schema.id.required() }),
  query: ctx.object({}),
  body: ctx.object({}),
}));
`;
  }
}
