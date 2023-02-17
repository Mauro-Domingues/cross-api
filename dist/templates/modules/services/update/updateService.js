"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateService = updateService;
function updateService(names) {
  return `import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import I${names.pluralUpperModuleName}Repository from '@modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository';
import I${names.upperModuleName}DTO from '@modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO';
import mapAndUpdateAttribute from '@utils/mappers/mapAndUpdateAttribute';
import ${names.upperModuleName} from '@modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import IObjectDTO from '@dtos/IObjectDTO';
import IResponseDTO from '@dtos/IResponseDTO';

@injectable()
export default class Update${names.upperModuleName}Service {
  constructor(
    @inject('${names.pluralUpperModuleName}Repository')
    private ${names.pluralLowerModuleName}Repository: I${names.pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  async execute(
    ${names.lowerModuleName}Param: IObjectDTO,
    ${names.lowerModuleName}Data: I${names.upperModuleName}DTO,
  ): Promise<IResponseDTO<${names.upperModuleName}>> {
    const ${names.lowerModuleName} = await this.${names.pluralLowerModuleName}Repository.findBy(${names.lowerModuleName}Param);

    if (!${names.lowerModuleName}) {
      throw new AppError('${names.upperModuleName} not found', 404);
    }

    await this.cacheProvider.invalidatePrefix('${names.pluralLowerModuleName}');

    await this.${names.pluralLowerModuleName}Repository.update(
      await mapAndUpdateAttribute(${names.lowerModuleName}, ${names.lowerModuleName}Data),
    );

    return {
      code: 200,
      message_code: 'OK',
      message: 'successfully updated ${names.lowerModuleName}',
      data: instanceToInstance(${names.lowerModuleName}),
    };
  }
}
`;
}