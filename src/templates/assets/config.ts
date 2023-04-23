import { FileManager } from '@tools/fileManager.js';

export class Config {
  private configBody: string;
  private fileManager: FileManager;

  constructor() {
    this.fileManager = new FileManager();
    this.configBody = `import { Messages } from './messages.js';
import { Console } from './console.js';

export class ConfigJson {
  messages;
  console;
  constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
  }
  execute() {
    this.console.one([this.messages.configured, 'green', true, true, true]);
  }
}
`;
  }

  public async execute(): Promise<void> {
    await this.fileManager.truncateFile([
      'node_modules',
      'cross-api',
      'dist',
      'tools',
      'config.js',
    ]);
    return this.fileManager.createFile(
      ['node_modules', 'cross-api', 'dist', 'tools', 'config.js'],
      this.configBody,
    );
  }
}
