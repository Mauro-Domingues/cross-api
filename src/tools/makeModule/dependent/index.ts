import { Console } from '@tools/console.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { IModuleNamesDTO } from '@tools/names.js';
import { MakeDependentFunctionalities } from './funcionalities.js';
import { MakeDependentInfra } from './infra.js';
import { MakeDependentStructure } from './structure.js';
import { MakeDependentUnitTests } from './unitTests.js';

export class MakeDependentModule {
  private messages: IMessagesDTO;
  private console: Console;
  private names: IModuleNamesDTO | undefined;
  private fatherNames: IModuleNamesDTO | undefined;
  private makeDependentUnitTests: MakeDependentUnitTests;
  private makeDependentStructure: MakeDependentStructure;
  private makeDependentInfra: MakeDependentInfra;
  private makeDependentFunctionalities: MakeDependentFunctionalities;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
    this.fatherNames = fatherNames;
    this.makeDependentUnitTests = new MakeDependentUnitTests(
      this.names,
      this.fatherNames,
    );
    this.makeDependentStructure = new MakeDependentStructure(
      this.names,
      this.fatherNames,
    );
    this.makeDependentInfra = new MakeDependentInfra(
      this.names,
      this.fatherNames,
    );
    this.makeDependentFunctionalities = new MakeDependentFunctionalities(
      this.names,
      this.fatherNames,
    );
  }

  public async execute(): Promise<void> {
    if (!this.names || !this.fatherNames) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    await this.makeDependentStructure.execute();
    await this.makeDependentInfra.execute();
    await this.makeDependentFunctionalities.execute();
    await this.makeDependentUnitTests.execute();

    return this.console.one([
      `- ${this.names.lowerModuleName}Module ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
