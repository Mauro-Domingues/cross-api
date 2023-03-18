import messages from '@tools/messages';
import { removeSync } from 'fs-extra';
import { appendFileSync, readFileSync, truncateSync, unlinkSync } from 'fs';
import { GetNames, IModuleNamesDTO } from '@tools/names';

export class DeleteRegister {
  private messages: typeof messages;
  private providers: { [key: string]: string };

  constructor() {
    this.messages = messages;
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

      truncateSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
      );
      appendFileSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
        oldProviders,
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

      truncateSync('src/shared/container/providers/index.ts');
      appendFileSync('src/shared/container/providers/index.ts', oldProviders);
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
      unlinkSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`,
      );
      unlinkSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`,
      );
      unlinkSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`,
      );
      unlinkSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`,
      );
      unlinkSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`,
      );
      const moduleInjection = readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log',
        'ascii',
      );
      truncateSync('src/shared/container/index.ts');
      appendFileSync('src/shared/container/index.ts', moduleInjection);
      const routeInjection = readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        'ascii',
      );
      truncateSync(`src/routes/${fatherNames.lowerModuleName}Router.ts`);
      appendFileSync(
        `src/routes/${fatherNames.lowerModuleName}Router.ts`,
        routeInjection,
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
      unlinkSync(`src/routes/${names.lowerModuleName}Router.ts`);
      const moduleInjection = readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log',
        'ascii',
      );
      truncateSync('src/shared/container/index.ts');
      appendFileSync('src/shared/container/index.ts', moduleInjection);
      const routeInjection = readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        'ascii',
      );
      truncateSync('src/routes/index.ts');
      appendFileSync('src/routes/index.ts', routeInjection);
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
    unlinkSync('.editorconfig');
    unlinkSync('.env');
    unlinkSync('.env.template');
    unlinkSync('.eslintignore');
    unlinkSync('.eslintrc.json');
    unlinkSync('.gitignore');
    unlinkSync('babel.config.js');
    unlinkSync('docker-compose.yml');
    unlinkSync('jest.config.ts');
    unlinkSync('nodemon.json');
    unlinkSync('prettier.config.js');
    unlinkSync('tsconfig.json');
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
    const names = new GetNames(register.split(',')[1]).execute();
    const fatherNames = new GetNames(register.split(',')[2]).execute();

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
