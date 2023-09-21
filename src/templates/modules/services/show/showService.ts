import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class ShowService {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly names: Omit<IModuleNamesDTO, 'dbModuleName'> | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
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

    return `import { injectable, inject } ${'from'} 'tsyringe';

import { AppError } ${'from'} '@shared/errors/AppError';

import { I${
      this.names.pluralUpperModuleName
    }RepositoryDTO } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { instanceToInstance } ${'from'} 'class-transformer';
import { IResponseDTO } ${'from'} '@dtos/IResponseDTO';
import { Connection } ${'from'} '@shared/typeorm';
import { Get, Route, Tags, Path } ${'from'} 'tsoa';

@Route('/${this.names.routeModuleName}')
@injectable()
export class Show${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${
      this.names.pluralUpperModuleName
    }RepositoryDTO,
  ) {}

  @Get('{id}')
  @Tags('${this.names.upperModuleName}')
  public async execute(@Path() id?: string): Promise<IResponseDTO<${
    this.names.upperModuleName
  }>> {
    const trx = Connection.mysql.createQueryRunner();

    await trx.startTransaction();
    try {
      const ${this.names.lowerModuleName} = await this.${
      this.names.pluralLowerModuleName
    }Repository.findBy({ where: { id } }, trx);

      if (!${this.names.lowerModuleName}) {
        throw new AppError('${this.names.upperModuleName} not found', 404);
      }

      if (trx.isTransactionActive) await trx.commitTransaction();

      return {
        code: 200,
        message_code: 'OK',
        message: '${this.names.upperModuleName} found successfully',
        data: instanceToInstance(${this.names.lowerModuleName}),
      };
    } catch (error: unknown) {
      if (trx.isTransactionActive) await trx.rollbackTransaction();
      throw error;
    } finally {
      if (!trx.isReleased) await trx.release();
    }
  }
}
`;
  }
}
