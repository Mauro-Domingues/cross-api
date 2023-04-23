import { Messages } from '../../../../tools/messages.js';
import { Console } from '../../../../tools/console.js';
export class CreateController {
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
        return `import { I${this.names.upperModuleName}DTO } from '@modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { Create${this.names.upperModuleName}Service } from './Create${this.names.upperModuleName}Service';

export class Create${this.names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const ${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO = request.body;

    const create${this.names.upperModuleName} = container.resolve(Create${this.names.upperModuleName}Service);

    const ${this.names.lowerModuleName} = await create${this.names.upperModuleName}.execute(${this.names.lowerModuleName}Data);

    return response.send(${this.names.lowerModuleName});
  }
}
`;
    }
}
