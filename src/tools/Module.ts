import { IModuleNamesDTO } from '@tools/names';
import { MakeInfra } from '@tools/makeModule/independent/infra';
import { MakeFunctionalities } from '@tools/makeModule/independent/functionalities';
import { MakeStructure } from '@tools/makeModule/independent/structure';
import { MakeUnitTests } from '@tools/makeModule/independent/unitTests';
import { MakeDependentFunctionalities } from '@tools/makeModule/dependent/funcionalities';
import { MakeDependentInfra } from '@tools/makeModule/dependent/infra';
import { MakeDependentStructure } from '@tools/makeModule/dependent/structure';
import { MakeDependentUnitTests } from '@tools/makeModule/dependent/unitTests';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class Module {
  private readonly names: IModuleNamesDTO | undefined;
  private readonly fatherNames: IModuleNamesDTO | undefined;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly makeUnitTests: MakeUnitTests;
  private readonly makeStructure: MakeStructure;
  private readonly makeInfra: MakeInfra;
  private readonly makeFunctionalities: MakeFunctionalities;
  private readonly makeDependentUnitTests: MakeDependentUnitTests;
  private readonly makeDependentStructure: MakeDependentStructure;
  private readonly makeDependentInfra: MakeDependentInfra;
  private readonly makeDependentFunctionalities: MakeDependentFunctionalities;
  public readonly key: 'makeDependentModule' | 'makeIndependentModule';

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames?: IModuleNamesDTO | undefined,
  ) {
    this.names = names;
    this.fatherNames = fatherNames;
    if (this.fatherNames) {
      this.key = 'makeDependentModule';
    } else {
      this.key = 'makeIndependentModule';
    }
    this.messages = new Messages().execute();
    this.console = new Console();

    this.makeUnitTests = new MakeUnitTests(this.names);
    this.makeStructure = new MakeStructure(this.names);
    this.makeInfra = new MakeInfra(this.names);
    this.makeFunctionalities = new MakeFunctionalities(this.names);

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

  public async makeIndependentModule() {
    await this.makeStructure.execute();
    await this.makeInfra.execute();
    await this.makeFunctionalities.execute();
    return this.makeUnitTests.execute();
  }

  public async makeDependentModule() {
    if (!this.fatherNames) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error(this.messages.moduleNotFound);
    }
    await this.makeDependentStructure.execute();
    await this.makeDependentInfra.execute();
    await this.makeDependentFunctionalities.execute();
    return this.makeDependentUnitTests.execute();
  }
}
