import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class ListDependentService {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly names:
      | Omit<IModuleNamesDTO, 'lowerModuleName' | 'dbModuleName'>
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

    return `import { injectable, inject } ${'from'} 'tsyringe';

import { I${
      this.names.pluralUpperModuleName
    }RepositoryDTO } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { ICacheProviderDTO } ${'from'} '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { instanceToInstance } ${'from'} 'class-transformer';
import { ICacheDTO } ${'from'} '@dtos/ICacheDTO';
import { IListDTO } ${'from'} '@dtos/IListDTO';
import { Connection } ${'from'} '@shared/typeorm';
import { FindOptionsWhere } ${'from'} 'typeorm';
import { Get, Route, Tags, Query, Inject } ${'from'} 'tsoa';

@Route('/${this.names.routeModuleName}')
@injectable()
export class List${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${
      this.names.pluralUpperModuleName
    }RepositoryDTO,

    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProviderDTO,
  ) {}

  @Get()
  @Tags('${this.names.upperModuleName}')
  public async execute(
    @Query() page: number,
    @Query() limit: number,
    @Inject() filters: FindOptionsWhere<${this.names.upperModuleName}>,
  ): Promise<IListDTO<${this.names.upperModuleName}>> {
    const trx = Connection.mysql.createQueryRunner();

    await trx.startTransaction();
    try {
      const cacheKey = \`\${
        Connection.client
      }:${
        this.names.pluralLowerModuleName
      }:\${page}:\${limit}:\${JSON.stringify(filters)}\`;

      let cache = await this.cacheProvider.recovery<ICacheDTO<${
        this.names.upperModuleName
      }>>(cacheKey);

      if (!cache) {
        const { list, amount } = await this.${
          this.names.pluralLowerModuleName
        }Repository.findAll(
          { where: filters, page, limit },
          trx,
        );
        cache = { data: instanceToInstance(list), total: amount };
        await this.cacheProvider.save(cacheKey, cache);
      }

      if (trx.isTransactionActive) await trx.commitTransaction();

      return {
        code: 200,
        message_code: 'OK',
        message: '${this.names.pluralUpperModuleName} found successfully',
        pagination: {
          total: cache.total,
          page,
          perPage: limit,
          lastPage: Math.ceil(cache.total / limit),
        },
        data: cache.data,
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
