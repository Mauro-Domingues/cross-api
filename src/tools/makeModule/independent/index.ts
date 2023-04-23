import { IMessagesDTO, Messages } from '@tools/messages.js';
import { IModuleNamesDTO } from '@tools/names.js';
import { Console } from '@tools/console.js';
import { MakeInfra } from './infra.js';
import { MakeFunctionalities } from './functionalities.js';
import { MakeStructure } from './structure.js';
import { MakeUnitTests } from './unitTests.js';

export class MakeModule {
  private messages: IMessagesDTO;
  private console: Console;
  private names: IModuleNamesDTO | undefined;
  private makeUnitTests: MakeUnitTests;
  private makeStructure: MakeStructure;
  private makeInfra: MakeInfra;
  private makeFunctionalities: MakeFunctionalities;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
    this.makeUnitTests = new MakeUnitTests(this.names);
    this.makeStructure = new MakeStructure(this.names);
    this.makeInfra = new MakeInfra(this.names);
    this.makeFunctionalities = new MakeFunctionalities(this.names);
  }

  public async execute(): Promise<void> {
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
