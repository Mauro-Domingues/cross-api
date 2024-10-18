import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class CreateIRepository extends BaseTemplateModule {
  public constructor(
    protected readonly names: Omit<
      IModuleNameDTO,
      'dbModuleName' | 'routeModuleName'
    >,
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { IBaseRepository } ${'from'} '@shared/container/modules/repositories/IBaseRepository';

export interface I${
      this.names.pluralUpperModuleName
    }Repository extends IBaseRepository<${this.names.upperModuleName}> {
  // non-generic methods here
}
`;
  }
}
