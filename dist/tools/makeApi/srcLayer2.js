import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';
import { Console } from '../console.js';
import { Messages } from '../messages.js';

export class MakeSecondLayer {
  messages;
  console;
  constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
  }
  async execute() {
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
