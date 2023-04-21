import { resolve } from 'path';
import {
  appendFileSync,
  existsSync,
  readFileSync,
  mkdirSync,
  truncateSync,
  unlinkSync,
  rmSync,
} from 'fs';
import { Messages } from '../messages.js';
import { GetNames } from '../names.js';
import { Console } from '../console.js';

export class DeleteRegister {
  messages;
  console;
  providers;
  basePath;
  constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.basePath = resolve(
      'node_modules',
      'cross-api',
      'dist',
      'tools',
      'lastModification',
    );
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
    if (!existsSync(resolve(this.basePath, 'comands'))) {
      mkdirSync(resolve(this.basePath, 'comands'));
    }
    if (!existsSync(resolve(this.basePath, 'modules'))) {
      mkdirSync(resolve(this.basePath, 'modules'));
    }
    if (!existsSync(resolve(this.basePath, 'providers'))) {
      mkdirSync(resolve(this.basePath, 'providers'));
    }
    if (!existsSync(resolve(this.basePath, 'comands', 'comands.log'))) {
      appendFileSync(resolve(this.basePath, 'comands', 'comands.log'), '');
    }
    if (!existsSync(resolve(this.basePath, 'modules', 'moduleInjection.log'))) {
      appendFileSync(
        resolve(this.basePath, 'modules', 'moduleInjection.log'),
        '',
      );
    }
    if (!existsSync(resolve(this.basePath, 'modules', 'routeInjection.log'))) {
      appendFileSync(
        resolve(this.basePath, 'modules', 'routeInjection.log'),
        '',
      );
    }
    if (
      !existsSync(resolve(this.basePath, 'providers', 'providerInjection.log'))
    ) {
      appendFileSync(
        resolve(this.basePath, 'providers', 'providerInjection.log'),
        '',
      );
    }
  }
  makeProvider(comand, names, fatherNames) {
    if (names && fatherNames) {
      const oldProviders = readFileSync(
        resolve(this.basePath, 'providers', 'providerInjection.log'),
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
      this.console.one([
        `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`,
        'yellow',
        true,
        true,
        false,
      ]);
    } else if (names) {
      const oldProviders = readFileSync(
        resolve(this.basePath, 'providers', 'providerInjection.log'),
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
      this.console.one([
        `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`,
        'yellow',
        true,
        true,
        false,
      ]);
    }
  }
  makeModule(comand, names, fatherNames) {
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
        resolve(this.basePath, 'modules', 'moduleInjection.log'),
        'ascii',
      );
      truncateSync(resolve('src', 'shared', 'container', 'index.ts'));
      appendFileSync(
        resolve('src', 'shared', 'container', 'index.ts'),
        moduleInjection,
      );
      const routeInjection = readFileSync(
        resolve(this.basePath, 'modules', 'routeInjection.log'),
        'ascii',
      );
      truncateSync(
        resolve('src', 'routes', `${fatherNames.lowerModuleName}Router.ts`),
      );
      appendFileSync(
        resolve('src', 'routes', `${fatherNames.lowerModuleName}Router.ts`),
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
      rmSync(resolve('src', 'modules', names.pluralLowerModuleName), {
        recursive: true,
        force: true,
      });
      unlinkSync(resolve('src', 'routes', `${names.lowerModuleName}Router.ts`));
      const moduleInjection = readFileSync(
        resolve(this.basePath, 'modules', 'moduleInjection.log'),
        'ascii',
      );
      truncateSync(resolve('src', 'shared', 'container', 'index.ts'));
      appendFileSync(
        resolve('src', 'shared', 'container', 'index.ts'),
        moduleInjection,
      );
      const routeInjection = readFileSync(
        resolve(this.basePath, 'modules', 'routeInjection.log'),
        'ascii',
      );
      truncateSync(resolve('src', 'routes', 'index.ts'));
      appendFileSync(resolve('src', 'routes', 'index.ts'), routeInjection);
      this.console.one([
        `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`,
        'yellow',
        true,
        true,
        false,
      ]);
    }
  }
  makeAPi(comand) {
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
    this.console.one([
      `- ${this.messages.reversed}: ${comand}`,
      'yellow',
      true,
      true,
      false,
    ]);
  }
  async execute() {
    const register = readFileSync(
      resolve(this.basePath, 'comands', 'comands.log'),
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
        this.console.one([
          `${this.messages.noReversed}`,
          'red',
          true,
          true,
          true,
        ]);
        break;
    }
  }
}
