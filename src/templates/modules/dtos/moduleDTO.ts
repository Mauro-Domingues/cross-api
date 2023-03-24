import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';

export class CreateModuleDTO {
  private messages: IMessagesDTO;
  private names: Pick<IModuleNamesDTO, 'upperModuleName'> | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.names = names;
  }

  public execute(): string {
    if (!this.names) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    return `export default interface I${this.names.upperModuleName}DTO {
  name: string;
  description: string;
}
`;
  }
}
