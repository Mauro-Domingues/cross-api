import { IHelpDTO } from '@interfaces/IMessageDTO/IHelpDTO';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class DeleteApi {
  private readonly helpMessages: IHelpDTO;
  private readonly console: Console;

  public constructor(private readonly fileManager: FileManager) {
    this.helpMessages = Messages.getInstance().help;
    this.console = Console.getInstance();
  }

  public execute({ command }: { command: string }) {
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
      message: ['- ', this.helpMessages.description.reversed, ': ', command],
      color: 'yellow',
      bold: true,
    });
  }
}
