import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Console } from '@tools/console';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';
import { Module } from '@tools/module';

export class CreateModule {
  private readonly messages: IMessageDTO;
  private readonly console: Console;
  private readonly module: Module;

  public constructor(
    private readonly names: IModuleNameDTO | undefined,
    private readonly fatherNames: IModuleNameDTO | undefined,
  ) {
    this.module = new Module(this.names, this.fatherNames);
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): void {
    if (!this.names) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }
    this.module[this.module.key]();
    return this.console.execute({
      message: [
        '- ',
        this.names.lowerModuleName.concat('Module'),
        ' ',
        this.messages.comands.description.created,
      ],
      color: 'yellow',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }
}
