import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Concat } from '@tools/concat';
import { Console } from '@tools/console';
import { CustomError } from '@tools/customError';
import { CreateDependentModule } from '@tools/makeModule/dependent/index';
import { CreateIndependentModule } from '@tools/makeModule/independent/index';
import { Messages } from '@tools/messages';

export class CreateModule {
  private readonly createIndependentModule: CreateIndependentModule;
  private readonly createDependentModule: CreateDependentModule;
  private readonly messages: IMessageDTO;
  private readonly console: Console;
  private readonly concat: Concat;

  public constructor(
    private readonly names: IModuleNameDTO,
    private readonly fatherNames: IModuleNameDTO | undefined,
  ) {
    this.messages = Messages.getInstance().execute();

    if (!this.names) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    this.createIndependentModule = new CreateIndependentModule(this.names);
    this.createDependentModule = new CreateDependentModule(
      this.names,
      this.fatherNames,
    );
    this.console = Console.getInstance();
    this.concat = Concat.getInstance();
  }

  private createMessage(names: Pick<IModuleNameDTO, 'lowerModuleName'>): void {
    return this.console.execute({
      message: [
        '- ',
        this.concat.execute(names.lowerModuleName, 'Module'),
        ' ',
        this.messages.comands.description.created,
      ],
      color: 'yellow',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }

  public execute(): void {
    if (this.names && this.fatherNames) {
      this.createDependentModule.execute();
      return this.createMessage(this.names);
    }
    this.createIndependentModule.execute();
    return this.createMessage(this.names);
  }
}
