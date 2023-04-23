import { IMessagesDTO, Messages } from '@tools/messages.js';
import { CreateAuthConfig } from '@templates/providers/config/authConfig.js';
import { CreateCorsConfig } from '@templates/providers/config/corsConfig.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeTemporary {
  private messages: IMessagesDTO;
  private fileManager: FileManager;
  private console: Console;
  private createCorsConfig: CreateCorsConfig;
  private createAuthConfig: CreateAuthConfig;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createCorsConfig = new CreateCorsConfig();
    this.createAuthConfig = new CreateAuthConfig();
  }

  public async execute(): Promise<void> {
    if (!this.fileManager.checkIfExists(['src', 'config', 'auth.ts'])) {
      await this.fileManager.createFile(
        ['src', 'config', 'auth.ts'],
        this.createAuthConfig.execute(),
      );
    } else {
      await this.fileManager.truncateFile(['src', 'config', 'auth.ts']);
      await this.fileManager.createFile(
        ['src', 'config', 'auth.ts'],
        this.createAuthConfig.execute(),
      );
    }
    this.console.one([
      `- auth.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!this.fileManager.checkIfExists(['src', 'config', 'cors.ts'])) {
      await this.fileManager.createFile(
        ['src', 'config', 'cors.ts'],
        this.createCorsConfig.execute(),
      );
    } else {
      await this.fileManager.truncateFile(['src', 'config', 'cors.ts']);
      await this.fileManager.createFile(
        ['src', 'config', 'cors.ts'],
        this.createCorsConfig.execute(),
      );
    }
    return this.console.one([
      `- cors.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
