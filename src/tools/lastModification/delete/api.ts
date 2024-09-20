import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class DeleteApi {
  private readonly messages: IMessageDTO;
  private readonly console: Console;

  public constructor(private readonly fileManager: FileManager) {
    this.messages = Messages.getInstance().execute();
    this.console = Console.getInstance();
  }

  public execute({ comand }: { comand: string }) {
    this.fileManager.removeMultiDir([
      ['.cross'],
      ['.swc'],
      ['src'],
      ['dist'],
      ['coverage'],
      ['tmp'],
    ]);
    this.fileManager.checkAndRemoveMultiFile([
      ['.editorconfig'],
      ['.env'],
      ['.env.template'],
      ['.eslintignore'],
      ['.eslintrc.json'],
      ['.gitignore'],
      ['.swcrc'],
      ['docker-compose.yml'],
      ['doc.config.ts'],
      ['jest.config.ts'],
      ['prettier.config.cjs'],
      ['tsconfig.json'],
      ['tsconfig.tsbuildinfo'],
    ]);
    return this.console.execute({
      message: ['- ', this.messages.comands.description.reversed, ': ', comand],
      color: 'yellow',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }
}
