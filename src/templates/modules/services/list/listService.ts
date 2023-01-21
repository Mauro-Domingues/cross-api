export default function listService(
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import { injectable, inject } from 'tsyringe';

import I${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import ${upperModuleName} from '@modules/${pluralLowerModuleName}/entities/${upperModuleName}';

@injectable()
export default class List${upperModuleName}Service {
  constructor(
    @inject('${pluralUpperModuleName}Repository')
    private ${pluralLowerModuleName}Repository: I${pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  async execute(page: number, limit: number): Promise<IListDTO<${upperModuleName}>> {
    const cacheKey = \`${pluralLowerModuleName}:\${page}:\${limit}\`;

    let cache = await this.cacheProvider.recovery<ICacheDTO<${upperModuleName}>>(cacheKey);

    if (!cache) {
      const ${pluralLowerModuleName} = await this.${pluralLowerModuleName}Repository.findAll(page, limit);
      cache = { data: ${pluralLowerModuleName}.${pluralLowerModuleName}, total: ${pluralLowerModuleName}.amount };
      await this.cacheProvider.save(cacheKey, cache);
    }

    return {
      code: 200,
      message_code: 'OK',
      message: '${pluralUpperModuleName} found successfully',
      data: {
        total: cache.total,
        page,
        perPage: limit,
        list: cache.data,
      },
    };
  }
}
`;
}
