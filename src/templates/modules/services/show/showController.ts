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

import { IResponseDTO } from '@dtos/IResponseDTO';
import { I${this.names.upperModuleName}DTO } from '@modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { Show${this.names.upperModuleName}Service } from './Show${this.names.upperModuleName}Service';

export class Show${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<I${this.names.upperModuleName}DTO>,
    response: Response<IResponseDTO<${this.names.upperModuleName}>>,
  ) {
    const show${this.names.upperModuleName} = container.resolve(Show${this.names.upperModuleName}Service);

    const { id } = request.params;

    const ${this.names.lowerModuleName} = await show${this.names.upperModuleName}.execute(id);

    return response.status(${this.names.lowerModuleName}.code).send(${this.names.lowerModuleName});
  }
}
`;
  }
}
