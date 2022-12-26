export default function deleteService(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import I${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import IObjectDTO from '@dtos/IObjectDTO';
import IResponseDTO from '@dtos/IResponseDTO';

@injectable()
export default class Delete${upperModuleName}Service {
  constructor(
    @inject('${pluralUpperModuleName}Repository')
    private ${pluralLowerModuleName}Repository: I${pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  async execute(${lowerModuleName}Data: IObjectDTO): Promise<IResponseDTO> {
    const ${lowerModuleName} = await this.${pluralLowerModuleName}Repository.findBy(${lowerModuleName}Data);

    if (!${lowerModuleName}) {
      throw new AppError('${upperModuleName} not found', 404);
    }

    await this.cacheProvider.invalidatePrefix('${pluralLowerModuleName}');

    this.${pluralLowerModuleName}Repository.delete(${lowerModuleName}Data);

    return {
      code: 204,
      message_code: 'NO_CONTENT',
      message: 'successfully deleted ${lowerModuleName}',
      data: null,
    };
  }
}
`;
}
