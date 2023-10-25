import { Console } from '@tools/console';
import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { Provider } from '@tools/provider';

export class CreateProvider {
  private readonly messages: IMessagesDTO;
  private readonly provider: Provider;
  private readonly console: Console;

  constructor(
    private readonly providerName: string | undefined,
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.provider = new Provider(this.fatherNames);
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): void {
    try {
      return this.provider.list[this.providerName as string][
        this.provider.key
      ].execute();
    } catch {
      return this.console.one([
        this.messages.providerNotFound,
        'red',
        true,
        false,
        false,
      ]);
    }
  }
}
