import { execSync } from 'node:child_process';
import { Console } from '@tools/console';
import { Messages, IMessagesDTO } from '@tools/messages';

export class Shell {
  private readonly allowedPattern: RegExp;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor() {
    this.allowedPattern =
      /^(npm install yarn --location=global|yarn add( -D)? ((@[\w-]+\/[\w-]+|[\w-]+)(@\^?[\d.]+)? ?)+)$/;
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(command: string): string {
    if (this.allowedPattern.test(command)) {
      return execSync(command, { encoding: 'utf-8' });
    }
    throw this.console.single({
      message: `"${command}"${this.messages.invalidLanguage}`,
      color: 'red',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }
}
