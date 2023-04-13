import { appendFileSync, truncateSync } from 'fs';
import { resolve } from 'path';

export class Config {
  private configBody: string;

  constructor() {
    this.configBody = `import { Messages } from './messages';
export class ConfigJson {
    messages;
    constructor() {
        this.messages = new Messages().execute();
    }
    execute() {
        console.log('');
        console.log('\\x1b[1m', '\\x1b[38;2;0;255;155m', \`➤  \${this.messages.configured}\`, '\\x1b[0m');
        console.log('');
    }
}
`;
  }

  public execute(): void {
    truncateSync(
      resolve('node_modules', 'cross-api', 'dist', 'tools', 'config.js'),
    );
    appendFileSync(
      resolve('node_modules', 'cross-api', 'dist', 'tools', 'config.js'),
      this.configBody,
    );
  }
}
