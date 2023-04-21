import { Messages } from '../../../tools/messages.js';
import { Console } from '../../../tools/console.js';

export class CreateIndexRoute {
  messages;
  console;
  names;
  constructor(names) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
  }
  execute() {
    if (!this.names) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }
    return `import { ${this.names.lowerModuleName}Router } from './${this.names.lowerModuleName}Router';
routes.use('/', ${this.names.lowerModuleName}Router);
`;
  }
}
