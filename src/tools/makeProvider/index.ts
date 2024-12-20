import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Console } from '@tools/console';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';
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
    this.messages = Messages.getInstance().execute();
    this.provider = new Provider(this.fatherNames);
    this.console = Console.getInstance();
  }

  public execute(): void {
    const provider =
      this.provider.list[this.providerName as keyof typeof this.provider.list];

    if (!provider) {
      throw new CustomError({
        message: this.messages.providers.errors.notFound,
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
        this.messages.comands.description.created,
      ],
      color: 'yellow',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });

    return new PackageManager(
      provider.dependencies,
      provider.devDependencies,
      this.messages,
    ).execute('install');
  }
}
