import { Console } from '@tools/console';
import { Messages } from '@tools/messages';
import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { PackageManager } from '@tools/packageManager';
import { Provider } from '@tools/provider';

export class CreateProvider {
  private readonly messages: IMessageDTO;
  private readonly provider: Provider;
  private readonly console: Console;

  public constructor(
    private readonly providerName: string | undefined,
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
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
        breakStart: true,
        breakEnd: true,
      });
    }
    this.provider.list[this.providerName as keyof typeof this.provider.list][
      this.provider.key
    ].execute();
    this.console.single({
      message: `- ${this.provider.list[
        this.providerName as keyof typeof this.provider.list
      ].description.trimEnd()} ${this.messages.created}`,
      color: 'yellow',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
    return new PackageManager(
      this.provider.list[
        this.providerName as keyof typeof this.provider.list
      ].dependencies,
      this.provider.list[
        this.providerName as keyof typeof this.provider.list
      ].devDependencies,
    ).execute('install');
  }
}
