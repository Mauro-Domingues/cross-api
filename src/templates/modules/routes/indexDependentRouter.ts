import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';

export class CreateIndexDependentRoute {
  private messages: IMessagesDTO;
  private fatherNames:
    | Pick<IModuleNamesDTO, 'lowerModuleName' | 'routeModuleName'>
    | undefined;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    if (!this.fatherNames) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    return `import ${this.fatherNames.lowerModuleName}Router from './${this.fatherNames.lowerModuleName}Router';
routes.use('/${this.fatherNames.routeModuleName}', ${this.fatherNames.lowerModuleName}Router);
`;
  }
}
