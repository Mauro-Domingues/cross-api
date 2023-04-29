import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class DeleteController {
  private messages: IMessagesDTO;
  private console: Console;
  private names:
    | Pick<
        IModuleNamesDTO,
        'pluralLowerModuleName' | 'lowerModuleName' | 'upperModuleName'
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

import { Delete${this.names.upperModuleName}Service } from './Delete${this.names.upperModuleName}Service';

export class Delete${this.names.upperModuleName}Controller {
  public async handle(request: Request, response: Response) {
    const delete${this.names.upperModuleName} = container.resolve(Delete${this.names.upperModuleName}Service);

    const ${this.names.lowerModuleName}Param: FindOptionsWhere<${this.names.upperModuleName}> = request.params;

    const ${this.names.lowerModuleName} = await delete${this.names.upperModuleName}.execute(${this.names.lowerModuleName}Param);

    return response.send(${this.names.lowerModuleName});
  }
}
`;
  }
}
