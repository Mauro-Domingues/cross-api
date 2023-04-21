import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateIndexDependentRoute {
  private messages: IMessagesDTO;
  private console: Console;
  private fatherNames: Pick<IModuleNamesDTO, 'lowerModuleName'> | undefined;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    if (!this.fatherNames) {
      this.console.one(
        [this.messages.moduleNotFound, 'red', true, false, false],
      );
      throw new Error();
    }

    return `import { ${this.fatherNames.lowerModuleName}Router } from './${this.fatherNames.lowerModuleName}Router';
routes.use('/', ${this.fatherNames.lowerModuleName}Router);
`;
  }
}
