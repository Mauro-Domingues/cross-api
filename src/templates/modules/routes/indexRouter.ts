import { IModuleNamesDTO } from '@tools/names';
import messages from '@tools/messages';

export class CreateIndexRoute {
  private messages: typeof messages;
  private names:
    | Pick<IModuleNamesDTO, 'lowerModuleName' | 'routeModuleName'>
    | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = messages;
    this.names = names;
  }

  public execute(): string {
    if (!this.names) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    return `import ${this.names.lowerModuleName}Router from './${this.names.lowerModuleName}Router';
routes.use('/${this.names.routeModuleName}', ${this.names.lowerModuleName}Router);
`;
  }
}
