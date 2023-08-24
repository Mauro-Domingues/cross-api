import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { IMessagesDTO, Messages } from '@tools/messages';

export class MakeInfra {
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'config']);
    await this.fileManager.checkAndCreateDir(['src', '@types']);
    await this.fileManager.checkAndCreateDir(['src', 'dtos']);
    await this.fileManager.checkAndCreateDir(['src', 'assets']);
    await this.fileManager.checkAndCreateDir(['src', 'middlewares']);
    await this.fileManager.checkAndCreateDir(['src', 'modules']);
    await this.fileManager.checkAndCreateDir(['src', 'routes']);
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'utils']);
    await this.fileManager.checkAndCreateDir(['src', 'utils', 'mappers']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'modules',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'modules',
      'entities',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'modules',
      'repositories',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'modules',
      'repositories',
      'fakes',
    ]);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'errors']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'typeorm']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'typeorm',
      'migrations',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'typeorm',
      'seeds',
    ]);
    return this.console.one([
      this.messages.apiCreated,
      'blue',
      true,
      false,
      false,
    ]);
  }
}
