"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListDependentService = void 0;
var _messages = require("../../../../../dist/tools/messages");
class ListDependentService {
  constructor(names, fatherNames) {
    this.messages = void 0;
    this.names = void 0;
    this.fatherNames = void 0;
    this.messages = new _messages.Messages().execute();
    this.names = names;
    this.fatherNames = fatherNames;
  }
  execute() {
    if (!this.names || !this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    return `import { injectable, inject } from 'tsyringe';

import I${this.names.pluralUpperModuleName}Repository from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import ${this.names.upperModuleName} from '@modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import ICacheDTO from '@dtos/ICacheDTO';
import IListDTO from '@dtos/IListDTO';

@injectable()
export default class List${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
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
exports.ListDependentService = ListDependentService;