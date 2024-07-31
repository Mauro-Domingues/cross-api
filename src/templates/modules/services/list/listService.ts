import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class ListService {
  private readonly messages: IMessageDTO;

  public constructor(
    private readonly names:
      | Omit<IModuleNameDTO, 'lowerModuleName' | 'dbModuleName'>
      | undefined,
  ) {
    this.messages = Messages.getInstance().execute();
  }

  public execute(): string {
    if (!this.names) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return `import { injectable, inject } ${'from'} 'tsyringe';
import { I${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { ICacheProvider } ${'from'} '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { instanceToInstance } ${'from'} 'class-transformer';
import { ICacheDTO } ${'from'} '@dtos/ICacheDTO';
import { IListDTO } ${'from'} '@dtos/IListDTO';
import { IConnection } ${'from'} '@shared/typeorm';
import { FindOptionsWhere } ${'from'} 'typeorm';
import { Get, Route, Tags, Query, Inject } ${'from'} 'tsoa';

@Route('/${this.names.routeModuleName}')
@injectable()
export class List${this.names.upperModuleName}Service {
  public constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${
      this.names.pluralUpperModuleName
    }Repository,

    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProvider,

    @inject('Connection')
    private readonly connection: IConnection,
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
