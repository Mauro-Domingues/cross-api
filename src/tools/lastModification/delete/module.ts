import { IHelpDTO } from '@interfaces/IMessageDTO/IHelpDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Concat } from '@tools/concat';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class DeleteModule {
  private readonly helpMessages: IHelpDTO;
  private readonly console: Console;
  private readonly concat: Concat;

  public constructor(
    private readonly fileManager: FileManager,
    private readonly basePath: string,
  ) {
    this.helpMessages = Messages.getInstance().help;
    this.console = Console.getInstance();
    this.concat = Concat.getInstance();
  }

  private deleteMigrations(
    names: Pick<IModuleNameDTO, 'lowerModuleName'>,
  ): void {
    const files = this.fileManager.filterPathSync(
      ['src', 'shared', 'typeorm', 'migrations'],
      names.lowerModuleName,
    );

    return this.fileManager.checkAndRemoveMultiFile(files);
  }

  private useNames({
    command,
    names,
  }: {
    names: Omit<IModuleNameDTO, 'dbModuleName' | 'routeModuleName'>;
    command: string;
  }): void {
    this.fileManager.removeDir(['src', 'modules', names.pluralLowerModuleName]);
    this.fileManager.removeFile([
      'src',
      'routes',
      this.concat.execute(names.lowerModuleName, 'Router.ts'),
    ]);
    const moduleInjection = this.fileManager.readFileSync([
      this.basePath,
      'modules',
      'moduleInjection.log',
    ]);
    this.fileManager.truncateFileSync([
      'src',
      'shared',
      'container',
      'index.ts',
    ]);
    this.fileManager.createFileSync(
      ['src', 'shared', 'container', 'index.ts'],
      moduleInjection,
    );
    const routeInjection = this.fileManager.readFileSync([
      this.basePath,
      'modules',
      'routeInjection.log',
    ]);
    this.fileManager.truncateFileSync(['src', 'routes', 'index.ts']);
    this.fileManager.createFileSync(
      ['src', 'routes', 'index.ts'],
      routeInjection,
    );
    this.deleteMigrations(names);
    return this.console.execute({
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
  }

  private useFatherNames({
    command,
    fatherNames,
    names,
  }: {
    names: Omit<IModuleNameDTO, 'dbModuleName' | 'routeModuleName'>;
    fatherNames: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'pluralLowerModuleName'
    >;
    command: string;
  }): void {
    const basePath = this.fileManager.resolvePath([
      'src',
      'modules',
      fatherNames.pluralLowerModuleName,
    ]);
    this.fileManager.removeMultiDir([
      [
        basePath,
        'services',
        this.concat.execute('create', names.upperModuleName),
      ],
      [
        basePath,
        'services',
        this.concat.execute('delete', names.upperModuleName),
      ],
      [
        basePath,
        'services',
        this.concat.execute('list', names.upperModuleName),
      ],
      [
        basePath,
        'services',
        this.concat.execute('show', names.upperModuleName),
      ],
      [
        basePath,
        'services',
        this.concat.execute('update', names.upperModuleName),
      ],
      [basePath, 'validators', names.pluralLowerModuleName],
    ]);
    this.fileManager.checkAndRemoveMultiFile([
      [
        basePath,
        'dtos',
        this.concat.execute('I', names.upperModuleName, 'DTO.ts'),
      ],
      [basePath, 'entities', this.concat.execute(names.upperModuleName, '.ts')],
      [
        basePath,
        'repositories',
        this.concat.execute(names.pluralUpperModuleName, 'Repository.ts'),
      ],
      [
        basePath,
        'repositories',
        this.concat.execute('I', names.pluralUpperModuleName, 'Repository.ts'),
      ],
      [
        basePath,
        'repositories',
        'fakes',
        this.concat.execute(
          'Fake',
          names.pluralUpperModuleName,
          'Repository.ts',
        ),
      ],
    ]);
    const moduleInjection = this.fileManager.readFileSync([
      this.basePath,
      'modules',
      'moduleInjection.log',
    ]);
    this.fileManager.truncateFileSync([
      'src',
      'shared',
      'container',
      'index.ts',
    ]);
    this.fileManager.createFileSync(
      ['src', 'shared', 'container', 'index.ts'],
      moduleInjection,
    );
    const routeInjection = this.fileManager.readFileSync([
      this.basePath,
      'modules',
      'routeInjection.log',
    ]);
    this.fileManager.truncateFileSync([
      'src',
      'routes',
      this.concat.execute(fatherNames.lowerModuleName, 'Router.ts'),
    ]);
    this.fileManager.createFileSync(
      [
        'src',
        'routes',
        this.concat.execute(fatherNames.lowerModuleName, 'Router.ts'),
      ],
      routeInjection,
    );
    this.deleteMigrations(names);
    return this.console.execute({
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
  }

  public execute({
    command,
    fatherNames,
    names,
  }: {
    command: string;
    names: Omit<IModuleNameDTO, 'dbModuleName' | 'routeModuleName'> | undefined;
    fatherNames:
      | Pick<IModuleNameDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
      | undefined;
  }): void {
    if (names && fatherNames) {
      this.useFatherNames({ command, fatherNames, names });
    } else if (names) {
      this.useNames({ command, names });
    }
  }
}
