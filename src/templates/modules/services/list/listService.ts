import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class ListService {
  private messages: IMessagesDTO;
  private console: Console;
  private names:
    | Pick<
        IModuleNamesDTO,
        'upperModuleName' | 'pluralLowerModuleName' | 'pluralUpperModuleName'
      >
    | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
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

    return `import { injectable, inject } from 'tsyringe';

import { I${this.names.pluralUpperModuleName}RepositoryDTO } from '@modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { ICacheProviderDTO } from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { ${this.names.upperModuleName} } from '@modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import { ICacheDTO } from '@dtos/ICacheDTO';
import { IListDTO } from '@dtos/IListDTO';

@injectable()
export class List${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}RepositoryDTO,

    @inject('CacheProvider')
    private cacheProvider: ICacheProviderDTO,
  ) {}

  async execute(page: number, limit: number): Promise<IListDTO<${this.names.upperModuleName}>> {
    const cacheKey = \`${this.names.pluralLowerModuleName}:\${page}:\${limit}\`;

    let cache = await this.cacheProvider.recovery<ICacheDTO<${this.names.upperModuleName}>>(cacheKey);

    if (!cache) {
      const { ${this.names.pluralLowerModuleName}, amount } = await this.${this.names.pluralLowerModuleName}Repository.findAll(page, limit);
      cache = { data: instanceToInstance(${this.names.pluralLowerModuleName}), total: amount };
      await this.cacheProvider.save(cacheKey, cache);
    }

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
  }
}
`;
  }
}
