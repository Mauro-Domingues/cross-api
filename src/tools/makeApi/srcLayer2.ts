import { FileManager } from '@tools/fileManager';

export class MakeSecondLayer {
  private readonly fileManager: FileManager;

  constructor() {
    this.fileManager = new FileManager();
  }

  public async execute(): Promise<void> {
    return this.fileManager.checkAndCreateFile(['src', 'swagger.json'], {
      execute() {
        return '{}';
      },
    });
  }
}
