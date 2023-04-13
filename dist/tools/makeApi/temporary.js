import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';
import { Messages } from '../messages.js';
import { CreateAuthConfig } from '../../templates/providers/config/authConfig.js';
import { CreateCorsConfig } from '../../templates/providers/config/corsConfig.js';

export class MakeTemporary {
  messages;
  createCorsConfig;
  createAuthConfig;
  constructor() {
    this.messages = new Messages().execute();
    this.createCorsConfig = new CreateCorsConfig();
    this.createAuthConfig = new CreateAuthConfig();
  }
  async execute() {
    if (!existsSync(resolve('src', 'config', 'auth.ts'))) {
      appendFileSync(
        resolve('src', 'config', 'auth.ts'),
        this.createAuthConfig.execute(),
      );
    } else {
      truncateSync(resolve('src', 'config', 'auth.ts'));
      appendFileSync(
        resolve('src', 'config', 'auth.ts'),
        this.createAuthConfig.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- auth.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync(resolve('src', 'config', 'cors.ts'))) {
      appendFileSync(
        resolve('src', 'config', 'cors.ts'),
        this.createCorsConfig.execute(),
      );
    } else {
      truncateSync(resolve('src', 'config', 'cors.ts'));
      appendFileSync(
        resolve('src', 'config', 'cors.ts'),
        this.createCorsConfig.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- cors.ts ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
