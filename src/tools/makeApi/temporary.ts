import { appendFileSync, existsSync, truncateSync } from 'fs';
import { IMessagesDTO, Messages } from '@tools/messages';
import { CreateAuthConfig } from '@templates/providers/config/authConfig';
import { CreateCorsConfig } from '@templates/providers/config/corsConfig';
import { resolve } from 'path';

export class MakeTemporary {
  private messages: IMessagesDTO;
  private createCorsConfig: CreateCorsConfig;
  private createAuthConfig: CreateAuthConfig;

  constructor() {
    this.messages = new Messages().execute();
    this.createCorsConfig = new CreateCorsConfig();
    this.createAuthConfig = new CreateAuthConfig();
  }

  public async execute(): Promise<void> {
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
