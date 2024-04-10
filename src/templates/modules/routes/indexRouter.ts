import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Messages } from '@tools/messages';
import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Console } from '@tools/console';

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
      throw this.console.single({
        message: this.messages.moduleNotFound,
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
