import { CreateContainer } from '@templates/index/container';
import { FileManager } from '@tools/fileManager';

export class BaseProvider {
  private readonly createContainer: CreateContainer;
  protected readonly fileManager: FileManager;

  public constructor() {
    this.createContainer = new CreateContainer();
    this.fileManager = new FileManager();
  }

  public execute(): void {
    this.fileManager.checkAndCreateDir(['src', 'config']);
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
