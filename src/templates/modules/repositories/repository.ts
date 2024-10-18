import { BaseTemplateModule } from '../base';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateRepository extends BaseTemplateModule {
  public constructor(
    protected readonly names: Omit<
      IModuleNameDTO,
      'dbModuleName' | 'routeModuleName'
    >,
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super();
  }

  public execute(): string {
    return `import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { I${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { BaseRepository } ${'from'} '@shared/container/modules/repositories/BaseRepository';

export class ${this.names.pluralUpperModuleName}Repository
  extends BaseRepository<${this.names.upperModuleName}>
  implements I${this.names.pluralUpperModuleName}Repository
{
  public constructor() {
    super(${this.names.upperModuleName});
  }

  // non-generic methods here
}
`;
  }
}
