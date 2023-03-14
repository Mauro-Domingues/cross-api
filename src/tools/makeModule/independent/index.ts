import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { MakeInfra } from './infra';
import { MakeFunctionalities } from './functionalities';
import { MakeStructure } from './structure';
import { MakeUnitTests } from './unitTests';

export class MakeModule {
  private messages: typeof messages;
  private names: IModuleNamesDTO | undefined;
  private makeUnitTests: MakeUnitTests;
  private makeStructure: MakeStructure;
  private makeInfra: MakeInfra;
  private makeFunctionalities: MakeFunctionalities;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = messages;
    this.names = names;
    this.makeUnitTests = new MakeUnitTests(this.names);
    this.makeStructure = new MakeStructure(this.names);
    this.makeInfra = new MakeInfra(this.names);
    this.makeFunctionalities = new MakeFunctionalities(this.names);
  }

  public async execute(): Promise<void> {
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
