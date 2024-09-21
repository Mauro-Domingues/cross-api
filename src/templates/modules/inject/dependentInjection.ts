import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateDependentInjection {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'pluralUpperModuleName' | 'pluralLowerModuleName'
    >,
    private readonly fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ) {}

  public execute(): string {
    return `import { I${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { ${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/repositories/${this.names.pluralUpperModuleName}Repository';

container.registerSingleton<I${this.names.pluralUpperModuleName}Repository>(
  '${this.names.pluralUpperModuleName}Repository',
  ${this.names.pluralUpperModuleName}Repository,
);
`;
  }
}
