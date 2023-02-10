import IModuleNamesDTO from 'index';

export default function deleteService(
  names: Omit<IModuleNamesDTO, 'dbModuleName' | 'routeModuleName'>,
): string {
  return `import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import I${names.pluralUpperModuleName}Repository from '@modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository';
import IObjectDTO from '@dtos/IObjectDTO';
import IResponseDTO from '@dtos/IResponseDTO';

@injectable()
export default class Delete${names.upperModuleName}Service {
  constructor(
    @inject('${names.pluralUpperModuleName}Repository')
    private ${names.pluralLowerModuleName}Repository: I${names.pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  async execute(${names.lowerModuleName}Param: IObjectDTO): Promise<IResponseDTO<null>> {
    const ${names.lowerModuleName} = await this.${names.pluralLowerModuleName}Repository.findBy(${names.lowerModuleName}Param);

    if (!${names.lowerModuleName}) {
      throw new AppError('${names.upperModuleName} not found', 404);
    }

    await this.cacheProvider.invalidatePrefix('${names.pluralLowerModuleName}');

    this.${names.pluralLowerModuleName}Repository.delete(${names.lowerModuleName});

    return {
      code: 204,
      message_code: 'NO_CONTENT',
      message: 'successfully deleted ${names.lowerModuleName}',
      data: null,
    };
  }
}
`;
}
