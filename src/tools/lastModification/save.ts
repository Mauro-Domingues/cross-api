import { CreateContainer } from '@templates/index/container';
import { CreateRoutes } from '@templates/index/routes';
import { FileManager } from '@tools/fileManager';
import { IModuleNamesDTO } from '@tools/names';

export class CreateRegister {
  private readonly createContainer: CreateContainer;
  private readonly createRoutes: CreateRoutes;
  private readonly fileManager: FileManager;
  private readonly basePath: string;

  constructor(
    private readonly comand: Array<string> | undefined,
    private readonly providerName: string | undefined,
    private readonly names: IModuleNamesDTO | undefined,
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.fileManager = new FileManager();
    this.createContainer = new CreateContainer();
    this.createRoutes = new CreateRoutes();
    this.basePath = this.fileManager.resolvePath([
      'node_modules',
      'cross-api',
      'src',
      'tools',
      'lastModification',
    ]);
    this.constructBase();
  }

  private constructBase(): void {
    this.fileManager.checkAndCreateDir([this.basePath, 'comands']);
    this.fileManager.checkAndCreateDir([this.basePath, 'modules']);
    this.fileManager.checkAndCreateDir([this.basePath, 'providers']);
    this.fileManager.checkAndCreateDir(['src']);
    this.fileManager.checkAndCreateDir(['src', 'shared']);
    this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
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
    if (
      !this.fileManager.checkIfExists([this.basePath, 'comands', 'comands.log'])
    ) {
      this.fileManager.createFile(
        [this.basePath, 'comands', 'comands.log'],
        '',
      );
    }
    if (
      !this.fileManager.checkIfExists([
        this.basePath,
        'modules',
        'moduleInjection.log',
      ])
    ) {
      this.fileManager.createFile(
        [this.basePath, 'modules', 'moduleInjection.log'],
        '',
      );
    }
    if (
      !this.fileManager.checkIfExists([
        this.basePath,
        'modules',
        'routeInjection.log',
      ])
    ) {
      this.fileManager.createFile(
        [this.basePath, 'modules', 'routeInjection.log'],
        '',
      );
    }
    if (
      !this.fileManager.checkIfExists([
        this.basePath,
        'providers',
        'providerInjection.log',
      ])
    ) {
      this.fileManager.createFile(
        [this.basePath, 'providers', 'providerInjection.log'],
        '',
      );
    }
  }

  private makeProvider(): void {
    if (this.providerName && this.fatherNames) {
      this.fileManager.truncateFile([
        this.basePath,
        'modules',
        'routeInjection.log',
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
          [this.basePath, 'modules', 'routeInjection.log'],
          providerInjection,
        );
      } else {
        this.fileManager.createFile(
          [this.basePath, 'modules', 'routeInjection.log'],
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
        'modules',
        'routeInjection.log',
      ]);
      this.fileManager.createFile(
        [this.basePath, 'modules', 'routeInjection.log'],
        providerInjection,
      );
    }
  }

  private makeModule(): void {
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
