import { IModuleNamesDTO } from '@tools/names';
import { Module } from '@tools/module';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateModule {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly module: Module;

  public constructor(
    private readonly names: IModuleNamesDTO | undefined,
    private readonly fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.module = new Module(this.names, this.fatherNames);
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): void {
    if (!this.names) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }
    this.module[this.module.key]();
    return this.console.single({
      message: `- ${this.names.lowerModuleName}Module ${this.messages.created}`,
      color: 'yellow',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }
}
