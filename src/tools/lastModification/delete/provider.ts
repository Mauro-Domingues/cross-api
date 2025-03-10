import { IHelpDTO } from '@interfaces/IMessageDTO/IHelpDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Concat } from '@tools/concat';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';
import { PackageManager } from '@tools/packageManager';
import { Provider } from '@tools/provider';

export class DeleteProvider {
  private readonly helpMessages: IHelpDTO;
  private readonly messages: Messages;
  private readonly provider: Provider;
  private readonly console: Console;
  private readonly concat: Concat;

  public constructor(
    private readonly fileManager: FileManager,
    private readonly basePath: string,
  ) {
    this.messages = Messages.getInstance();
    this.helpMessages = this.messages.help;
    this.console = Console.getInstance();
    this.concat = Concat.getInstance();
    this.provider = new Provider();
  }

  private useNames({
    command,
    names,
    packageManager,
  }: {
    names: Pick<IModuleNameDTO, 'lowerModuleName'>;
    packageManager: PackageManager;
    command: string;
  }): void {
    const oldProviders = this.fileManager.readFileSync([
      this.basePath,
      'providers',
      'providerInjection.log',
    ]);
    const basePath = this.fileManager.resolvePath([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    this.fileManager.truncateFileSync([basePath, 'index.ts']);
    this.fileManager.createFileSync([basePath, 'index.ts'], oldProviders);
    this.fileManager.removeDir([
      basePath,
      this.provider.list[
        names.lowerModuleName as keyof typeof this.provider.list
      ].description.trimEnd(),
    ]);
    if (
      this.fileManager.checkIfExistsSync([
        'src',
        'config',
        this.concat.execute(names.lowerModuleName, '.ts'),
      ])
    ) {
      this.fileManager.removeFile([
        'src',
        'config',
        this.concat.execute(names.lowerModuleName, '.ts'),
      ]);
    }
    this.console.execute({
      message: [
        '- ',
        this.helpMessages.description.reversed,
        ': ',
        command,
        ' ',
        names.lowerModuleName,
      ],
      color: 'yellow',
      bold: true,
    });
    return packageManager.execute('uninstall');
  }

  private useFatherNames({
    command,
    fatherNames,
    names,
    packageManager,
  }: {
    names: Pick<IModuleNameDTO, 'lowerModuleName'>;
    fatherNames: Pick<
      IModuleNameDTO,
      'pluralLowerModuleName' | 'lowerModuleName'
    >;
    packageManager: PackageManager;
    command: string;
  }): void {
    const oldProviders = this.fileManager.readFileSync([
      this.basePath,
      'providers',
      'providerInjection.log',
    ]);
    const basePath = this.fileManager.resolvePath([
      'src',
      'modules',
      fatherNames.pluralLowerModuleName,
      'providers',
    ]);
    this.fileManager.truncateFileSync([basePath, 'index.ts']);
    this.fileManager.createFileSync([basePath, 'index.ts'], oldProviders);
    this.fileManager.removeDir([
      basePath,
      this.provider.list[
        names.lowerModuleName as keyof typeof this.provider.list
      ].description.trimEnd(),
    ]);
    if (
      this.fileManager.checkIfExistsSync([
        'src',
        'config',
        this.concat.execute(names.lowerModuleName, '.ts'),
      ])
    ) {
      this.fileManager.removeFile([
        'src',
        'config',
        this.concat.execute(names.lowerModuleName, '.ts'),
      ]);
    }
    this.console.execute({
      message: [
        '- ',
        this.helpMessages.description.reversed,
        ': ',
        command,
        ' ',
        names.lowerModuleName,
        ' ',
        fatherNames.lowerModuleName,
      ],
      color: 'yellow',
      bold: true,
    });
    return packageManager.execute('uninstall');
  }

  public execute({
    command,
    fatherNames,
    names,
  }: {
    command: string;
    names: Pick<IModuleNameDTO, 'lowerModuleName'> | undefined;
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined;
  }): void {
    const packageManager = new PackageManager(
      this.provider.list[
        names?.lowerModuleName as keyof typeof this.provider.list
      ]?.dependencies,
      this.provider.list[
        names?.lowerModuleName as keyof typeof this.provider.list
      ]?.devDependencies,
    );

    if (names && fatherNames) {
      this.useFatherNames({ command, fatherNames, names, packageManager });
    } else if (names) {
      this.useNames({ command, names, packageManager });
    }
  }
}
