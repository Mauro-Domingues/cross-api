"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listDependentService;
function listDependentService(upperModuleName, pluralLowerModuleName, pluralUpperModuleName, pluralFatherLowerModuleName) {
  return `import { injectable, inject } from 'tsyringe';

import I${pluralUpperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IListDTO from '@dtos/IListDTO';
import ${upperModuleName} from '@modules/${pluralFatherLowerModuleName}/entities/${upperModuleName}';
import ICacheDTO from '@dtos/ICacheDTO';

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