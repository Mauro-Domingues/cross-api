import { Console } from '@tools/console';
import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { MakeDependentFunctionalities } from './funcionalities';
import { MakeDependentInfra } from './infra';
import { MakeDependentStructure } from './structure';
import { MakeDependentUnitTests } from './unitTests';

export class MakeDependentModule {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly names: IModuleNamesDTO | undefined;
  private readonly fatherNames: IModuleNamesDTO | undefined;
  private readonly makeDependentUnitTests: MakeDependentUnitTests;
  private readonly makeDependentStructure: MakeDependentStructure;
  private readonly makeDependentInfra: MakeDependentInfra;
  private readonly makeDependentFunctionalities: MakeDependentFunctionalities;

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
