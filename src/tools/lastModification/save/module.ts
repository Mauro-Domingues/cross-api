import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateModule {
  private readonly concat: Concat;

  public constructor(
    private readonly fileManager: FileManager,
    private readonly basePath: string,
    private readonly names: Partial<IModuleNameDTO> | undefined,
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.concat = Concat.getInstance();
  }

  private getRouterBase(lowerModuleName: string): string {
    return `import { Router } ${'from'} 'express';

const ${lowerModuleName}Router = Router();

export { ${lowerModuleName}Router };
`;
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

  private useNames(): void {
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

  private useFatherNames({
    fatherNames,
  }: {
    fatherNames: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'pluralLowerModuleName'
    >;
  }): void {
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
        this.concat.execute(fatherNames.lowerModuleName, 'Router.ts'),
      ])
    ) {
      const routeInjection = this.fileManager.readFileSync([
        'src',
        'routes',
        this.concat.execute(fatherNames.lowerModuleName, 'Router.ts'),
      ]);
      this.fileManager.createFileSync(
        [this.basePath, 'modules', 'routeInjection.log'],
        routeInjection,
      );
    } else {
      const routeInjection = this.getRouterBase(fatherNames.lowerModuleName);
      this.fileManager.createFileSync(
        [this.basePath, 'modules', 'routeInjection.log'],
        routeInjection,
      );
    }
  }

  public execute(): void {
    this.constructModuleBase();

    if (this.names && this.fatherNames) {
      this.useFatherNames({ fatherNames: this.fatherNames });
    } else if (this.names) {
      this.useNames();
    }
  }
}
