import { Messages } from '../../../../tools/messages.js';
import { Console } from '../../../../tools/console.js';
export class DeleteDependentController {
    messages;
    console;
    names;
    fatherNames;
    constructor(names, fatherNames) {
        this.messages = new Messages().execute();
        this.console = new Console();
        this.names = names;
        this.names = names;
        this.fatherNames = fatherNames;
    }
    execute() {
        if (!this.names || !this.fatherNames) {
            this.console.one([
                this.messages.moduleNotFound,
                'red',
                true,
                false,
                false,
            ]);
            throw new Error();
        }
        return `import { ${this.names.upperModuleName} } from '@modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindOptionsWhere } from 'typeorm';

import { IResponseDTO } from '@dtos/IResponseDTO';
import { Delete${this.names.upperModuleName}Service } from './Delete${this.names.upperModuleName}Service';

export class Delete${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<FindOptionsWhere<${this.names.upperModuleName}>>,
    response: Response<IResponseDTO<null>>,
  ) {
    const delete${this.names.upperModuleName} = container.resolve(Delete${this.names.upperModuleName}Service);

    const ${this.names.lowerModuleName}Param = request.params;

    const ${this.names.lowerModuleName} = await delete${this.names.upperModuleName}.execute(${this.names.lowerModuleName}Param);

    return response.send(${this.names.lowerModuleName});
  }
}
`;
    }
}
