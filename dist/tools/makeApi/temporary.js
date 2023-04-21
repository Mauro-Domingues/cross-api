import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';
import { Messages } from '../messages.js';
import { CreateAuthConfig } from '../../templates/providers/config/authConfig.js';
import { CreateCorsConfig } from '../../templates/providers/config/corsConfig.js';
import { Console } from '../console.js';

export class MakeTemporary {
  messages;
  console;
  createCorsConfig;
  createAuthConfig;
  constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
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
    this.console.one([
      `- auth.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
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
    this.console.one([
      `- cors.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
