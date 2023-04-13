import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';
import { Messages } from '../messages.js';

export class MakeSecondLayer {
  messages;
  constructor() {
    this.messages = new Messages().execute();
  }
  async execute() {
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
