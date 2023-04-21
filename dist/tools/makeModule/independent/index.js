import { Messages } from '../../messages.js';
import { Console } from '../../console.js';
import { MakeInfra } from './infra.js';
import { MakeFunctionalities } from './functionalities.js';
import { MakeStructure } from './structure.js';
import { MakeUnitTests } from './unitTests.js';

export class MakeModule {
  messages;
  console;
  names;
  makeUnitTests;
  makeStructure;
  makeInfra;
  makeFunctionalities;
  constructor(names) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
    this.makeUnitTests = new MakeUnitTests(this.names);
    this.makeStructure = new MakeStructure(this.names);
    this.makeInfra = new MakeInfra(this.names);
    this.makeFunctionalities = new MakeFunctionalities(this.names);
  }
  async execute() {
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
    await this.makeStructure.execute();
    await this.makeInfra.execute();
    await this.makeFunctionalities.execute();
    await this.makeUnitTests.execute();
    return this.console.one([
      `- ${this.names.lowerModuleName}Module ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
