import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateInjection {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'pluralLowerModuleName' | 'pluralUpperModuleName'
    >,
  ) {}

  public execute(): string {
    return `import { I${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { ${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/${this.names.pluralUpperModuleName}Repository';

container.registerSingleton<I${this.names.pluralUpperModuleName}Repository>(
  '${this.names.pluralUpperModuleName}Repository',
  ${this.names.pluralUpperModuleName}Repository,
);
`;
  }
}
