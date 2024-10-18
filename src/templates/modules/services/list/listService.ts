import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class ListService extends BaseTemplateModule {
  public constructor(
    protected readonly names: Omit<IModuleNameDTO, 'dbModuleName'>,
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { injectable, inject } ${'from'} 'tsyringe';
import { I${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { ICacheProvider } ${'from'} '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
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
