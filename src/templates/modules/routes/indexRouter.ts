import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class CreateIndexRoute extends BaseTemplateModule {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'pluralLowerModuleName'
    >,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { ${this.baseNames.lowerModuleName}Router } ${'from'} './${
      this.baseNames.lowerModuleName
    }Router';
routes.use(${this.baseNames.lowerModuleName}Router);
`;
  }
}
