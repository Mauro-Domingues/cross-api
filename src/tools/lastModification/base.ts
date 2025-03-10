import { FileManager } from '@tools/fileManager';

export class BaseRegister {
  protected readonly fileManager: FileManager;
  protected readonly basePath: string;

  public constructor() {
    this.fileManager = FileManager.getInstance();
    this.basePath = this.fileManager.resolvePath(['.cross']);
    this.constructBase();
  }

  private constructBase(): void {
    this.fileManager.checkAndCreateMultiDirSync([
      [this.basePath, 'commands'],
      [this.basePath, 'modules'],
      [this.basePath, 'providers'],
    ]);
    return [
      [this.basePath, 'commands', 'commands.log'],
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
