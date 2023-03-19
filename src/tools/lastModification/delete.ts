import messages from '@tools/messages';
import { resolve } from 'path';
import {
  appendFileSync,
  existsSync,
  readFileSync,
  truncateSync,
  unlinkSync,
  rmSync,
} from 'fs';
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
      upload: 'StorageProvider',
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
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'providers',
          'providerInjection.log',
        ),
        'ascii',
      );

      truncateSync(
        resolve(
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ),
        oldProviders,
      );
      rmSync(
        resolve(
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          this.providers[names.lowerModuleName],
        ),
        { recursive: true, force: true },
      );
      if (existsSync(resolve('src', 'config', `${names.lowerModuleName}.ts`))) {
        unlinkSync(resolve('src', 'config', `${names.lowerModuleName}.ts`));
      }
      console.log('');
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;255;0m',
        `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`,
        '\x1b[0m',
      );
    } else if (names) {
      const oldProviders = readFileSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'providers',
          'providerInjection.log',
        ),
        'ascii',
      );

      truncateSync(
        resolve('src', 'shared', 'container', 'providers', 'index.ts'),
      );
      appendFileSync(
        resolve('src', 'shared', 'container', 'providers', 'index.ts'),
        oldProviders,
      );
      rmSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          this.providers[names.lowerModuleName],
        ),
        { recursive: true, force: true },
      );
      if (existsSync(resolve('src', 'config', `${names.lowerModuleName}.ts`))) {
        unlinkSync(resolve('src', 'config', `${names.lowerModuleName}.ts`));
      }
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
      rmSync(
        resolve(
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'services',
          `create${names.upperModuleName}`,
        ),
        { recursive: true, force: true },
      );
      rmSync(
        resolve(
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'services',
          `delete${names.upperModuleName}`,
        ),
        { recursive: true, force: true },
      );
      rmSync(
        resolve(
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'services',
          `list${names.upperModuleName}`,
        ),
        { recursive: true, force: true },
      );
      rmSync(
        resolve(
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'services',
          `show${names.upperModuleName}`,
        ),
        { recursive: true, force: true },
      );
      rmSync(
        resolve(
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'services',
          `update${names.upperModuleName}`,
        ),
        { recursive: true, force: true },
      );
      unlinkSync(
        resolve(
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'dtos',
          `I${names.upperModuleName}DTO.ts`,
        ),
      );
      unlinkSync(
        resolve(
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'entities',
          `${names.upperModuleName}.ts`,
        ),
      );
      unlinkSync(
        resolve(
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'repositories',
          `${names.pluralUpperModuleName}Repository.ts`,
        ),
      );
      unlinkSync(
        resolve(
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'repositories',
          `I${names.pluralUpperModuleName}Repository.ts`,
        ),
      );
      unlinkSync(
        resolve(
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'repositories',
          'fakes',
          `Fake${names.pluralUpperModuleName}Repository.ts`,
        ),
      );
      const moduleInjection = readFileSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'moduleInjection.log',
        ),
        'ascii',
      );
      truncateSync(resolve('src', 'shared', 'container', 'index.ts'));
      appendFileSync(
        resolve('src', 'shared', 'container', 'index.ts'),
        moduleInjection,
      );
      const routeInjection = readFileSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'routeInjection.log',
        ),
        'ascii',
      );
      truncateSync(
        resolve('src', 'routes', `${fatherNames.lowerModuleName}Router.ts`),
      );
      appendFileSync(
        resolve('src', 'routes', `${fatherNames.lowerModuleName}Router.ts`),
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
      rmSync(resolve('src', 'modules', names.pluralLowerModuleName), {
        recursive: true,
        force: true,
      });
      unlinkSync(resolve('src', 'routes', `${names.lowerModuleName}Router.ts`));
      const moduleInjection = readFileSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'moduleInjection.log',
        ),
        'ascii',
      );
      truncateSync(resolve('src', 'shared', 'container', 'index.ts'));
      appendFileSync(
        resolve('src', 'shared', 'container', 'index.ts'),
        moduleInjection,
      );
      const routeInjection = readFileSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'routeInjection.log',
        ),
        'ascii',
      );
      truncateSync(resolve('src', 'routes', 'index.ts'));
      appendFileSync(resolve('src', 'routes', 'index.ts'), routeInjection);
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
    rmSync(resolve('src'), { recursive: true, force: true });
    unlinkSync(resolve('.editorconfig'));
    unlinkSync(resolve('.env'));
    unlinkSync(resolve('.env.template'));
    unlinkSync(resolve('.eslintignore'));
    unlinkSync(resolve('.eslintrc.json'));
    unlinkSync(resolve('.gitignore'));
    unlinkSync(resolve('babel.config.js'));
    unlinkSync(resolve('docker-compose.yml'));
    unlinkSync(resolve('jest.config.ts'));
    unlinkSync(resolve('nodemon.json'));
    unlinkSync(resolve('prettier.config.js'));
    unlinkSync(resolve('tsconfig.json'));
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
      resolve(
        'node_modules',
        'cross-api',
        'dist',
        'tools',
        'lastModification',
        'comands',
        'comands.log',
      ),
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
