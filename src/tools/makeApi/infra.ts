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
    this.fileManager.checkAndCreateMultiDir([
      ['src', 'config'],
      ['src', '@types'],
      ['src', 'dtos'],
      ['src', 'assets'],
      ['src', 'middlewares'],
      ['src', 'modules'],
      ['src', 'routes'],
      ['src', 'utils', 'mappers'],
      ['src', 'shared', 'container', 'modules', 'entities'],
      ['src', 'shared', 'container', 'modules', 'repositories', 'fakes'],
      ['src', 'shared', 'errors'],
      ['src', 'shared', 'container', 'providers'],
      ['src', 'shared', 'typeorm', 'dataSources', 'fakes'],
      ['src', 'shared', 'typeorm', 'migrations'],
      ['src', 'shared', 'typeorm', 'seeds'],
    ]);
    return this.console.single({
      message: this.messages.apiCreated,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }
}
