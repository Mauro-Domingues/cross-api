import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class ShowController {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly names:
    | Pick<
        IModuleNamesDTO,
        'lowerModuleName' | 'pluralLowerModuleName' | 'upperModuleName'
      >
    | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
  }

  public execute(): string {
    if (!this.names) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    return `import { ${this.names.upperModuleName} } from '@modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindOptionsWhere } from 'typeorm';

import { Show${this.names.upperModuleName}Service } from './Show${this.names.upperModuleName}Service';

export class Show${this.names.upperModuleName}Controller {
  public async handle(request: Request, response: Response) {
    const show${this.names.upperModuleName} = container.resolve(Show${this.names.upperModuleName}Service);

    const ${this.names.lowerModuleName}Param: FindOptionsWhere<${this.names.upperModuleName}> = request.params;

    const ${this.names.lowerModuleName} = await show${this.names.upperModuleName}.execute(${this.names.lowerModuleName}Param);

    return response.send(${this.names.lowerModuleName});
  }
}
`;
  }
}
