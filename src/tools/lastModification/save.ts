import { FileManager } from '@tools/fileManager.js';
import { IModuleNamesDTO } from '@tools/names.js';

export class CreateRegister {
  private readonly basePath: string;
  private readonly fileManager: FileManager;
  private readonly comand: Array<string> | undefined;
  private readonly providerName: string | undefined;
  private readonly names: IModuleNamesDTO | undefined;
  private readonly fatherNames:
    | Pick<IModuleNamesDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
    | undefined;

  constructor(
    comand: Array<string> | undefined,
    providerName: string | undefined,
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.fileManager = new FileManager();
    this.comand = comand;
    this.providerName = providerName;
    this.names = names;
    this.fatherNames = fatherNames;
    this.basePath = this.fileManager.resolvePath([
      'node_modules',
      'cross-api',
      'dist',
      'tools',
      'lastModification',
    ]);
  }

  private async constructBase(): Promise<void> {
    if (!this.fileManager.checkIfExists([this.basePath, 'comands'])) {
      await this.fileManager.createDir([this.basePath, 'comands']);
    }
    if (!this.fileManager.checkIfExists([this.basePath, 'modules'])) {
      await this.fileManager.createDir([this.basePath, 'modules']);
    }
    if (!this.fileManager.checkIfExists([this.basePath, 'providers'])) {
      await this.fileManager.createDir([this.basePath, 'providers']);
    }
    if (
      !this.fileManager.checkIfExists([this.basePath, 'comands', 'comands.log'])
    ) {
      await this.fileManager.createFile(
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
      await this.fileManager.createFile(
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
      await this.fileManager.createFile(
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
      await this.fileManager.createFile(
        [this.basePath, 'providers', 'providerInjection.log'],
        '',
      );
    }
  }

  private async makeProvider(): Promise<void> {
    if (this.providerName && this.fatherNames) {
      await this.fileManager.truncateFile([
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
        const providerInjection = await this.fileManager.readFile([
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ]);
        await this.fileManager.createFile(
          [this.basePath, 'modules', 'routeInjection.log'],
          providerInjection,
        );
      } else {
        await this.fileManager.createFile(
          [this.basePath, 'modules', 'routeInjection.log'],
          '',
        );
      }
    } else if (this.providerName) {
      const providerInjection = await this.fileManager.readFile([
        'src',
        'shared',
        'container',
        'providers',
        'index.ts',
      ]);
      await this.fileManager.truncateFile([
        this.basePath,
        'modules',
        'routeInjection.log',
      ]);
      await this.fileManager.createFile(
        [this.basePath, 'modules', 'routeInjection.log'],
        providerInjection,
      );
    }
  }

  private async makeModule(): Promise<void> {
    if (this.names && this.fatherNames) {
      const moduleInjection = await this.fileManager.readFile([
        'src',
        'shared',
        'container',
        'index.ts',
      ]);
      await this.fileManager.truncateFile([
        this.basePath,
        'modules',
        'moduleInjection.log',
      ]);
      await this.fileManager.createFile(
        [this.basePath, 'modules', 'moduleInjection.log'],
        moduleInjection,
      );
      await this.fileManager.truncateFile([
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
        const routeInjection = await this.fileManager.readFile([
          'src',
          'routes',
          `${this.fatherNames.lowerModuleName}Router.ts`,
        ]);
        await this.fileManager.createFile(
          [this.basePath, 'modules', 'routeInjection.log'],
          routeInjection,
        );
      } else {
        const routeInjection = `import { Router } from 'express';

const ${this.fatherNames.lowerModuleName}Router = Router();

export { ${this.fatherNames.lowerModuleName}Router };
`;
        await this.fileManager.createFile(
          [this.basePath, 'modules', 'routeInjection.log'],
          routeInjection,
        );
      }
    } else if (this.names) {
      const moduleInjection = await this.fileManager.readFile([
        'src',
        'shared',
        'container',
        'index.ts',
      ]);
      await this.fileManager.truncateFile([
        this.basePath,
        'modules',
        'moduleInjection.log',
      ]);
      await this.fileManager.createFile(
        [this.basePath, 'modules', 'moduleInjection.log'],
        moduleInjection,
      );
      const routeInjection = await this.fileManager.readFile([
        'src',
        'routes',
        'index.ts',
      ]);

      await this.fileManager.truncateFile([
        this.basePath,
        'modules',
        'routeInjection.log',
      ]);
      await this.fileManager.createFile(
        [this.basePath, 'modules', 'routeInjection.log'],
        routeInjection,
      );
    }
  }

  public async execute(): Promise<void> {
    await this.constructBase();
    if (this.comand && this.comand[0] === 'make:provider') {
      await this.makeProvider();
    } else if (this.comand && this.comand[0] === 'make:module') {
      await this.makeModule();
    }

    await this.fileManager.truncateFile([
      this.basePath,
      'comands',
      'comands.log',
    ]);
    return this.fileManager.createFile(
      [this.basePath, 'comands', 'comands.log'],
      String(this.comand),
    );
  }
}
