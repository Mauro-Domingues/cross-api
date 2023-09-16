import { Console } from '@tools/console';
import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { Provider } from '@tools/provider';

export class CreateProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly provider: Provider;

  constructor(
    private readonly providerName: string | undefined,
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.provider = new Provider(this.fatherNames);
  }

  public async execute(): Promise<void> {
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
