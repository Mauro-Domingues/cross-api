import { Console } from '@tools/console';
import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { Provider } from '@tools/provider';

export class CreateProvider {
  private readonly messages: IMessagesDTO;
  private readonly provider: Provider;
  private readonly console: Console;

  public constructor(
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
    if (!this.providerName) {
      throw this.console.single({
        message: this.messages.providerNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }
    this.provider.list[this.providerName as keyof typeof this.provider.list][
      this.provider.key
    ].execute();
    return this.console.single({
      message: `- ${this.provider.list[
        this.providerName as keyof typeof this.provider.list
      ].description.trimEnd()} ${this.messages.created}`,
      color: 'yellow',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }
}
