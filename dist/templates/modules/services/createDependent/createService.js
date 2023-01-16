"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDependentService;
function createDependentService(lowerModuleName, upperModuleName, pluralLowerModuleName, pluralUpperModuleName, pluralFatherLowerModuleName) {
  return `import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import I${pluralUpperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';

import IResponseDTO from '@dtos/IResponseDTO';
import I${upperModuleName}DTO from '@modules/${pluralFatherLowerModuleName}/dtos/I${upperModuleName}DTO';
import ${upperModuleName} from '@modules/${pluralFatherLowerModuleName}/entities/${upperModuleName}';

@injectable()
export default class Create${upperModuleName}Service {
  constructor(
    @inject('${pluralUpperModuleName}Repository')
    private ${pluralLowerModuleName}Repository: I${pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  async execute(${lowerModuleName}Data: I${upperModuleName}DTO): Promise<IResponseDTO<${upperModuleName}>> {
    const ${lowerModuleName} = await this.${pluralLowerModuleName}Repository.create(${lowerModuleName}Data);

    await this.cacheProvider.invalidatePrefix('${pluralLowerModuleName}');

    return {
      code: 201,
      message_code: 'CREATED',
      message: '${upperModuleName} successfully created',
      data: ${lowerModuleName},
    };
  }
}
`;
}