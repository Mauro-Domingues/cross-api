import { IMessagesDTO, Messages } from '@tools/messages';
import { GetNames, IModuleNamesDTO } from '@tools/names';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { Provider } from '@tools/provider';

export class DeleteRegister {
  private readonly fileManager: FileManager;
  private readonly messages: IMessagesDTO;
  private readonly provider: Provider;
  private readonly basePath: string;
  private readonly console: Console;

  constructor() {
    this.messages = new Messages().execute();
    this.provider = new Provider(undefined);
    this.fileManager = new FileManager();
    this.console = new Console();
    this.basePath = this.fileManager.resolvePath([
      'node_modules',
      'cross-api',
      'src',
      'tools',
      'lastModification',
    ]);
    this.constructBase();
  }

  private constructBase(): void {
    this.fileManager.checkAndCreateDir([this.basePath, 'comands']);
    this.fileManager.checkAndCreateDir([this.basePath, 'modules']);
    this.fileManager.checkAndCreateDir([this.basePath, 'providers']);
    if (
      !this.fileManager.checkIfExists([this.basePath, 'comands', 'comands.log'])
    ) {
      this.fileManager.createFile(
        [this.basePath, 'comands', 'comands.log'],
        '',
      );
    }
    if (
      !this.fileManager.checkIfExists([
        this.basePath,
        'modules',
        'moduleInjection.log',
      ])
    ) {
      this.fileManager.createFile(
        [this.basePath, 'modules', 'moduleInjection.log'],
        '',
      );
    }
    if (
      !this.fileManager.checkIfExists([
        this.basePath,
        'modules',
        'routeInjection.log',
      ])
    ) {
      this.fileManager.createFile(
        [this.basePath, 'modules', 'routeInjection.log'],
        '',
      );
    }
    if (
      !this.fileManager.checkIfExists([
        this.basePath,
        'providers',
        'providerInjection.log',
      ])
    ) {
      this.fileManager.createFile(
        [this.basePath, 'providers', 'providerInjection.log'],
        '',
      );
    }
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
        this.provider.list[names.lowerModuleName].description.trim(),
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
      this.console.one([
        `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`,
        'yellow',
        true,
        true,
        false,
      ]);
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
        this.provider.list[names.lowerModuleName].description.trim(),
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
      this.console.one([
        `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`,
        'yellow',
        true,
        true,
        false,
      ]);
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
      this.fileManager.removeDir([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        `create${names.upperModuleName}`,
      ]);
      this.fileManager.removeDir([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        `delete${names.upperModuleName}`,
      ]);
      this.fileManager.removeDir([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        `list${names.upperModuleName}`,
      ]);
      this.fileManager.removeDir([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        `show${names.upperModuleName}`,
      ]);
      this.fileManager.removeDir([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        `update${names.upperModuleName}`,
      ]);
      this.fileManager.removeFile([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'dtos',
        `I${names.upperModuleName}DTO.ts`,
      ]);
      this.fileManager.removeFile([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'entities',
        `${names.upperModuleName}.ts`,
      ]);
      this.fileManager.removeFile([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'repositories',
        `${names.pluralUpperModuleName}Repository.ts`,
      ]);
      this.fileManager.removeFile([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'repositories',
        `I${names.pluralUpperModuleName}Repository.ts`,
      ]);
      this.fileManager.removeFile([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'repositories',
        'fakes',
        `Fake${names.pluralUpperModuleName}Repository.ts`,
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
      this.console.one([
        `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`,
        'yellow',
        true,
        true,
        false,
      ]);
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
      this.console.one([
        `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`,
        'yellow',
        true,
        true,
        false,
      ]);
    }
  }

  private makeAPi(comand: string) {
    this.fileManager.removeDir(['src']);
    this.fileManager.removeDir(['dist']);
    this.fileManager.removeDir(['coverage']);
    this.fileManager.removeFile(['.editorconfig']);
    this.fileManager.removeFile(['.env']);
    this.fileManager.removeFile(['.env.template']);
    this.fileManager.removeFile(['.eslintignore']);
    this.fileManager.removeFile(['.eslintrc.json']);
    this.fileManager.removeFile(['.gitignore']);
    this.fileManager.removeFile(['babel.config.js']);
    this.fileManager.removeFile(['docker-compose.yml']);
    this.fileManager.removeFile(['doc.config.ts']);
    this.fileManager.removeFile(['jest.config.ts']);
    this.fileManager.removeFile(['nodemon.json']);
    this.fileManager.removeFile(['prettier.config.js']);
    this.fileManager.removeFile(['tsconfig.json']);
    return this.console.one([
      `- ${this.messages.reversed}: ${comand}`,
      'yellow',
      true,
      true,
      false,
    ]);
  }

  public execute(): void {
    const register = this.fileManager.readFile([
      this.basePath,
      'comands',
      'comands.log',
    ]);

    const comand = register.split(',')[0];
    const names = new GetNames(register.split(',')[1]).execute();
    const fatherNames = new GetNames(register.split(',')[2]).execute();

    switch (comand) {
      case 'make:provider':
        return this.makeProvider(comand, names, fatherNames);
      case 'make:module':
        return this.makeModule(comand, names, fatherNames);
      case 'make:api':
        return this.makeAPi(comand);
      default:
        return this.console.one([
          this.messages.noReversed,
          'red',
          true,
          true,
          true,
        ]);
    }
  }
}
