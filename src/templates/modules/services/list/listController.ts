import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class ListController {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Pick<IModuleNamesDTO, 'upperModuleName' | 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    return `import { Request, Response } ${'from'} 'express';
import { container } ${'from'} 'tsyringe';
import { FindOptionsWhere } ${'from'} 'typeorm';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
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
