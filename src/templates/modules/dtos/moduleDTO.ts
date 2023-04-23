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

    return `export interface I${this.names.upperModuleName}DTO {
  name: string;
  description: string;
}
`;
  }
}
