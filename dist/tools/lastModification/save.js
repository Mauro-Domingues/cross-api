import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  truncateSync,
} from 'fs';
import { resolve } from 'path';

export class CreateRegister {
  basePath;
  comand;
  providerName;
  names;
  fatherNames;
  constructor(comand, providerName, names, fatherNames) {
    this.basePath = resolve(
      'node_modules',
      'cross-api',
      'dist',
      'tools',
      'lastModification',
    );
    this.comand = comand;
    this.providerName = providerName;
    this.names = names;
    this.fatherNames = fatherNames;
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
  makeProvider() {
    if (this.providerName && this.fatherNames) {
      truncateSync(resolve(this.basePath, 'modules', 'routeInjection.log'));
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
          resolve(this.basePath, 'modules', 'routeInjection.log'),
          providerInjection,
        );
      } else {
        appendFileSync(
          resolve(this.basePath, 'modules', 'routeInjection.log'),
          '',
        );
      }
    } else if (this.providerName) {
      const providerInjection = readFileSync(
        resolve('src', 'shared', 'container', 'providers', 'index.ts'),
        'ascii',
      );
      truncateSync(resolve(this.basePath, 'modules', 'routeInjection.log'));
      appendFileSync(
        resolve(this.basePath, 'modules', 'routeInjection.log'),
        providerInjection,
      );
    }
  }
  makeModule() {
    if (this.names && this.fatherNames) {
      const moduleInjection = readFileSync(
        resolve('src', 'shared', 'container', 'index.ts'),
        'ascii',
      );
      truncateSync(resolve(this.basePath, 'modules', 'moduleInjection.log'));
      appendFileSync(
        resolve(this.basePath, 'modules', 'moduleInjection.log'),
        moduleInjection,
      );
      truncateSync(resolve(this.basePath, 'modules', 'routeInjection.log'));
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
          resolve(this.basePath, 'modules', 'routeInjection.log'),
          routeInjection,
        );
      } else {
        const routeInjection = `import { Router } from 'express';

const ${this.fatherNames.lowerModuleName}Router = Router();

export { ${this.fatherNames.lowerModuleName}Router };
`;
        appendFileSync(
          resolve(this.basePath, 'modules', 'routeInjection.log'),
          routeInjection,
        );
      }
    } else if (this.names) {
      const moduleInjection = readFileSync(
        resolve('src', 'shared', 'container', 'index.ts'),
        'ascii',
      );
      truncateSync(resolve(this.basePath, 'modules', 'moduleInjection.log'));
      appendFileSync(
        resolve(this.basePath, 'modules', 'moduleInjection.log'),
        moduleInjection,
      );
      const routeInjection = readFileSync(
        resolve('src', 'routes', 'index.ts'),
        'ascii',
      );
      truncateSync(resolve(this.basePath, 'modules', 'routeInjection.log'));
      appendFileSync(
        resolve(this.basePath, 'modules', 'routeInjection.log'),
        routeInjection,
      );
    }
  }
  async execute() {
    if (this.comand && this.comand[0] === 'make:provider') {
      this.makeProvider();
    } else if (this.comand && this.comand[0] === 'make:module') {
      this.makeModule();
    }
    truncateSync(resolve(this.basePath, 'comands', 'comands.log'));
    appendFileSync(
      resolve(this.basePath, 'comands', 'comands.log'),
      String(this.comand),
    );
  }
}
