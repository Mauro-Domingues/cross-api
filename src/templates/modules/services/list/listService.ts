import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class ListService extends BaseTemplateModule {
  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'dbModuleName'>,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { instanceToInstance } fr\om 'class-transformer';
import { Get, Route, Tags, Query, Inject } fr\om 'tsoa';
import { injectable, inject } fr\om 'tsyringe';
import type { ICacheDTO } fr\om '@dtos/ICacheDTO';
import type { IListDTO } fr\om '@dtos/IListDTO';
import type { ${this.names.upperModuleName} } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import type { I${this.names.pluralUpperModuleName}Repository } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import type { ICacheProvider } fr\om '@shared/container/providers/CacheProvider/models/ICacheProvider';
import type { IConnection } fr\om '@shared/typeorm';

@Route('/${this.names.routeModuleName}')
@injectable()
export class List${this.names.upperModuleName}Service {
  public constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private readonly ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProvider,
  ) {}

  @Get()
  @Tags('${this.names.upperModuleName}')
  public async execute(
    @Inject() connection: IConnection,
    @Query() page: number,
    @Query() limit: number,
    @Inject() filters: Partial<${this.names.upperModuleName}>,
  ): Promise<IListDTO<${this.names.upperModuleName}>> {
    const trx = connection.mysql.createQueryRunner();

    await trx.startTransaction();
    try {
      const cacheKey = \`\${
        connection.client
      }:${this.names.pluralLowerModuleName}:\${page}:\${limit}:\${JSON.stringify(filters)}\`;

      let cache = await this.cacheProvider.recovery<ICacheDTO<${this.names.upperModuleName}>>(cacheKey);

      if (!cache) {
        const { list, amount } = await this.${this.names.pluralLowerModuleName}Repository.findAll(
          {
            where: filters,
            page,
            limit,
            select: { id: true, name: true },
          },
          trx,
        );
        cache = { data: instanceToInstance(list), total: amount };
        await this.cacheProvider.save(cacheKey, cache);
      }

      if (trx.isTransactionActive) await trx.commitTransaction();

      return {
        code: 200,
        messageCode: 'LISTED',
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
