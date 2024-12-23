import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Concat } from '@tools/concat';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class DeleteModule {
  private readonly messages: IMessageDTO;
  private readonly console: Console;
  private readonly concat: Concat;

  public constructor(
    private readonly fileManager: FileManager,
    private readonly basePath: string,
  ) {
    this.messages = Messages.getInstance().execute();
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
    comand,
    names,
  }: {
    names: Omit<IModuleNameDTO, 'dbModuleName' | 'routeModuleName'>;
    comand: string;
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
        this.messages.comands.description.reversed,
        ': ',
        comand,
        ' ',
        names.lowerModuleName,
      ],
      color: 'yellow',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }

  private useFatherNames({
    comand,
    fatherNames,
    names,
  }: {
    names: Omit<IModuleNameDTO, 'dbModuleName' | 'routeModuleName'>;
    fatherNames: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'pluralLowerModuleName'
    >;
    comand: string;
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
        this.messages.comands.description.reversed,
        ': ',
        comand,
        ' ',
        names.lowerModuleName,
        ' ',
        fatherNames.lowerModuleName,
      ],
      color: 'yellow',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }

  public execute({
    comand,
    fatherNames,
    names,
  }: {
    comand: string;
    names: Omit<IModuleNameDTO, 'dbModuleName' | 'routeModuleName'> | undefined;
    fatherNames:
      | Pick<IModuleNameDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
      | undefined;
  }): void {
    if (names && fatherNames) {
      this.useFatherNames({ comand, fatherNames, names });
    } else if (names) {
      this.useNames({ comand, names });
    }
  }
}
