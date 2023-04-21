import { appendFileSync, truncateSync } from 'fs';
import { resolve } from 'path';

export class Config {
  configBody;
  constructor() {
    this.configBody = `import { Messages } from './messages.js';
import { Console } from './console.js';

export class ConfigJson {
  messages;
  console;
  constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
  }
  execute() {
    this.console.one([this.messages.configured, 'green', true, true, true]);
  }
}
`;
  }
  execute() {
    truncateSync(
      resolve('node_modules', 'cross-api', 'dist', 'tools', 'config.js'),
    );
    appendFileSync(
      resolve('node_modules', 'cross-api', 'dist', 'tools', 'config.js'),
      this.configBody,
    );
  }
}
