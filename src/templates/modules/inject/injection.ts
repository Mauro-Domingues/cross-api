import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class CreateInjection extends BaseTemplateModule {
  public constructor(
    protected readonly names: Pick<
      IModuleNameDTO,
      'pluralLowerModuleName' | 'pluralUpperModuleName' | 'lowerModuleName'
    >,
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { I${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { ${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/repositories/${this.names.pluralUpperModuleName}Repository';

container.registerSingleton<I${this.names.pluralUpperModuleName}Repository>(
  '${this.names.pluralUpperModuleName}Repository',
  ${this.names.pluralUpperModuleName}Repository,
);
`;
  }
}
