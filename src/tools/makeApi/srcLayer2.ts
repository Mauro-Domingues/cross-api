import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';

export class MakeSecondLayer {
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
  }

  public async execute(): Promise<void> {
    if (!this.fileManager.checkIfExists(['src', 'swagger.json'])) {
      await this.fileManager.createFile(['src', 'swagger.json'], '{}');
    } else {
      await this.fileManager.truncateFile(['src', 'swagger.json']);
      await this.fileManager.createFile(['src', 'swagger.json'], '{}');
    }
    return this.console.one([
      `- swagger.json ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
