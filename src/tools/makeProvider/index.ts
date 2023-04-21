import { Console } from '@tools/console';
import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { MakeDependentProvider } from './dependent';
import { MakeProvider } from './independent';

export class CreateProvider {
  private messages: IMessagesDTO;
  private console: Console;
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
    this.messages = new Messages().execute();
    this.console = new Console();
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
      this.console.one([
        this.messages.providerNotFound,
        'red',
        true,
        false,
        false,
      ]);
    }
  }
}
