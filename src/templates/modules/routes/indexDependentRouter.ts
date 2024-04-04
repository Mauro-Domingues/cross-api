import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateIndexDependentRoute {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'lowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.fatherNames) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return `import { ${this.fatherNames.lowerModuleName}Router } ${'from'} './${
      this.fatherNames.lowerModuleName
    }Router';
routes.use(${this.fatherNames.lowerModuleName}Router);
`;
  }
}
