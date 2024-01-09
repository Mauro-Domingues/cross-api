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
    this.fileManager.checkAndCreateDir([this.basePath, 'comands']);
    this.fileManager.checkAndCreateDir([this.basePath, 'modules']);
    this.fileManager.checkAndCreateDir([this.basePath, 'providers']);
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
}
