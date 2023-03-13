import messages from '@tools/messages';
import { appendFile, removeSync, truncate, unlink } from 'fs-extra';
import { readFileSync } from 'fs';
import { GetNames, IModuleNamesDTO } from '@tools/names';

export class DeleteRegister {
  private messages: typeof messages;
  private providers: { [key: string]: string };
  private getNames: GetNames;

  constructor() {
    this.messages = messages;
    this.getNames = new GetNames();
    this.providers = {
      cache: 'CacheProvider',
      crypto: 'CryptoProvider',
      hash: 'HashProvider',
      lead: 'leadProvider',
      mail: 'MailProvider',
      mailTemplate: 'MailTemplateProvider',
      notification: 'NotificationProvider',
      storage: 'StorageProvider',
    };
  }

  private makeProvider(
    comand: string,
    names: Pick<IModuleNamesDTO, 'lowerModuleName'> | undefined,
    fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    if (names && fatherNames) {
      const oldProviders = readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
        'ascii',
      );

      truncate(
        `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
        oldProviders,
        error => {
          if (error) throw error;
        },
      );
      removeSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/providers/${
          this.providers[names.lowerModuleName]
        }`,
      );
      console.log('');
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;255;0m',
        `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`,
        '\x1b[0m',
      );
    } else if (names) {
      const oldProviders = readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
        'ascii',
      );

      truncate('src/shared/container/providers/index.ts', error => {
        if (error) throw error;
      });
      appendFile(
        'src/shared/container/providers/index.ts',
        oldProviders,
        error => {
          if (error) throw error;
        },
      );
      removeSync(
        `src/shared/container/providers/${
          this.providers[names.lowerModuleName]
        }`,
      );
      console.log('');
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;255;0m',
        `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`,
        '\x1b[0m',
      );
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
  ) {
    if (names && fatherNames) {
      removeSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}`,
      );
      removeSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}`,
      );
      removeSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}`,
      );
      removeSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}`,
      );
      removeSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}`,
      );
      unlink(
        `src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`,
        error => {
          if (error) throw error;
        },
      );
      unlink(
        `src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`,
        error => {
          if (error) throw error;
        },
      );
      unlink(
        `src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`,
        error => {
          if (error) throw error;
        },
      );
      unlink(
        `src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`,
        error => {
          if (error) throw error;
        },
      );
      unlink(
        `src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`,
        error => {
          if (error) throw error;
        },
      );
      const moduleInjection = readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log',
        'ascii',
      );
      truncate('src/shared/container/index.ts', error => {
        if (error) throw error;
      });
      appendFile('src/shared/container/index.ts', moduleInjection, error => {
        if (error) throw error;
      });
      const routeInjection = readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        'ascii',
      );
      truncate(`src/routes/${fatherNames.lowerModuleName}Router.ts`, error => {
        if (error) throw error;
      });
      appendFile(
        `src/routes/${fatherNames.lowerModuleName}Router.ts`,
        routeInjection,
        error => {
          if (error) throw error;
        },
      );
      console.log('');
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;255;0m',
        `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`,
        '\x1b[0m',
      );
    } else if (names) {
      removeSync(`src/modules/${names.pluralLowerModuleName}`);
      unlink(`src/routes/${names.lowerModuleName}Router.ts`, error => {
        if (error) throw error;
      });
      const moduleInjection = readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log',
        'ascii',
      );
      truncate('src/shared/container/index.ts', error => {
        if (error) throw error;
      });
      appendFile('src/shared/container/index.ts', moduleInjection, error => {
        if (error) throw error;
      });
      const routeInjection = readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        'ascii',
      );
      truncate('src/routes/index.ts', error => {
        if (error) throw error;
      });
      appendFile('src/routes/index.ts', routeInjection, error => {
        if (error) throw error;
      });
      console.log('');
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;255;0m',
        `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`,
        '\x1b[0m',
      );
    }
  }

  private makeAPi(comand: string) {
    removeSync('src');
    unlink('.editorconfig', error => {
      if (error) throw error;
    });
    unlink('.env', error => {
      if (error) throw error;
    });
    unlink('.env.template', error => {
      if (error) throw error;
    });
    unlink('.eslintignore', error => {
      if (error) throw error;
    });
    unlink('.eslintrc.json', error => {
      if (error) throw error;
    });
    unlink('.gitignore', error => {
      if (error) throw error;
    });
    unlink('babel.config.js', error => {
      if (error) throw error;
    });
    unlink('docker-compose.yml', error => {
      if (error) throw error;
    });
    unlink('jest.config.ts', error => {
      if (error) throw error;
    });
    unlink('nodemon.json', error => {
      if (error) throw error;
    });
    unlink('prettier.config.js', error => {
      if (error) throw error;
    });
    unlink('tsconfig.json', error => {
      if (error) throw error;
    });
    console.log('');
    console.log(
      '\x1b[1m',
      '\x1b[38;2;255;255;0m',
      `- ${this.messages.reversed}: ${comand}`,
      '\x1b[0m',
    );
  }

  public async execute(): Promise<void> {
    const register = readFileSync(
      './node_modules/cross-api/dist/tools/lastModification/comands/comands.log',
      'ascii',
    );

    const comand = register.split(',')[0];
    const names = this.getNames.getModuleNames(register.split(',')[1]);
    const fatherNames = this.getNames.getModuleNames(register.split(',')[2]);

    switch (comand) {
      case 'make:provider':
        this.makeProvider(comand, names, fatherNames);
        break;
      case 'make:module':
        this.makeModule(comand, names, fatherNames);
        break;
      case 'make:api':
        this.makeAPi(comand);
        break;
      default:
        console.log('');
        console.log(
          '\x1b[1m',
          '\x1b[38;2;255;0;0m',
          `${this.messages.noReversed}`,
          '\x1b[0m',
        );
        console.log('');
        break;
    }
  }
}
