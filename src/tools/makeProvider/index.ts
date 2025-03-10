import { IHelpDTO } from '@interfaces/IMessageDTO/IHelpDTO';
import { IProviderDTO } from '@interfaces/IMessageDTO/IProviderDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Console } from '@tools/console';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';
import { PackageManager } from '@tools/packageManager';
import { Provider } from '@tools/provider';

export class CreateProvider {
  private readonly providerMessages: IProviderDTO;
  private readonly helpMessages: IHelpDTO;
  private readonly messages: Messages;
  private readonly provider: Provider;
  private readonly console: Console;

  public constructor(
    private readonly providerName: string | undefined,
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = Messages.getInstance();
    this.providerMessages = this.messages.providers;
    this.provider = new Provider(this.fatherNames);
    this.helpMessages = this.messages.help;
    this.console = Console.getInstance();
  }

  public execute(): void {
    const provider =
      this.provider.list[this.providerName as keyof typeof this.provider.list];

    if (!provider) {
      throw new CustomError({
        message: this.providerMessages.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    provider.instance().execute();

    this.console.execute({
      message: [
        '- ',
        provider.description.trimEnd(),
        ' ',
        this.helpMessages.description.created,
      ],
      color: 'yellow',
      bold: true,
    });

    return new PackageManager(
      provider.dependencies,
      provider.devDependencies,
    ).execute('install');
  }
}
