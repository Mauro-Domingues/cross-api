import { appendFileSync, existsSync, truncateSync } from 'fs';
import { IMessagesDTO, Messages } from '@tools/messages';
import { CreateAuthConfig } from '@templates/providers/config/authConfig';
import { CreateCorsConfig } from '@templates/providers/config/corsConfig';
import { resolve } from 'path';
import { Console } from '@tools/console';

export class MakeTemporary {
  private messages: IMessagesDTO;
  private console: Console;
  private createCorsConfig: CreateCorsConfig;
  private createAuthConfig: CreateAuthConfig;

  constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
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
