import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { IMessagesDTO, Messages } from '@tools/messages';

export class MakeInfra {
  private readonly fileManager: FileManager;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
  }

  public execute(): void {
    this.fileManager.checkAndCreateDir(['src', 'config']);
    this.fileManager.checkAndCreateDir(['src', '@types']);
    this.fileManager.checkAndCreateDir(['src', 'dtos']);
    this.fileManager.checkAndCreateDir(['src', 'assets']);
    this.fileManager.checkAndCreateDir(['src', 'middlewares']);
    this.fileManager.checkAndCreateDir(['src', 'modules']);
    this.fileManager.checkAndCreateDir(['src', 'routes']);
    this.fileManager.checkAndCreateDir(['src', 'shared']);
    this.fileManager.checkAndCreateDir(['src', 'utils', 'mappers']);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'modules',
      'entities',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'modules',
      'repositories',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir(['src', 'shared', 'errors']);
    this.fileManager.checkAndCreateDir(['src', 'shared', 'typeorm']);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'typeorm',
      'dataSources',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'typeorm',
      'migrations',
    ]);
    this.fileManager.checkAndCreateDir(['src', 'shared', 'typeorm', 'seeds']);
    return this.console.one({
      message: this.messages.apiCreated,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }
}
