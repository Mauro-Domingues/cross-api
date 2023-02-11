import IModuleNamesDTO from 'index';
import fs from 'fs';

export default async function createRegister(
  comand: string[] | undefined,
  providerName: string | undefined,
  names: IModuleNamesDTO | undefined,
  fatherNames: IModuleNamesDTO | undefined,
): Promise<void> {
  if (comand && comand[0] === 'make:provider') {
    if (providerName && fatherNames) {
      const providerInjection = fs.readFileSync(
        `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
        'ascii',
      );
      fs.truncate(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
        error => {
          if (error) throw error;
        },
      );
      fs.appendFile(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
        providerInjection,
        error => {
          if (error) throw error;
        },
      );
    } else if (providerName) {
      const providerInjection = fs.readFileSync(
        'src/shared/container/providers/index.ts',
        'ascii',
      );
      fs.truncate(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
        error => {
          if (error) throw error;
        },
      );
      fs.appendFile(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
        providerInjection,
        error => {
          if (error) throw error;
        },
      );
    }
  } else if (comand && comand[0] === 'make:module') {
    if (names && fatherNames) {
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
        `src/routes/${fatherNames.lowerModuleName}Router.ts`,
        'ascii',
      );
      fs.truncate(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        error => {
          if (error) throw error;
        },
      );
      fs.appendFile(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        routeInjection,
        error => {
          if (error) throw error;
        },
      );
    } else if (names) {
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
      const routeInjection = fs.readFileSync('src/routes/index.ts', 'ascii');
      fs.truncate(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        error => {
          if (error) throw error;
        },
      );
      fs.appendFile(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        routeInjection,
        error => {
          if (error) throw error;
        },
      );
    }
  }
  fs.truncate(
    './node_modules/cross-api/dist/tools/lastModification/comands/comands.log',
    error => {
      if (error) throw error;
    },
  );
  fs.appendFile(
    './node_modules/cross-api/dist/tools/lastModification/comands/comands.log',
    String(comand),
    error => {
      if (error) throw error;
    },
  );
}
