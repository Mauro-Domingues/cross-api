import { IModuleNamesDTO } from '@tools/names.js';
import { MakeDependentModule } from './dependent/index.js';
import { MakeModule } from './independent/index.js';

export class CreateModule {
  private names: IModuleNamesDTO | undefined;
  private fatherNames: IModuleNamesDTO | undefined;
  private makeModule: MakeModule;
  private makeDependentModule: MakeDependentModule;

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
      this.makeDependentModule.execute();
    } else if (this.names) {
      this.makeModule.execute();
    }
  }
}
