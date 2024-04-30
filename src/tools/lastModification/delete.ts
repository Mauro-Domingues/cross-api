import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Console } from '@tools/console';
import { CustomError } from '@tools/customError';
import { BaseRegister } from '@tools/lastModification/base';
import { Messages } from '@tools/messages';
import { GetNames } from '@tools/names';
import { PackageManager } from '@tools/packageManager';
import { Provider } from '@tools/provider';

export class DeleteRegister extends BaseRegister {
  private readonly messages: IMessageDTO;
  private readonly provider: Provider;
  private readonly console: Console;

  public constructor() {
    super();
    this.messages = new Messages().execute();
    this.provider = new Provider(undefined);
    this.console = new Console();
  }

  private makeProvider(
    comand: string,
    names: Pick<IModuleNameDTO, 'lowerModuleName'> | undefined,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ): void {
    const packageManager = new PackageManager(
      this.provider.list[
        names?.lowerModuleName as keyof typeof this.provider.list
      ]?.dependencies,
      this.provider.list[
        names?.lowerModuleName as keyof typeof this.provider.list
      ]?.devDependencies,
    );

    if (names && fatherNames) {
      const oldProviders = this.fileManager.readFileSync([
        this.basePath,
        'providers',
        'providerInjection.log',
      ]);

      this.fileManager.truncateFileSync([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ]);
      this.fileManager.createFileSync(
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ],
        oldProviders,
      );
      this.fileManager.removeDir([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        this.provider.list[
          names.lowerModuleName as keyof typeof this.provider.list
        ].description.trimEnd(),
      ]);
      if (
        this.fileManager.checkIfExistsSync([
          'src',
          'config',
          `${names.lowerModuleName}.ts`,
        ])
      ) {
        this.fileManager.removeFile([
          'src',
          'config',
          `${names.lowerModuleName}.ts`,
        ]);
      }
      this.console.execute({
        message: `- ${this.messages.comands.description.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`,
        color: 'yellow',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
      packageManager.execute('uninstall');
    } else if (names) {
      const oldProviders = this.fileManager.readFileSync([
        this.basePath,
        'providers',
        'providerInjection.log',
      ]);

      this.fileManager.truncateFileSync([
        'src',
        'shared',
        'container',
        'providers',
        'index.ts',
      ]);
      this.fileManager.createFileSync(
        ['src', 'shared', 'container', 'providers', 'index.ts'],
        oldProviders,
      );
      this.fileManager.removeDir([
        'src',
        'shared',
        'container',
        'providers',
        this.provider.list[
          names.lowerModuleName as keyof typeof this.provider.list
        ].description.trimEnd(),
      ]);
      if (
        this.fileManager.checkIfExistsSync([
          'src',
          'config',
          `${names.lowerModuleName}.ts`,
        ])
      ) {
        this.fileManager.removeFile([
          'src',
          'config',
          `${names.lowerModuleName}.ts`,
        ]);
      }
      this.console.execute({
        message: `- ${this.messages.comands.description.reversed}: ${comand} ${names.lowerModuleName}`,
        color: 'yellow',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
      packageManager.execute('uninstall');
    }
  }

  private makeModule(
    comand: string,
    names: Omit<IModuleNameDTO, 'dbModuleName' | 'routeModuleName'> | undefined,
    fatherNames:
      | Pick<IModuleNameDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
      | undefined,
  ): void {
    if (names && fatherNames) {
      this.fileManager.removeMultiDir([
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'services',
          `create${names.upperModuleName}`,
        ],
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'services',
          `delete${names.upperModuleName}`,
        ],
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'services',
          `list${names.upperModuleName}`,
        ],
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'services',
          `show${names.upperModuleName}`,
        ],
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'services',
          `update${names.upperModuleName}`,
        ],
      ]);
      this.fileManager.checkAndRemoveMultiFile([
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'dtos',
          `I${names.upperModuleName}DTO.ts`,
        ],
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'entities',
          `${names.upperModuleName}.ts`,
        ],
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'repositories',
          `${names.pluralUpperModuleName}Repository.ts`,
        ],
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'repositories',
          `I${names.pluralUpperModuleName}Repository.ts`,
        ],
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'repositories',
          'fakes',
          `Fake${names.pluralUpperModuleName}Repository.ts`,
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
        `${fatherNames.lowerModuleName}Router.ts`,
      ]);
      this.fileManager.createFileSync(
        ['src', 'routes', `${fatherNames.lowerModuleName}Router.ts`],
        routeInjection,
      );
      this.console.execute({
        message: `- ${this.messages.comands.description.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`,
        color: 'yellow',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    } else if (names) {
      this.fileManager.removeDir([
        'src',
        'modules',
        names.pluralLowerModuleName,
      ]);
      this.fileManager.removeFile([
        'src',
        'routes',
        `${names.lowerModuleName}Router.ts`,
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
        message: `- ${this.messages.comands.description.reversed}: ${comand} ${names.lowerModuleName}`,
        color: 'yellow',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }
  }

  private makeAPi(comand: string) {
    this.fileManager.removeMultiDir([
      ['.cross'],
      ['.swc'],
      ['src'],
      ['dist'],
      ['coverage'],
      ['tmp'],
    ]);
    this.fileManager.checkAndRemoveMultiFile([
      ['.editorconfig'],
      ['.env'],
      ['.env.template'],
      ['.eslintignore'],
      ['.eslintrc.json'],
      ['.gitignore'],
      ['.swcrc'],
      ['docker-compose.yml'],
      ['doc.config.ts'],
      ['jest.config.ts'],
      ['prettier.config.cjs'],
      ['tsconfig.json'],
      ['tsconfig.tsbuildinfo'],
    ]);
    return this.console.execute({
      message: `- ${this.messages.comands.description.reversed}: ${comand}`,
      color: 'yellow',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }

  public execute(): void {
    const register = this.fileManager.readFileSync([
      this.basePath,
      'comands',
      'comands.log',
    ]);

    const [comand, name, fatherName] = register.split(',');
    const names = new GetNames(name).execute();
    const fatherNames = new GetNames(fatherName).execute();

    switch (comand) {
      case 'make:provider':
        return this.makeProvider(comand, names, fatherNames);
      case 'make:module':
        return this.makeModule(comand, names, fatherNames);
      case 'make:api':
        return this.makeAPi(comand);
      default:
        throw new CustomError({
          message: this.messages.comands.errors.notReversed,
          color: 'red',
          bold: true,
          breakStart: true,
          breakEnd: true,
        });
    }
  }
}
