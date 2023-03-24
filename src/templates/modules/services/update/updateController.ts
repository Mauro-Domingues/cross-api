import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';

export class UpdateController {
  private messages: IMessagesDTO;
  private names:
    | Pick<
        IModuleNamesDTO,
        'lowerModuleName' | 'upperModuleName' | 'pluralLowerModuleName'
      >
    | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
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

import I${this.names.upperModuleName}DTO from '@modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import IObjectDTO from '@dtos/IObjectDTO';
import Update${this.names.upperModuleName}Service from './Update${this.names.upperModuleName}Service';

export default class Update${this.names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const update${this.names.upperModuleName} = container.resolve(Update${this.names.upperModuleName}Service);

    const ${this.names.lowerModuleName}Param: IObjectDTO = request.params;
    const ${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO = request.body;

    const ${this.names.lowerModuleName} = await update${this.names.upperModuleName}.execute(${this.names.lowerModuleName}Param, ${this.names.lowerModuleName}Data);

    return response.send(${this.names.lowerModuleName});
  }
}
`;
  }
}
