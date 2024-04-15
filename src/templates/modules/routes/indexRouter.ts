import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Console } from '@tools/console';
import { Messages } from '@tools/messages';

export class CreateIndexRoute {
  private readonly messages: IMessageDTO;
  private readonly console: Console;

  public constructor(
    private readonly names: Pick<IModuleNameDTO, 'lowerModuleName'> | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names) {
      throw this.console.execute({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return `import { ${this.names.lowerModuleName}Router } ${'from'} './${
      this.names.lowerModuleName
    }Router';
routes.use(${this.names.lowerModuleName}Router);
`;
  }
}
