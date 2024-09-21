import { CreateContainerIndex } from '@templates/index/container';
import { FileManager } from '@tools/fileManager';

export class BaseProvider {
  private readonly createContainerIndex: CreateContainerIndex;
  protected readonly fileManager: FileManager;

  public constructor() {
    this.createContainerIndex = new CreateContainerIndex();
    this.fileManager = FileManager.getInstance();
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
        this.createContainerIndex.execute(),
      );
    }
  }
}
