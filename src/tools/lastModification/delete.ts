import { IMessagesDTO, Messages } from '@tools/messages';
import { GetNames, IModuleNamesDTO } from '@tools/names';
import { Console } from '@tools/console';
import { Provider } from '@tools/provider';
import { BaseRegister } from './base';

export class DeleteRegister extends BaseRegister {
  private readonly messages: IMessagesDTO;
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
    names: Pick<IModuleNamesDTO, 'lowerModuleName'> | undefined,
    fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ): void {
    if (names && fatherNames) {
      const oldProviders = this.fileManager.readFile([
        this.basePath,
        'providers',
        'providerInjection.log',
      ]);

      this.fileManager.truncateFile([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ]);
      this.fileManager.createFile(
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
        ].description.trim(),
      ]);
      if (
        this.fileManager.checkIfExists([
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
      this.console.single({
        message: `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`,
        color: 'yellow',
        bold: true,
        breakStart: true,
        breakEnd: false,
      });
    } else if (names) {
      const oldProviders = this.fileManager.readFile([
        this.basePath,
        'providers',
        'providerInjection.log',
      ]);

      this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'providers',
        'index.ts',
      ]);
      this.fileManager.createFile(
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
        ].description.trim(),
      ]);
      if (
        this.fileManager.checkIfExists([
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
      this.console.single({
        message: `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`,
        color: 'yellow',
        bold: true,
        breakStart: true,
        breakEnd: false,
      });
    }
  }

  private makeModule(
    comand: string,
    names:
      | Omit<IModuleNamesDTO, 'dbModuleName' | 'routeModuleName'>
      | undefined,
    fatherNames:
      | Pick<IModuleNamesDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
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
      this.fileManager.removeMultiFile([
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
      const moduleInjection = this.fileManager.readFile([
        this.basePath,
        'modules',
        'moduleInjection.log',
      ]);
      this.fileManager.truncateFile(['src', 'shared', 'container', 'index.ts']);
      this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        moduleInjection,
      );
      const routeInjection = this.fileManager.readFile([
        this.basePath,
        'modules',
        'routeInjection.log',
      ]);
      this.fileManager.truncateFile([
        'src',
        'routes',
        `${fatherNames.lowerModuleName}Router.ts`,
      ]);
      this.fileManager.createFile(
        ['src', 'routes', `${fatherNames.lowerModuleName}Router.ts`],
        routeInjection,
      );
      this.console.single({
        message: `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`,
        color: 'yellow',
        bold: true,
        breakStart: true,
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
      const moduleInjection = this.fileManager.readFile([
        this.basePath,
        'modules',
        'moduleInjection.log',
      ]);
      this.fileManager.truncateFile(['src', 'shared', 'container', 'index.ts']);
      this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        moduleInjection,
      );
      const routeInjection = this.fileManager.readFile([
        this.basePath,
        'modules',
        'routeInjection.log',
      ]);
      this.fileManager.truncateFile(['src', 'routes', 'index.ts']);
      this.fileManager.createFile(
        ['src', 'routes', 'index.ts'],
        routeInjection,
      );
      this.console.single({
        message: `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`,
        color: 'yellow',
        bold: true,
        breakStart: true,
        breakEnd: false,
      });
    }
  }

  private makeAPi(comand: string) {
    this.fileManager.removeMultiDir([['src'], ['dist'], ['coverage']]);
    this.fileManager.removeMultiFile([
      ['.editorconfig'],
      ['.env'],
      ['.env.template'],
      ['.eslintignore'],
      ['.eslintrc.json'],
      ['.gitignore'],
      ['babel.config.js'],
      ['docker-compose.yml'],
      ['doc.config.ts'],
      ['jest.config.ts'],
      ['nodemon.json'],
      ['prettier.config.js'],
      ['tsconfig.json'],
    ]);
    return this.console.single({
      message: `- ${this.messages.reversed}: ${comand}`,
      color: 'yellow',
      bold: true,
      breakStart: true,
      breakEnd: false,
    });
  }

  public execute(): void {
    const register = this.fileManager.readFile([
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
        return this.console.single({
          message: this.messages.noReversed,
          color: 'red',
          bold: true,
          breakStart: true,
          breakEnd: true,
        });
    }
  }
}
