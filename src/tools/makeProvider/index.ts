import { Console } from '@tools/console.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { IModuleNamesDTO } from '@tools/names.js';
import { MakeDependentProvider } from './dependent/index.js';
import { MakeProvider } from './independent/index.js';

export class CreateProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly providerName: string | undefined;
  private readonly fatherNames: IModuleNamesDTO | undefined;
  private readonly makeProvider: MakeProvider;
  private readonly makeDependentProvider: MakeDependentProvider;

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
