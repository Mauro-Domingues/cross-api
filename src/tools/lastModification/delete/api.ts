import { IComandDTO } from '@interfaces/IMessageDTO/IComandDTO';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class DeleteApi {
  private readonly comandMessages: IComandDTO;
  private readonly console: Console;

  public constructor(private readonly fileManager: FileManager) {
    this.comandMessages = Messages.getInstance().comands;
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
      ['Dockerfile'],
      ['doc.config.ts'],
      ['jest.config.ts'],
      ['prettier.config.cjs'],
      ['tsconfig.json'],
      ['tsconfig.tsbuildinfo'],
    ]);
    return this.console.execute({
      message: ['- ', this.comandMessages.description.reversed, ': ', comand],
      color: 'yellow',
      bold: true,
    });
  }
}
