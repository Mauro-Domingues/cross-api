import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class ListDependentController {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly names:
      | Pick<IModuleNamesDTO, 'upperModuleName' | 'pluralLowerModuleName'>
      | undefined,
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
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

    return `import { Request, Response } ${'from'} 'express';
import { container } ${'from'} 'tsyringe';

import { FindOptionsWhere } ${'from'} 'typeorm';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { IListDTO } ${'from'} '@dtos/IListDTO';
import { List${this.names.upperModuleName}Service } ${'from'} './List${
      this.names.upperModuleName
    }Service';

export class List${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<
      never,
      never,
      never,
      { page: number; limit: number } & FindOptionsWhere<${
        this.names.upperModuleName
      }>
    >,
    response: Response<IListDTO<${this.names.upperModuleName}>>,
  ) {
    const list${this.names.upperModuleName} = container.resolve(List${
      this.names.upperModuleName
    }Service);

    const { page = 1, limit = 20, ...filters } = request.query;

    const ${this.names.pluralLowerModuleName} = await list${
      this.names.upperModuleName
    }.execute(page, limit, filters);

    return response.status(${this.names.pluralLowerModuleName}.code).send(${
      this.names.pluralLowerModuleName
    });
  }
}
`;
  }
}
