import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class CreateIRepository {
  private messages: IMessagesDTO;
  private console: Console;
  private names:
    | Pick<
        IModuleNamesDTO,
        'pluralLowerModuleName' | 'pluralUpperModuleName' | 'upperModuleName'
      >
    | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
  }

  public execute(): string {
    if (!this.names) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    return `import { ${this.names.upperModuleName} } from '@modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { IBaseRepositoryDTO } from '@shared/container/modules/repositories/IBaseRepository';

export interface I${this.names.pluralUpperModuleName}RepositoryDTO extends IBaseRepositoryDTO<${this.names.upperModuleName}> {
  // non-generic methods here
}
`;
  }
}
