import { IModuleNamesDTO } from '@tools/names';
import messages from '@tools/messages';

export class ListController {
  private messages: typeof messages;
  private names:
    | Pick<IModuleNamesDTO, 'upperModuleName' | 'pluralLowerModuleName'>
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

    return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import List${this.names.upperModuleName}Service from './List${this.names.upperModuleName}Service';

export default class List${this.names.upperModuleName}Controller {
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
