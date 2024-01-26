import { FileManager } from '@tools/fileManager';

export class BaseRegister {
  protected readonly fileManager: FileManager;
  protected readonly basePath: string;

  public constructor() {
    this.fileManager = new FileManager();

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
    this.fileManager.checkAndCreateMultiDirSync([
      [this.basePath, 'comands'],
      [this.basePath, 'modules'],
      [this.basePath, 'providers'],
    ]);
    return [
      [this.basePath, 'comands', 'comands.log'],
      [this.basePath, 'modules', 'moduleInjection.log'],
      [this.basePath, 'modules', 'routeInjection.log'],
      [this.basePath, 'providers', 'providerInjection.log'],
    ].forEach(path => {
      if (!this.fileManager.checkIfExistsSync(path)) {
        this.fileManager.createFileSync(path, '');
      }
    });
  }
}
