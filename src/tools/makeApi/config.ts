import { CreateCorsConfig } from '@templates/providers/config/corsConfig';
import { FileManager } from '@tools/fileManager';

export class CreateConfig {
  private readonly createCorsConfig: CreateCorsConfig;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createCorsConfig = new CreateCorsConfig();
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateFile(
      ['src', 'config', 'cors.ts'],
      this.createCorsConfig,
    );
  }
}
