import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Messages } from '@tools/messages';
import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Console } from '@tools/console';

export class CreateDependentFakeRepository {
  private readonly messages: IMessageDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Pick<IModuleNameDTO, 'pluralUpperModuleName' | 'upperModuleName'>
      | undefined,
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names || !this.fatherNames) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return `import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { I${
      this.names.pluralUpperModuleName
    }RepositoryDTO } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { FakeBaseRepository } ${'from'} '@shared/container/modules/repositories/fakes/FakeBaseRepository';

export class Fake${this.names.pluralUpperModuleName}Repository
  extends FakeBaseRepository<${this.names.upperModuleName}>
  implements I${this.names.pluralUpperModuleName}RepositoryDTO
{
  public constructor() {
    super(${this.names.upperModuleName});
  }

  // non-generic methods here
}
`;
  }
}
