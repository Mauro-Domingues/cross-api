import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateIndexRoute {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly names: Pick<IModuleNamesDTO, 'lowerModuleName'> | undefined;

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

    return `import { ${this.names.lowerModuleName}Router } from './${this.names.lowerModuleName}Router';
routes.use('/', ${this.names.lowerModuleName}Router);
`;
  }
}
