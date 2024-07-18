import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class MakeInfra {
  private readonly fileManager: FileManager;
  private readonly messages: IMessageDTO;
  private readonly console: Console;

  public constructor() {
    this.fileManager = FileManager.getInstance();
    this.messages = new Messages().execute();
    this.console = Console.getInstance();
  }

  public execute(): void {
    this.fileManager.checkAndCreateMultiDirSync([
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
    return this.console.execute({
      message: this.messages.comands.description.apiCreated,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }
}
