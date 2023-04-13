import { Messages } from '../../../tools/messages.js';

export class CreateIndexDependentRoute {
  messages;
  fatherNames;
  constructor(fatherNames) {
    this.messages = new Messages().execute();
    this.fatherNames = fatherNames;
  }
  execute() {
    if (!this.fatherNames) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }
    return `import { ${this.fatherNames.lowerModuleName}Router } from './${this.fatherNames.lowerModuleName}Router';
routes.use('/', ${this.fatherNames.lowerModuleName}Router);
`;
  }
}
