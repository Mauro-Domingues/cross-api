import { IMessagesDTO, Messages } from '@tools/messages.js';
import { GetNames, IModuleNamesDTO } from '@tools/names.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class DeleteRegister {
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly providers: { [key: string]: string };
  private readonly basePath: string;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.basePath = this.fileManager.resolvePath([
      'node_modules',
      'cross-api',
      'dist',
      'tools',
      'lastModification',
    ]);
    this.providers = {
      cache: 'CacheProvider',
      crypto: 'CryptoProvider',
      hash: 'HashProvider',
      lead: 'leadProvider',
      mail: 'MailProvider',
      mailTemplate: 'MailTemplateProvider',
      notification: 'NotificationProvider',
      upload: 'StorageProvider',
    };
  }

  private async constructBase(): Promise<void> {
    if (!this.fileManager.checkIfExists([this.basePath, 'comands'])) {
      await this.fileManager.createDir([this.basePath, 'comands']);
    }
    if (!this.fileManager.checkIfExists([this.basePath, 'modules'])) {
      await this.fileManager.createDir([this.basePath, 'modules']);
    }
    if (!this.fileManager.checkIfExists([this.basePath, 'providers'])) {
      await this.fileManager.createDir([this.basePath, 'providers']);
    }
    if (
      !this.fileManager.checkIfExists([this.basePath, 'comands', 'comands.log'])
    ) {
      await this.fileManager.createFile(
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
      await this.fileManager.createFile(
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
      await this.fileManager.createFile(
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
      await this.fileManager.createFile(
        [this.basePath, 'providers', 'providerInjection.log'],
        '',
      );
    }
  }

  private async makeProvider(
    comand: string,
    names: Pick<IModuleNamesDTO, 'lowerModuleName'> | undefined,
    fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ): Promise<void> {
    if (names && fatherNames) {
      const oldProviders = await this.fileManager.readFile([
        this.basePath,
        'providers',
        'providerInjection.log',
      ]);

      await this.fileManager.truncateFile([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ],
        oldProviders,
      );
      await this.fileManager.removeDir([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        this.providers[names.lowerModuleName],
      ]);
      if (
        this.fileManager.checkIfExists([
          'src',
          'config',
          `${names.lowerModuleName}.ts`,
        ])
      ) {
        await this.fileManager.removeFile([
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
      const oldProviders = await this.fileManager.readFile([
        this.basePath,
        'providers',
        'providerInjection.log',
      ]);

      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'providers',
        'index.ts',
      ]);
      await this.fileManager.createFile(
        ['src', 'shared', 'container', 'providers', 'index.ts'],
        oldProviders,
      );
      await this.fileManager.removeDir([
        'src',
        'shared',
        'container',
        'providers',
        this.providers[names.lowerModuleName],
      ]);
      if (
        this.fileManager.checkIfExists([
          'src',
          'config',
          `${names.lowerModuleName}.ts`,
        ])
      ) {
        await this.fileManager.removeFile([
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

  private async makeModule(
    comand: string,
    names:
      | Omit<IModuleNamesDTO, 'dbModuleName' | 'routeModuleName'>
      | undefined,
    fatherNames:
      | Pick<IModuleNamesDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
      | undefined,
  ): Promise<void> {
    if (names && fatherNames) {
      await this.fileManager.removeDir([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        `create${names.upperModuleName}`,
      ]);
      await this.fileManager.removeDir([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        `delete${names.upperModuleName}`,
      ]);
      await this.fileManager.removeDir([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        `list${names.upperModuleName}`,
      ]);
      await this.fileManager.removeDir([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        `show${names.upperModuleName}`,
      ]);
      await this.fileManager.removeDir([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'services',
        `update${names.upperModuleName}`,
      ]);
      await this.fileManager.removeFile([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'dtos',
        `I${names.upperModuleName}DTO.ts`,
      ]);
      await this.fileManager.removeFile([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'entities',
        `${names.upperModuleName}.ts`,
      ]);
      await this.fileManager.removeFile([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'repositories',
        `${names.pluralUpperModuleName}Repository.ts`,
      ]);
      await this.fileManager.removeFile([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'repositories',
        `I${names.pluralUpperModuleName}Repository.ts`,
      ]);
      await this.fileManager.removeFile([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'repositories',
        'fakes',
        `Fake${names.pluralUpperModuleName}Repository.ts`,
      ]);
      const moduleInjection = await this.fileManager.readFile([
        this.basePath,
        'modules',
        'moduleInjection.log',
      ]);
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'index.ts',
      ]);
      await this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        moduleInjection,
      );
      const routeInjection = await this.fileManager.readFile([
        this.basePath,
        'modules',
        'routeInjection.log',
      ]);
      await this.fileManager.truncateFile([
        'src',
        'routes',
        `${fatherNames.lowerModuleName}Router.ts`,
      ]);
      await this.fileManager.createFile(
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
      await this.fileManager.removeDir([
        'src',
        'modules',
        names.pluralLowerModuleName,
      ]);
      await this.fileManager.removeFile([
        'src',
        'routes',
        `${names.lowerModuleName}Router.ts`,
      ]);
      const moduleInjection = await this.fileManager.readFile([
        this.basePath,
        'modules',
        'moduleInjection.log',
      ]);
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'index.ts',
      ]);
      await this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        moduleInjection,
      );
      const routeInjection = await this.fileManager.readFile([
        this.basePath,
        'modules',
        'routeInjection.log',
      ]);
      await this.fileManager.truncateFile(['src', 'routes', 'index.ts']);
      await this.fileManager.createFile(
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

  private async makeAPi(comand: string) {
    await this.fileManager.removeDir(['src']);
    await this.fileManager.removeFile(['.editorconfig']);
    await this.fileManager.removeFile(['.env']);
    await this.fileManager.removeFile(['.env.template']);
    await this.fileManager.removeFile(['.eslintignore']);
    await this.fileManager.removeFile(['.eslintrc.json']);
    await this.fileManager.removeFile(['.gitignore']);
    await this.fileManager.removeFile(['babel.config.js']);
    await this.fileManager.removeFile(['docker-compose.yml']);
    await this.fileManager.removeFile(['jest.config.ts']);
    await this.fileManager.removeFile(['nodemon.json']);
    await this.fileManager.removeFile(['prettier.config.js']);
    await this.fileManager.removeFile(['tsconfig.json']);
    return this.console.one([
      `- ${this.messages.reversed}: ${comand}`,
      'yellow',
      true,
      true,
      false,
    ]);
  }

  public async execute(): Promise<void> {
    await this.constructBase();
    const register = await this.fileManager.readFile([
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
