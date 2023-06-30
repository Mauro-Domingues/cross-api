import { Messages } from '../../../../tools/messages.js';
import { Console } from '../../../../tools/console.js';
export class ShowController {
    messages;
    console;
    names;
    constructor(names) {
        this.messages = new Messages().execute();
        this.console = new Console();
        this.names = names;
    }
    execute() {
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

import { IResponseDTO } from '@dtos/IResponseDTO';
import { Show${this.names.upperModuleName}Service } from './Show${this.names.upperModuleName}Service';

export class Show${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<FindOptionsWhere<${this.names.upperModuleName}>>,
    response: Response<IResponseDTO<${this.names.upperModuleName}>>,
  ) {
    const show${this.names.upperModuleName} = container.resolve(Show${this.names.upperModuleName}Service);

    const ${this.names.lowerModuleName}Param = request.params;

    const ${this.names.lowerModuleName} = await show${this.names.upperModuleName}.execute(${this.names.lowerModuleName}Param);

    return response.send(${this.names.lowerModuleName});
  }
}
`;
    }
}
