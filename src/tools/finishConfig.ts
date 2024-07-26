import { CreateDefaultConfig } from '@templates/assets/defaultConfig';
import { FileManager } from '@tools/fileManager';

export class FinishConfig {
  private readonly createDefaultConfig: CreateDefaultConfig;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createDefaultConfig = new CreateDefaultConfig();
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
    this.fileManager.truncateFileSync([
      'node_modules',
      'cross-api',
      'src',
      'tools',
      'config.js',
    ]);
    return this.fileManager.createFile(
      ['node_modules', 'cross-api', 'src', 'tools', 'config.js'],
      this.createDefaultConfig.execute(),
    );
  }
}
