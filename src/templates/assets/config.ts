import { FileManager } from '@tools/fileManager';

export class Config {
  private readonly fileManager: FileManager;
  private readonly configBody: string;

  public constructor() {
    this.fileManager = FileManager.getInstance();
    this.configBody = `import { Messages } ${'from'} './messages.js';
import { Console } ${'from'} './console.js';
export class ConfigJson {
    constructor() {
        this.messages = new Messages().execute();
        this.console = Console.getInstance();
    }
    execute() {
        this.console.execute({
            message: this.messages.comands.description.configured,
            color: 'green',
            bold: true,
            breakStart: true,
            breakEnd: true,
        });
    }
}
`;
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
      this.configBody,
    );
  }
}
