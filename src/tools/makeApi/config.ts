import { CreateAppConfig } from '@templates/providers/config/appConfig';
import { CreateCorsConfig } from '@templates/providers/config/corsConfig';
import { FileManager } from '@tools/fileManager';

export class CreateConfig {
  private readonly createCorsConfig: CreateCorsConfig;
  private readonly createAppConfig: CreateAppConfig;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createCorsConfig = new CreateCorsConfig();
    this.createAppConfig = new CreateAppConfig();
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'config', 'app.ts'], this.createAppConfig],
      [['src', 'config', 'cors.ts'], this.createCorsConfig],
    ]);
  }
}
