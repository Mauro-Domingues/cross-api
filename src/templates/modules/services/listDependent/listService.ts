import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class ListDependentService {
  private messages: IMessagesDTO;
  private console: Console;
  private names:
    | Pick<
        IModuleNamesDTO,
        'upperModuleName' | 'pluralLowerModuleName' | 'pluralUpperModuleName'
      >
    | undefined;
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
    this.fatherNames = fatherNames;
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

    return `import { injectable, inject } from 'tsyringe';

import { I${this.names.pluralUpperModuleName}RepositoryDTO } from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { ICacheProviderDTO } from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { ${this.names.upperModuleName} } from '@modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import { ICacheDTO } from '@dtos/ICacheDTO';
import { IListDTO } from '@dtos/IListDTO';
import { AppDataSource } from '@shared/typeorm/dataSource';

@injectable()
export class List${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}RepositoryDTO,

    @inject('CacheProvider')
    private cacheProvider: ICacheProviderDTO,
  ) {}

  public async execute(page: number, limit: number): Promise<IListDTO<${this.names.upperModuleName}>> {
    const trx = AppDataSource.createQueryRunner();

    await trx.startTransaction();
    try {
      const cacheKey = \`${this.names.pluralLowerModuleName}:\${page}:\${limit}\`;

      let cache = await this.cacheProvider.recovery<ICacheDTO<${this.names.upperModuleName}>>(cacheKey);

      if (!cache) {
        const { list, amount } = await this.${this.names.pluralLowerModuleName}Repository.findAll(trx, page, limit);
        cache = { data: instanceToInstance(list), total: amount };
        await this.cacheProvider.save(cacheKey, cache);
      }

      await trx.commitTransaction();

      return {
        code: 200,
        message_code: 'OK',
        message: '${this.names.pluralUpperModuleName} found successfully',
        pagination: {
          total: cache.total,
          page,
          perPage: limit,
          lastPage: cache.total % limit,
        },
        data: cache.data,
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
