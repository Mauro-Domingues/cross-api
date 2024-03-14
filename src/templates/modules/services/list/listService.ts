import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class ListService {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Omit<IModuleNamesDTO, 'lowerModuleName' | 'dbModuleName'>
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

    return `import { injectable, inject } ${'from'} 'tsyringe';
import { I${
      this.names.pluralUpperModuleName
    }RepositoryDTO } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { ICacheProviderDTO } ${'from'} '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { instanceToInstance } ${'from'} 'class-transformer';
import { ICacheDTO } ${'from'} '@dtos/ICacheDTO';
import { IListDTO } ${'from'} '@dtos/IListDTO';
import { IConnectionDTO } ${'from'} '@shared/typeorm';
import { FindOptionsWhere } ${'from'} 'typeorm';
import { Get, Route, Tags, Query, Inject } ${'from'} 'tsoa';

@Route('/${this.names.routeModuleName}')
@injectable()
export class List${this.names.upperModuleName}Service {
  public constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${
      this.names.pluralUpperModuleName
    }RepositoryDTO,

    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProviderDTO,

    @inject('Connection')
    private readonly connection: IConnectionDTO,
  ) {}

  @Get()
  @Tags('${this.names.upperModuleName}')
  public async execute(
    @Query() page: number,
    @Query() limit: number,
    @Inject() filters: FindOptionsWhere<${this.names.upperModuleName}>,
  ): Promise<IListDTO<${this.names.upperModuleName}>> {
    const trx = this.connection.mysql.createQueryRunner();

    await trx.startTransaction();
    try {
      const cacheKey = \`\${
        this.connection.client
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
        message_code: 'LISTED',
        message: 'Successfully listed ${this.names.pluralLowerModuleName}',
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
