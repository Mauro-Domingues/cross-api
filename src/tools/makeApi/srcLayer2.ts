import { FileManager } from '@tools/fileManager';

export class MakeSecondLayer {
  private readonly fileManager: FileManager;

  public constructor() {
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateFile(['src', 'swagger.json'], {
      execute(): string {
        return '{}';
      },
    });
  }
}
