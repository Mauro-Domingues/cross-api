import { Messages } from '../../../tools/messages.js';

export class CreateIndexRoute {
  messages;
  names;
  constructor(names) {
    this.messages = new Messages().execute();
    this.names = names;
  }
  execute() {
    if (!this.names) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }
    return `import { ${this.names.lowerModuleName}Router } from './${this.names.lowerModuleName}Router';
routes.use('/', ${this.names.lowerModuleName}Router);
`;
  }
}
