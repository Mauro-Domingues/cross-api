import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateIRepository {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'pluralLowerModuleName' | 'pluralUpperModuleName' | 'upperModuleName'
    >,
  ) {}

  public execute(): string {
    return `import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
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
