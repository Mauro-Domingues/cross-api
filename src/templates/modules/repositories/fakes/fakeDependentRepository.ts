import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class CreateDependentFakeRepository {
  private messages: IMessagesDTO;
  private console: Console;
  private names:
    | Pick<IModuleNamesDTO, 'pluralUpperModuleName' | 'upperModuleName'>
    | undefined;
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    if (!this.names || !this.fatherNames) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    return `import { ${this.names.upperModuleName} } from '@modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { I${this.names.pluralUpperModuleName}RepositoryDTO } from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { FakeBaseRepository } from '@shared/modules/repositories/fakes/FakeBaseRepository';

export class Fake${this.names.pluralUpperModuleName}Repository
  extends FakeBaseRepository<${this.names.upperModuleName}>
  implements I${this.names.pluralUpperModuleName}RepositoryDTO {
  // non-generic methods here
}
`;
  }
}
