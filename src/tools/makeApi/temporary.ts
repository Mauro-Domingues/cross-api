import { appendFileSync, existsSync, truncateSync } from 'fs';
import messages from '@tools/messages';
import { CreateAuthConfig } from '@templates/providers/config/authConfig';
import { CreateCorsConfig } from '@templates/providers/config/corsConfig';

export class MakeTemporary {
  private messages: typeof messages;
  private createCorsConfig: CreateCorsConfig;
  private createAuthConfig: CreateAuthConfig;

  constructor() {
    this.messages = messages;
    this.createCorsConfig = new CreateCorsConfig();
    this.createAuthConfig = new CreateAuthConfig();
  }

  public async execute(): Promise<void> {
    if (!existsSync('src/config/auth.ts')) {
      appendFileSync('src/config/auth.ts', this.createAuthConfig.execute());
    } else {
      truncateSync('src/config/auth.ts');
      appendFileSync('src/config/auth.ts', this.createAuthConfig.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- auth.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/config/cors.ts')) {
      appendFileSync('src/config/cors.ts', this.createCorsConfig.execute());
    } else {
      truncateSync('src/config/cors.ts');
      appendFileSync('src/config/cors.ts', this.createCorsConfig.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- cors.ts ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
