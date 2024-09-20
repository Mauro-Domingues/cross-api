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
    this.console.execute({
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
    this.fileManager.removeMultiDir([
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        this.concat.execute('create', names.upperModuleName),
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        this.concat.execute('delete', names.upperModuleName),
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        this.concat.execute('list', names.upperModuleName),
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        this.concat.execute('show', names.upperModuleName),
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        this.concat.execute('update', names.upperModuleName),
      ],
    ]);
    this.fileManager.checkAndRemoveMultiFile([
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'dtos',
        this.concat.execute('I', names.upperModuleName, 'DTO.ts'),
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'entities',
        this.concat.execute(names.upperModuleName, '.ts'),
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'repositories',
        this.concat.execute(names.pluralUpperModuleName, 'Repository.ts'),
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'repositories',
        this.concat.execute('I', names.pluralUpperModuleName, 'Repository.ts'),
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
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
    this.console.execute({
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
