import { CreateContainer } from '@templates/index/container';
import { FileManager } from '@tools/fileManager';

export class BaseProvider {
  private readonly createContainer: CreateContainer;
  protected readonly fileManager: FileManager;

  public constructor() {
    this.createContainer = new CreateContainer();
    this.fileManager = new FileManager();
  }

  protected constructBase(): void {
    this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'config'],
      ['src', 'shared', 'container', 'providers'],
    ]);
    if (
      !this.fileManager.checkIfExistsSync([
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
  }
}
