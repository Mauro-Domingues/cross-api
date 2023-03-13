import { appendFile, existsSync, truncate } from 'fs';
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
      appendFile(
        'src/config/auth.ts',
        this.createAuthConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/config/auth.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/config/auth.ts',
        this.createAuthConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- auth.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/config/cors.ts')) {
      appendFile(
        'src/config/cors.ts',
        this.createCorsConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/config/cors.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/config/cors.ts',
        this.createCorsConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- cors.ts ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
