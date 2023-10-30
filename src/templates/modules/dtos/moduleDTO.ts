import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateModuleDTO {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly names:
      | Pick<IModuleNamesDTO, 'upperModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names) {
      throw this.console.one({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    return `import { ${this.names.upperModuleName} } ${'from'} '../entities/${
      this.names.upperModuleName
    }';

export interface I${this.names.upperModuleName}DTO extends Partial<${
      this.names.upperModuleName
    }> {}
`;
  }
}
