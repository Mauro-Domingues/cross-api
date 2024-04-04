import { IModuleNamesDTO } from '@tools/names';
import { BaseRegister } from './base';

export class CreateRegister extends BaseRegister {
  public constructor(
    private readonly comand: Array<string> | undefined,
    private readonly providerName: string | undefined,
    private readonly names: IModuleNamesDTO | undefined,
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
      | undefined,
  ) {
    super();
  }

  private constructModuleBase(): void {
    this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'shared', 'container'],
      ['src', 'routes'],
    ]);
    return [
      ['src', 'shared', 'container', 'index.ts'],
      ['src', 'routes', 'index.ts'],
    ].forEach(path => {
      if (!this.fileManager.checkIfExistsSync(path)) {
        this.fileManager.createFileSync(path, '');
      }
    });
  }

  private constructProviderBase(): void {
    this.fileManager.checkAndCreateDirSync([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    if (
      !this.fileManager.checkIfExistsSync([
        'src',
        'shared',
        'container',
        'providers',
        'index.ts',
      ])
    ) {
      this.fileManager.createFileSync(
        ['src', 'shared', 'container', 'providers', 'index.ts'],
        '',
      );
    }
  }

  private makeProvider(): void {
    this.constructProviderBase();
    if (this.providerName && this.fatherNames) {
      this.fileManager.truncateFileSync([
        this.basePath,
        'providers',
        'providerInjection.log',
      ]);
      if (
        this.fileManager.checkIfExistsSync([
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ])
      ) {
        const providerInjection = this.fileManager.readFileSync([
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ]);
        this.fileManager.createFileSync(
          [this.basePath, 'providers', 'providerInjection.log'],
          providerInjection,
        );
      } else {
        this.fileManager.createFileSync(
          [this.basePath, 'providers', 'providerInjection.log'],
          '',
        );
      }
    } else if (this.providerName) {
      const providerInjection = this.fileManager.readFileSync([
        'src',
        'shared',
        'container',
        'providers',
        'index.ts',
      ]);
      this.fileManager.truncateFileSync([
        this.basePath,
        'providers',
        'providerInjection.log',
      ]);
      this.fileManager.createFileSync(
        [this.basePath, 'providers', 'providerInjection.log'],
        providerInjection,
      );
    }
  }

  private makeModule(): void {
    this.constructModuleBase();
    if (this.names && this.fatherNames) {
      const moduleInjection = this.fileManager.readFileSync([
        'src',
        'shared',
        'container',
        'index.ts',
      ]);
      this.fileManager.truncateFileSync([
        this.basePath,
        'modules',
        'moduleInjection.log',
      ]);
      this.fileManager.createFileSync(
        [this.basePath, 'modules', 'moduleInjection.log'],
        moduleInjection,
      );
      this.fileManager.truncateFileSync([
        this.basePath,
        'modules',
        'routeInjection.log',
      ]);
      if (
        this.fileManager.checkIfExistsSync([
          'src',
          'routes',
          `${this.fatherNames.lowerModuleName}Router.ts`,
        ])
      ) {
        const routeInjection = this.fileManager.readFileSync([
          'src',
          'routes',
          `${this.fatherNames.lowerModuleName}Router.ts`,
        ]);
        this.fileManager.createFileSync(
          [this.basePath, 'modules', 'routeInjection.log'],
          routeInjection,
        );
      } else {
        const routeInjection = `import { Router } from 'express';

const ${this.fatherNames.lowerModuleName}Router = Router();

export { ${this.fatherNames.lowerModuleName}Router };
`;
        this.fileManager.createFileSync(
          [this.basePath, 'modules', 'routeInjection.log'],
          routeInjection,
        );
      }
    } else if (this.names) {
      const moduleInjection = this.fileManager.readFileSync([
        'src',
        'shared',
        'container',
        'index.ts',
      ]);
      this.fileManager.truncateFileSync([
        this.basePath,
        'modules',
        'moduleInjection.log',
      ]);
      this.fileManager.createFileSync(
        [this.basePath, 'modules', 'moduleInjection.log'],
        moduleInjection,
      );
      const routeInjection = this.fileManager.readFileSync([
        'src',
        'routes',
        'index.ts',
      ]);

      this.fileManager.truncateFileSync([
        this.basePath,
        'modules',
        'routeInjection.log',
      ]);
      this.fileManager.createFileSync(
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

    if (
      this.fileManager.checkIfExistsSync([
        this.basePath,
        'comands',
        'comands.log',
      ])
    ) {
      this.fileManager.truncateFileSync([
        this.basePath,
        'comands',
        'comands.log',
      ]);
    }
    return this.fileManager.createFileSync(
      [this.basePath, 'comands', 'comands.log'],
      String(this.comand),
    );
  }
}
