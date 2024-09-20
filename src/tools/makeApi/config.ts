import { CreateAuthConfig } from '@templates/providers/config/authConfig';
import { CreateCorsConfig } from '@templates/providers/config/corsConfig';
import { FileManager } from '@tools/fileManager';

export class CreateConfig {
  private readonly createCorsConfig: CreateCorsConfig;
  private readonly createAuthConfig: CreateAuthConfig;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createCorsConfig = new CreateCorsConfig();
    this.createAuthConfig = new CreateAuthConfig();
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'config', 'auth.ts'], this.createAuthConfig],
      [['src', 'config', 'cors.ts'], this.createCorsConfig],
    ]);
  }
}
