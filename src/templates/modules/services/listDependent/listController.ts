import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class ListDependentController {
  private messages: IMessagesDTO;
  private console: Console;
  private names:
    | Pick<IModuleNamesDTO, 'upperModuleName' | 'pluralLowerModuleName'>
    | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
  }

  public execute(): string {
    if (!this.names) {
      this.console.one(
        [this.messages.moduleNotFound, 'red', true, false, false],
      );
      throw new Error();
    }

    return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { List${this.names.upperModuleName}Service } from './List${this.names.upperModuleName}Service';

export class List${this.names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const list${this.names.upperModuleName} = container.resolve(List${this.names.upperModuleName}Service);

    const { page = 1, limit = 20 } = request.query;

    const ${this.names.pluralLowerModuleName} = await list${this.names.upperModuleName}.execute(Number(page), Number(limit));

    return response.send(${this.names.pluralLowerModuleName});
  }
}
`;
  }
}
