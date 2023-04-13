import { Messages } from '../../messages.js';
import { MakeInfra } from './infra.js';
import { MakeFunctionalities } from './functionalities.js';
import { MakeStructure } from './structure.js';
import { MakeUnitTests } from './unitTests.js';

export class MakeModule {
  messages;
  names;
  makeUnitTests;
  makeStructure;
  makeInfra;
  makeFunctionalities;
  constructor(names) {
    this.messages = new Messages().execute();
    this.names = names;
    this.makeUnitTests = new MakeUnitTests(this.names);
    this.makeStructure = new MakeStructure(this.names);
    this.makeInfra = new MakeInfra(this.names);
    this.makeFunctionalities = new MakeFunctionalities(this.names);
  }
  async execute() {
    if (!this.names) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }
    await this.makeStructure.execute();
    await this.makeInfra.execute();
    await this.makeFunctionalities.execute();
    await this.makeUnitTests.execute();
    return console.log(
      '\x1b[38;2;255;255;0m',
      `- ${this.names.lowerModuleName}Module ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
