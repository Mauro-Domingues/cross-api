import { IModuleNamesDTO } from '@tools/names';
import { Module } from '@tools/Module';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateModule {
  private readonly names: IModuleNamesDTO | undefined;
  private readonly fatherNames: IModuleNamesDTO | undefined;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly module: Module;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.names = names;
    this.fatherNames = fatherNames;
    this.messages = new Messages().execute();
    this.console = new Console();
    this.module = new Module(this.names, this.fatherNames);
  }

  public async execute(): Promise<void> {
    if (!this.names) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error(this.messages.moduleNotFound);
    }
    await this.module[this.module.key]();
    return this.console.one([
      `- ${this.names.lowerModuleName}Module ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
