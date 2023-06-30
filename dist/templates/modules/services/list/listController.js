import { Messages } from '../../../../tools/messages.js';
import { Console } from '../../../../tools/console.js';
export class ListController {
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
        return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindOptionsWhere } from 'typeorm';
import { ${this.names.upperModuleName} } from '@modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { IListDTO } from '@dtos/IListDTO';
import { List${this.names.upperModuleName}Service } from './List${this.names.upperModuleName}Service';

export class List${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<
      never,
      never,
      never,
      { page: number; limit: number } & FindOptionsWhere<${this.names.upperModuleName}>
    >,
    response: Response<IListDTO<${this.names.upperModuleName}>>,
  ) {
    const list${this.names.upperModuleName} = container.resolve(List${this.names.upperModuleName}Service);

    const { page = 1, limit = 20, ...filters } = request.query;

    const ${this.names.pluralLowerModuleName} = await list${this.names.upperModuleName}.execute(page, limit, filters);

    return response.send(${this.names.pluralLowerModuleName});
  }
}
`;
    }
}
