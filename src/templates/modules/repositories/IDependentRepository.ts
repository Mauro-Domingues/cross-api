import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateIDependentRepository {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'pluralUpperModuleName'
    >,
    private readonly fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ) {}

  public execute(): string {
    return `import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
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
