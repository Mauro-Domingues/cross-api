import messages from '@tools/messages';
import { appendFile, removeSync, truncate, unlink } from 'fs-extra';
import { readFileSync } from 'fs';
import { IModuleNamesDTO } from 'index';
import { isSingular, plural, singular } from 'pluralize';

const providers: { [key: string]: string } = {
  cache: 'CacheProvider',
  crypto: 'CryptoProvider',
  hash: 'HashProvider',
  lead: 'leadProvider',
  mail: 'MailProvider',
  mailTemplate: 'MailTemplateProvider',
  notification: 'NotificationProvider',
  storage: 'StorageProvider',
};

class GetNames {
  private getSingularAndPlural(word: string): {
    singular: string;
    pluralName: string;
  } {
    if (isSingular(word)) {
      return {
        singular: word,
        pluralName: plural(word),
      };
    }
    return {
      singular: singular(word),
      pluralName: word,
    };
  }

  getModuleNames(
    name: string,
  ): Omit<IModuleNamesDTO, 'routeModuleName' | 'dbModuleName'> | undefined {
    if (!name) {
      return undefined;
    }

    const { singular, pluralName } = this.getSingularAndPlural(name);

    const lowerModuleName = singular.replace(
      singular.charAt(0),
      singular.charAt(0).toLowerCase(),
    );

    const upperModuleName = singular.replace(
      singular.charAt(0),
      singular.charAt(0).toUpperCase(),
    );

    const pluralLowerModuleName = pluralName.replace(
      pluralName.charAt(0),
      pluralName.charAt(0).toLowerCase(),
    );

    const pluralUpperModuleName = pluralName.replace(
      pluralName.charAt(0),
      pluralName.charAt(0).toUpperCase(),
    );

    return {
      lowerModuleName,
      upperModuleName,
      pluralLowerModuleName,
      pluralUpperModuleName,
    };
  }
}

export async function deleteRegister(): Promise<void> {
  const register = readFileSync(
    './node_modules/cross-api/dist/tools/lastModification/comands/comands.log',
    'ascii',
  );

  const comand = register.split(',')[0];
  const names = new GetNames().getModuleNames(register.split(',')[1]);
  const fatherNames = new GetNames().getModuleNames(register.split(',')[2]);

  if (comand && comand === 'make:provider') {
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
          providers[names.lowerModuleName]
        }`,
      );
      console.log('');
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;255;0m',
        `- ${messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`,
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
        `src/shared/container/providers/${providers[names.lowerModuleName]}`,
      );
      console.log('');
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;255;0m',
        `- ${messages.reversed}: ${comand} ${names.lowerModuleName}`,
        '\x1b[0m',
      );
    }
  } else if (comand && comand === 'make:module') {
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
        'src/shared/container/index.ts',
        'ascii',
      );
      truncate(
        './node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log',
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        './node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log',
        moduleInjection,
        error => {
          if (error) throw error;
        },
      );
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
        `- ${messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`,
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
        `- ${messages.reversed}: ${comand} ${names.lowerModuleName}`,
        '\x1b[0m',
      );
    }
  } else if (comand && comand === 'make:api') {
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
      `- ${messages.reversed}: ${comand}`,
      '\x1b[0m',
    );
  } else {
    console.log('');
    console.log(
      '\x1b[1m',
      '\x1b[38;2;255;0;0m',
      `${messages.noReversed}`,
      '\x1b[0m',
    );
    console.log('');
  }
}
