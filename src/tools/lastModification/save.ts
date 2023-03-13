import { IModuleNamesDTO } from '@tools/names';
import { appendFile, existsSync, readFileSync, truncate } from 'fs';

export class CreateRegister {
  private comand: string[] | undefined;
  private providerName: string | undefined;
  private names: IModuleNamesDTO | undefined;
  private fatherNames: IModuleNamesDTO | undefined;

  constructor(
    comand: string[] | undefined,
    providerName: string | undefined,
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.comand = comand;
    this.providerName = providerName;
    this.names = names;
    this.fatherNames = fatherNames;
  }

  private makeProvider(
    providerName: string | undefined,
    fatherNames: Pick<IModuleNamesDTO, 'pluralLowerModuleName'> | undefined,
  ) {
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
  }

  private makeModule(
    names: unknown | undefined,
    fatherNames: Pick<IModuleNamesDTO, 'lowerModuleName'> | undefined,
  ) {
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

  public async execute(): Promise<void> {
    if (this.comand) {
      switch (this.comand[0]) {
        case 'make:provider':
          this.makeProvider(this.providerName, this.fatherNames);
          break;
        case 'make:module':
          this.makeModule(this.names, this.fatherNames);
          break;
        default:
          truncate(
            './node_modules/cross-api/dist/tools/lastModification/comands/comands.log',
            error => {
              if (error) throw error;
            },
          );
          appendFile(
            './node_modules/cross-api/dist/tools/lastModification/comands/comands.log',
            String(this.comand),
            error => {
              if (error) throw error;
            },
          );
      }
    }
  }
}
