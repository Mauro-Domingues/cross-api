import { IModuleNamesDTO } from '@tools/names';
import { appendFileSync, existsSync, readFileSync, truncateSync } from 'fs';

export class CreateRegister {
  private comand: string[] | undefined;
  private providerName: string | undefined;
  private names: IModuleNamesDTO | undefined;
  private fatherNames:
    | Pick<IModuleNamesDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
    | undefined;

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

  private makeProvider(): void {
    if (this.providerName && this.fatherNames) {
      truncateSync(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
      );
      if (
        existsSync(
          `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
        )
      ) {
        const providerInjection = readFileSync(
          `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
          'ascii',
        );
        appendFileSync(
          './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
          providerInjection,
        );
      } else {
        appendFileSync(
          './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
          '',
        );
      }
    } else if (this.providerName) {
      const providerInjection = readFileSync(
        'src/shared/container/providers/index.ts',
        'ascii',
      );
      truncateSync(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
      );
      appendFileSync(
        './node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log',
        providerInjection,
      );
    }
  }

  private makeModule(): void {
    if (this.names && this.fatherNames) {
      const moduleInjection = readFileSync(
        'src/shared/container/index.ts',
        'ascii',
      );
      truncateSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log',
      );
      appendFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log',
        moduleInjection,
      );
      truncateSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
      );
      if (
        existsSync(`src/routes/${this.fatherNames.lowerModuleName}Router.ts`)
      ) {
        const routeInjection = readFileSync(
          `src/routes/${this.fatherNames.lowerModuleName}Router.ts`,
          'ascii',
        );
        appendFileSync(
          './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
          routeInjection,
        );
      } else {
        const routeInjection = `import { Router } from 'express';

const ${this.fatherNames.lowerModuleName}Router = Router();

export default ${this.fatherNames.lowerModuleName}Router;
`;
        appendFileSync(
          './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
          routeInjection,
        );
      }
    } else if (this.names) {
      const moduleInjection = readFileSync(
        'src/shared/container/index.ts',
        'ascii',
      );
      truncateSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log',
      );
      appendFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log',
        moduleInjection,
      );
      const routeInjection = readFileSync('src/routes/index.ts', 'ascii');
      truncateSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
      );
      appendFileSync(
        './node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log',
        routeInjection,
      );
    }
  }

  public async execute(): Promise<void> {
    if (this.comand && this.comand[0] === 'make:provider') {
      this.makeProvider();
    } else if (this.comand && this.comand[0] === 'make:module') {
      this.makeModule();
    }

    truncateSync(
      './node_modules/cross-api/dist/tools/lastModification/comands/comands.log',
    );
    appendFileSync(
      './node_modules/cross-api/dist/tools/lastModification/comands/comands.log',
      String(this.comand),
    );
  }
}
