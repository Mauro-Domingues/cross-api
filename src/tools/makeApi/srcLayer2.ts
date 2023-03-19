import messages from '@tools/messages';
import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';

export class MakeSecondLayer {
  private messages: typeof messages;

  constructor() {
    this.messages = messages;
  }

  public async execute(): Promise<void> {
    if (!existsSync(resolve('src', 'swagger.json'))) {
      appendFileSync(resolve('src', 'swagger.json'), '{}');
    } else {
      truncateSync(resolve('src', 'swagger.json'));
      appendFileSync(resolve('src', 'swagger.json'), '{}');
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- swagger.json ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
