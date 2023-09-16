import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class UpdateService {
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

import { ICacheProviderDTO } ${'from'} '@shared/container/providers/CacheProvider/models/ICacheProvider';

import { I${
      this.names.pluralUpperModuleName
    }RepositoryDTO } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { I${this.names.upperModuleName}DTO } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/dtos/I${this.names.upperModuleName}DTO';
import { updateAttribute } ${'from'} '@utils/mappers';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { instanceToInstance } ${'from'} 'class-transformer';
import { IResponseDTO } ${'from'} '@dtos/IResponseDTO';
import { AppDataSource } ${'from'} '@shared/typeorm/dataSource';
import { Route, Tags, Put, Body, Path } ${'from'} 'tsoa';

@Route('/${this.names.routeModuleName}')
@injectable()
export class Update${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${
      this.names.pluralUpperModuleName
    }RepositoryDTO,

    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProviderDTO,
  ) {}

  @Put('{id}')
  @Tags('${this.names.upperModuleName}')
  public async execute(
    @Body() ${this.names.lowerModuleName}Data: I${
      this.names.upperModuleName
    }DTO,
    @Path() id?: string,
  ): Promise<IResponseDTO<${this.names.upperModuleName}>> {
    const trx = AppDataSource.createQueryRunner();

    await trx.startTransaction();
    try {
      const ${this.names.lowerModuleName} = await this.${
      this.names.pluralLowerModuleName
    }Repository.findBy({ where: { id } }, trx);

      if (!${this.names.lowerModuleName}) {
        throw new AppError('${this.names.upperModuleName} not found', 404);
      }

      await this.${this.names.pluralLowerModuleName}Repository.update(
        updateAttribute(${this.names.lowerModuleName}, ${
      this.names.lowerModuleName
    }Data),
        trx,
      );

      await this.cacheProvider.invalidatePrefix('${
        this.names.pluralLowerModuleName
      }');
      await trx.commitTransaction();

      return {
        code: 200,
        message_code: 'OK',
        message: 'successfully updated ${this.names.lowerModuleName}',
        data: instanceToInstance(${this.names.lowerModuleName}),
      };
    } catch (error: unknown) {
      await trx.rollbackTransaction();
      throw error;
    } finally {
      await trx.release();
    }
  }
}
`;
  }
}
