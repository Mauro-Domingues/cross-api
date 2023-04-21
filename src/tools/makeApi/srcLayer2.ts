import { Console } from '@tools/console';
import { IMessagesDTO, Messages } from '@tools/messages';
import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';

export class MakeSecondLayer {
  private messages: IMessagesDTO;
  private console: Console;

  constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public async execute(): Promise<void> {
    if (!existsSync(resolve('src', 'swagger.json'))) {
      appendFileSync(resolve('src', 'swagger.json'), '{}');
    } else {
      truncateSync(resolve('src', 'swagger.json'));
      appendFileSync(resolve('src', 'swagger.json'), '{}');
    }
    this.console.one([
      `- swagger.json ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
