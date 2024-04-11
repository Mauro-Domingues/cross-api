import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Console } from '@tools/console';
import { MakeDependentFunctionalities } from '@tools/makeModule/dependent/funcionalities';
import { MakeDependentInfra } from '@tools/makeModule/dependent/infra';
import { MakeDependentStructure } from '@tools/makeModule/dependent/structure';
import { MakeDependentUnitTests } from '@tools/makeModule/dependent/unitTests';
import { MakeFunctionalities } from '@tools/makeModule/independent/functionalities';
import { MakeInfra } from '@tools/makeModule/independent/infra';
import { MakeStructure } from '@tools/makeModule/independent/structure';
import { MakeUnitTests } from '@tools/makeModule/independent/unitTests';
import { Messages } from '@tools/messages';

export class Module {
  private readonly makeDependentFunctionalities: MakeDependentFunctionalities;
  public readonly key: 'makeDependentModule' | 'makeIndependentModule';
  private readonly makeDependentUnitTests: MakeDependentUnitTests;
  private readonly makeDependentStructure: MakeDependentStructure;
  private readonly makeFunctionalities: MakeFunctionalities;
  private readonly makeDependentInfra: MakeDependentInfra;
  private readonly makeUnitTests: MakeUnitTests;
  private readonly makeStructure: MakeStructure;
  private readonly messages: IMessageDTO;
  private readonly makeInfra: MakeInfra;
  private readonly console: Console;

  public constructor(
    private readonly names: IModuleNameDTO | undefined,
    private readonly fatherNames: IModuleNameDTO | undefined,
  ) {
    if (this.fatherNames) {
      this.key = 'makeDependentModule';
    } else {
      this.key = 'makeIndependentModule';
    }

    this.makeDependentFunctionalities = new MakeDependentFunctionalities(
      this.names,
      this.fatherNames,
    );
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
    this.makeFunctionalities = new MakeFunctionalities(this.names);
    this.makeStructure = new MakeStructure(this.names);
    this.makeUnitTests = new MakeUnitTests(this.names);
    this.makeInfra = new MakeInfra(this.names);
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public makeIndependentModule(): void {
    this.makeStructure.execute();
    this.makeInfra.execute();
    this.makeFunctionalities.execute();
    return this.makeUnitTests.execute();
  }

  public makeDependentModule(): void {
    if (!this.fatherNames) {
      throw this.console.single({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }
    this.makeDependentStructure.execute();
    this.makeDependentInfra.execute();
    this.makeDependentFunctionalities.execute();
    return this.makeDependentUnitTests.execute();
  }
}
