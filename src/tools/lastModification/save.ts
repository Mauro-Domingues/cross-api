import { IModuleNamesDTO } from '@tools/names';
import { appendFileSync, existsSync, readFileSync, truncateSync } from 'fs';
import { resolve } from 'path';

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
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'routeInjection.log',
        ),
      );
      if (
        existsSync(
          resolve(
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'index.ts',
          ),
        )
      ) {
        const providerInjection = readFileSync(
          resolve(
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'index.ts',
          ),
          'ascii',
        );
        appendFileSync(
          resolve(
            'node_modules',
            'cross-api',
            'dist',
            'tools',
            'lastModification',
            'modules',
            'routeInjection.log',
          ),
          providerInjection,
        );
      } else {
        appendFileSync(
          resolve(
            'node_modules',
            'cross-api',
            'dist',
            'tools',
            'lastModification',
            'modules',
            'routeInjection.log',
          ),
          '',
        );
      }
    } else if (this.providerName) {
      const providerInjection = readFileSync(
        resolve('src', 'shared', 'container', 'providers', 'index.ts'),
        'ascii',
      );
      truncateSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'routeInjection.log',
        ),
      );
      appendFileSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'routeInjection.log',
        ),
        providerInjection,
      );
    }
  }

  private makeModule(): void {
    if (this.names && this.fatherNames) {
      const moduleInjection = readFileSync(
        resolve('src', 'shared', 'container', 'index.ts'),
        'ascii',
      );
      truncateSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'moduleInjection.log',
        ),
      );
      appendFileSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'moduleInjection.log',
        ),
        moduleInjection,
      );
      truncateSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'routeInjection.log',
        ),
      );
      if (
        existsSync(
          resolve(
            'src',
            'routes',
            `${this.fatherNames.lowerModuleName}Router.ts`,
          ),
        )
      ) {
        const routeInjection = readFileSync(
          resolve(
            'src',
            'routes',
            `${this.fatherNames.lowerModuleName}Router.ts`,
          ),
          'ascii',
        );
        appendFileSync(
          resolve(
            'node_modules',
            'cross-api',
            'dist',
            'tools',
            'lastModification',
            'modules',
            'routeInjection.log',
          ),
          routeInjection,
        );
      } else {
        const routeInjection = `import { Router } from 'express';

const ${this.fatherNames.lowerModuleName}Router = Router();

export { ${this.fatherNames.lowerModuleName}Router };
`;
        appendFileSync(
          resolve(
            'node_modules',
            'cross-api',
            'dist',
            'tools',
            'lastModification',
            'modules',
            'routeInjection.log',
          ),
          routeInjection,
        );
      }
    } else if (this.names) {
      const moduleInjection = readFileSync(
        resolve('src', 'shared', 'container', 'index.ts'),
        'ascii',
      );
      truncateSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'moduleInjection.log',
        ),
      );
      appendFileSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'moduleInjection.log',
        ),
        moduleInjection,
      );
      const routeInjection = readFileSync(
        resolve('src', 'routes', 'index.ts'),
        'ascii',
      );
      truncateSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'routeInjection.log',
        ),
      );
      appendFileSync(
        resolve(
          'node_modules',
          'cross-api',
          'dist',
          'tools',
          'lastModification',
          'modules',
          'routeInjection.log',
        ),
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
      resolve(
        'node_modules',
        'cross-api',
        'dist',
        'tools',
        'lastModification',
        'comands',
        'comands.log',
      ),
    );
    appendFileSync(
      resolve(
        'node_modules',
        'cross-api',
        'dist',
        'tools',
        'lastModification',
        'comands',
        'comands.log',
      ),
      String(this.comand),
    );
  }
}
