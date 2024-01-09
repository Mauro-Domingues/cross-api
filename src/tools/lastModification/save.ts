import { CreateContainer } from '@templates/index/container';
import { CreateRoutes } from '@templates/index/routes';
import { IModuleNamesDTO } from '@tools/names';
import { BaseRegister } from './base';

export class CreateRegister extends BaseRegister {
  private readonly createContainer: CreateContainer;
  private readonly createRoutes: CreateRoutes;

  public constructor(
    private readonly comand: Array<string> | undefined,
    private readonly providerName: string | undefined,
    private readonly names: IModuleNamesDTO | undefined,
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
      | undefined,
  ) {
    super();
    this.createContainer = new CreateContainer();
    this.createRoutes = new CreateRoutes();
  }

  private constructModuleBase(): void {
    this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    this.fileManager.checkAndCreateDir(['src', 'routes']);
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'index.ts',
      ])
    ) {
      this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        this.createContainer.execute(),
      );
    }
    if (!this.fileManager.checkIfExists(['src', 'routes', 'index.ts'])) {
      this.fileManager.createFile(
        ['src', 'routes', 'index.ts'],
        this.createRoutes.execute(),
      );
    }
  }

  private constructProviderBase(): void {
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'index.ts',
      ])
    ) {
      this.fileManager.createFile(
        ['src', 'shared', 'container', 'providers', 'index.ts'],
        '',
      );
    }
  }

  private makeProvider(): void {
    this.constructProviderBase();
    if (this.providerName && this.fatherNames) {
      this.fileManager.truncateFile([
        this.basePath,
        'providers',
        'providerInjection.log',
      ]);
      if (
        this.fileManager.checkIfExists([
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ])
      ) {
        const providerInjection = this.fileManager.readFile([
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ]);
        this.fileManager.createFile(
          [this.basePath, 'providers', 'providerInjection.log'],
          providerInjection,
        );
      } else {
        this.fileManager.createFile(
          [this.basePath, 'providers', 'providerInjection.log'],
          '',
        );
      }
    } else if (this.providerName) {
      const providerInjection = this.fileManager.readFile([
        'src',
        'shared',
        'container',
        'providers',
        'index.ts',
      ]);
      this.fileManager.truncateFile([
        this.basePath,
        'providers',
        'providerInjection.log',
      ]);
      this.fileManager.createFile(
        [this.basePath, 'providers', 'providerInjection.log'],
        providerInjection,
      );
    }
  }

  private makeModule(): void {
    this.constructModuleBase();
    if (this.names && this.fatherNames) {
      const moduleInjection = this.fileManager.readFile([
        'src',
        'shared',
        'container',
        'index.ts',
      ]);
      this.fileManager.truncateFile([
        this.basePath,
        'modules',
        'moduleInjection.log',
      ]);
      this.fileManager.createFile(
        [this.basePath, 'modules', 'moduleInjection.log'],
        moduleInjection,
      );
      this.fileManager.truncateFile([
        this.basePath,
        'modules',
        'routeInjection.log',
      ]);
      if (
        this.fileManager.checkIfExists([
          'src',
          'routes',
          `${this.fatherNames.lowerModuleName}Router.ts`,
        ])
      ) {
        const routeInjection = this.fileManager.readFile([
          'src',
          'routes',
          `${this.fatherNames.lowerModuleName}Router.ts`,
        ]);
        this.fileManager.createFile(
          [this.basePath, 'modules', 'routeInjection.log'],
          routeInjection,
        );
      } else {
        const routeInjection = `import { Router } from 'express';

const ${this.fatherNames.lowerModuleName}Router = Router();

export { ${this.fatherNames.lowerModuleName}Router };
`;
        this.fileManager.createFile(
          [this.basePath, 'modules', 'routeInjection.log'],
          routeInjection,
        );
      }
    } else if (this.names) {
      const moduleInjection = this.fileManager.readFile([
        'src',
        'shared',
        'container',
        'index.ts',
      ]);
      this.fileManager.truncateFile([
        this.basePath,
        'modules',
        'moduleInjection.log',
      ]);
      this.fileManager.createFile(
        [this.basePath, 'modules', 'moduleInjection.log'],
        moduleInjection,
      );
      const routeInjection = this.fileManager.readFile([
        'src',
        'routes',
        'index.ts',
      ]);

      this.fileManager.truncateFile([
        this.basePath,
        'modules',
        'routeInjection.log',
      ]);
      this.fileManager.createFile(
        [this.basePath, 'modules', 'routeInjection.log'],
        routeInjection,
      );
    }
  }

  public execute(): void {
    if (this.comand && this.comand[0] === 'make:provider') {
      this.makeProvider();
    } else if (this.comand && this.comand[0] === 'make:module') {
      this.makeModule();
    }

    this.fileManager.truncateFile([this.basePath, 'comands', 'comands.log']);
    return this.fileManager.createFile(
      [this.basePath, 'comands', 'comands.log'],
      String(this.comand),
    );
  }
}
