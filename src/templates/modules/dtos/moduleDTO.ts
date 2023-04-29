import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class CreateModuleDTO {
  private messages: IMessagesDTO;
  private console: Console;
  private names: Pick<IModuleNamesDTO, 'upperModuleName'> | undefined;

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

    return `import { ${this.names.upperModuleName} } from '../entities/${this.names.upperModuleName}';

export interface I${this.names.upperModuleName}DTO extends Partial<${this.names.upperModuleName}> {
  name: string;
  description: number;
}
`;
  }
}
