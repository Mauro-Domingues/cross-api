import { IModuleNamesDTO } from 'index';
import { appendFile, existsSync, readFileSync, truncate } from 'fs';

export async function createRegister(
  comand: string[] | undefined,
  providerName: string | undefined,
  names: IModuleNamesDTO | undefined,
  fatherNames: IModuleNamesDTO | undefined,
): Promise<void> {
  if (comand && comand[0] === 'make:provider') {
    if (providerName && fatherNames) {
      truncate(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
        error => {
          if (error) throw error;
        },
      );
      if (
        existsSync(
          `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
        )
      ) {
        const providerInjection = readFileSync(
          `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
          'ascii',
        );
        appendFile(
          './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
          providerInjection,
          error => {
            if (error) throw error;
          },
        );
      } else {
        appendFile(
          './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
          '',
          error => {
            if (error) throw error;
          },
        );
      }
    } else if (providerName) {
      const providerInjection = readFileSync(
        'src/shared/container/providers/index.ts',
        'ascii',
      );
      truncate(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
        providerInjection,
        error => {
          if (error) throw error;
        },
      );
    }
  } else if (comand && comand[0] === 'make:module') {
    if (names && fatherNames) {
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
      truncate(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        error => {
          if (error) throw error;
        },
      );
      if (existsSync(`src/routes/${fatherNames.lowerModuleName}Router.ts`)) {
        const routeInjection = readFileSync(
          `src/routes/${fatherNames.lowerModuleName}Router.ts`,
          'ascii',
        );
        appendFile(
          './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
          routeInjection,
          error => {
            if (error) throw error;
          },
        );
      } else {
        const routeInjection = `import { Router } from 'express';

const ${fatherNames.lowerModuleName}Router = Router();

export default ${fatherNames.lowerModuleName}Router;
`;
        appendFile(
          './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
          routeInjection,
          error => {
            if (error) throw error;
          },
        );
      }
    } else if (names) {
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
      const routeInjection = readFileSync('src/routes/index.ts', 'ascii');
      truncate(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        routeInjection,
        error => {
          if (error) throw error;
        },
      );
    }
  }
  truncate(
    './node_modules/cross-api/dist/tools/lastModification/comands/comands.log',
    error => {
      if (error) throw error;
    },
  );
  appendFile(
    './node_modules/cross-api/dist/tools/lastModification/comands/comands.log',
    String(comand),
    error => {
      if (error) throw error;
    },
  );
}
