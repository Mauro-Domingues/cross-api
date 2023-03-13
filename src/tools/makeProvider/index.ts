import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { MakeDependentProvider } from './dependent';
import { MakeProvider } from './independent';

export class CreateProvider {
  private providerName: string | undefined;
  private fatherNames: IModuleNamesDTO | undefined;
  private makeProvider: MakeProvider;
  private makeDependentProvider: MakeDependentProvider;

  constructor(
    providerName: string | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.providerName = providerName;
    this.fatherNames = fatherNames;
    this.makeProvider = new MakeProvider(this.providerName);
    this.makeDependentProvider = new MakeDependentProvider(
      this.providerName,
      this.fatherNames,
    );
  }

  public async execute(): Promise<void> {
    if (this.providerName && this.fatherNames) {
      await this.makeDependentProvider.execute();
    } else if (this.providerName) {
      await this.makeProvider.execute();
    } else {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        messages.providerNotFound,
        '\x1b[0m',
      );
    }
  }
}
