import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateDependentFakeRepository {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'pluralUpperModuleName' | 'upperModuleName'
    >,
    private readonly fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ) {}

  public execute(): string {
    return `import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { I${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
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
