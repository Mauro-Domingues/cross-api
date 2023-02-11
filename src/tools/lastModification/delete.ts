import messages from '@tools/messages';
import IModuleNamesDTO from 'index';
import fsExtra from 'fs-extra';
import fs from 'fs';

export default async function deleteRegister(
  names: IModuleNamesDTO | undefined,
  fatherNames: IModuleNamesDTO | undefined,
): Promise<void> {
  const register = fs.readFileSync(
    './node_modules/cross-api/dist/tools/lastModification/comands/comands.log',
    'ascii',
  );

  const comand = register.split(',')[0];

  if (comand && comand === 'make:provider') {
    if (names && fatherNames) {
      const oldProviders = fs.readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
        'ascii',
      );

      fs.truncate(
        `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
        error => {
          if (error) throw error;
        },
      );
      fs.appendFile(
        `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
        oldProviders,
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
      const oldProviders = fs.readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
        'ascii',
      );

      fs.truncate('src/shared/container/providers/index.ts', error => {
        if (error) throw error;
      });
      fs.appendFile(
        'src/shared/container/providers/index.ts',
        oldProviders,
        error => {
          if (error) throw error;
        },
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
      fsExtra.removeSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}`,
      );
      fsExtra.removeSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}`,
      );
      fsExtra.removeSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}`,
      );
      fsExtra.removeSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}`,
      );
      fsExtra.removeSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}`,
      );
      fs.unlink(
        `src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`,
        error => {
          if (error) throw error;
        },
      );
      fs.unlink(
        `src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repositoriy.ts`,
        error => {
          if (error) throw error;
        },
      );
      fs.unlink(
        `src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repositoriy.ts`,
        error => {
          if (error) throw error;
        },
      );
      fs.unlink(
        `src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.upperModuleName}Repository.ts`,
        error => {
          if (error) throw error;
        },
      );
      const moduleInjection = fs.readFileSync(
        'src/shared/container/index.ts',
        'ascii',
      );
      fs.truncate(
        './node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log',
        error => {
          if (error) throw error;
        },
      );
      fs.appendFile(
        './node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log',
        moduleInjection,
        error => {
          if (error) throw error;
        },
      );
      const routeInjection = fs.readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        'ascii',
      );
      fs.truncate(
        `src/routes/${fatherNames.lowerModuleName}Routes.ts`,
        error => {
          if (error) throw error;
        },
      );
      fs.appendFile(
        `src/routes/${fatherNames.lowerModuleName}Routes.ts`,
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
      fsExtra.removeSync(`src/modules/${names.pluralLowerModuleName}`);
      fs.unlink(`src/routes/${names.lowerModuleName}.ts`, error => {
        if (error) throw error;
      });
      const moduleInjection = fs.readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log',
        'ascii',
      );
      fs.truncate('src/shared/container/index.ts', error => {
        if (error) throw error;
      });
      fs.appendFile('src/shared/container/index.ts', moduleInjection, error => {
        if (error) throw error;
      });
      const routeInjection = fs.readFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        'ascii',
      );
      fs.truncate('src/routes/index.ts', error => {
        if (error) throw error;
      });
      fs.appendFile('src/routes/index.ts', routeInjection, error => {
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
    fsExtra.removeSync('src');
    fs.unlink('.editorconfig', error => {
      if (error) throw error;
    });
    fs.unlink('.env', error => {
      if (error) throw error;
    });
    fs.unlink('.env.template', error => {
      if (error) throw error;
    });
    fs.unlink('.eslintignore', error => {
      if (error) throw error;
    });
    fs.unlink('.eslintrc.json', error => {
      if (error) throw error;
    });
    fs.unlink('.gitignore', error => {
      if (error) throw error;
    });
    fs.unlink('babel.config.js', error => {
      if (error) throw error;
    });
    fs.unlink('docker-compose.yml', error => {
      if (error) throw error;
    });
    fs.unlink('jest.config.ts', error => {
      if (error) throw error;
    });
    fs.unlink('nodemon.json', error => {
      if (error) throw error;
    });
    fs.unlink('prettier.config.js', error => {
      if (error) throw error;
    });
    fs.unlink('tsconfig.json', error => {
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
      '\x1b[38;2;255;255;0m',
      `${messages.noReversed}`,
      '\x1b[0m',
    );
  }
}
