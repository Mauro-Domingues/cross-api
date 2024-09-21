import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateFakeRepository {
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
import { I${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { FakeBaseRepository } ${'from'} '@shared/container/modules/repositories/fakes/FakeBaseRepository';

export class Fake${this.names.pluralUpperModuleName}Repository
  extends FakeBaseRepository<${this.names.upperModuleName}>
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
