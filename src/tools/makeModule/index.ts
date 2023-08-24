import { IModuleNamesDTO } from '@tools/names';
import { MakeDependentModule } from './dependent/index';
import { MakeModule } from './independent/index';

export class CreateModule {
  private readonly names: IModuleNamesDTO | undefined;
  private readonly fatherNames: IModuleNamesDTO | undefined;
  private readonly makeModule: MakeModule;
  private readonly makeDependentModule: MakeDependentModule;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.names = names;
    this.fatherNames = fatherNames;
    this.makeModule = new MakeModule(this.names);
    this.makeDependentModule = new MakeDependentModule(
      this.names,
      this.fatherNames,
    );
  }

  public async execute(): Promise<void> {
    if (this.names && this.fatherNames) {
      await this.makeDependentModule.execute();
    } else if (this.names) {
      await this.makeModule.execute();
    }
  }
}
