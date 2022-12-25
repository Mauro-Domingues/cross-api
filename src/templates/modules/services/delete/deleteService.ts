export default function createController(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import I${upperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/I${upperModuleName}Repository';
import IObjectDTO from '@dtos/IObjectDTO';
import IResponseDTO from '@dtos/IResponseDTO';

@injectable()
export default class Delete${upperModuleName}Service {
  constructor(
    @inject('${upperModuleName}Repository')
    private ${lowerModuleName}Repository: I${upperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  async execute(${lowerModuleName}Data: IObjectDTO): Promise<IResponseDTO> {
    const ${lowerModuleName} = await this.${lowerModuleName}Repository.findBy(${lowerModuleName}Data);

    if (!${lowerModuleName}) {
      throw new AppError('${upperModuleName} not found', 404);
    }

    await this.cacheProvider.invalidatePrefix('${lowerModuleName}');

    this.${lowerModuleName}Repository.delete(${lowerModuleName}Data);

    return {
      code: 204,
      message_code: "NO_CONTENT",
      message: "successfully deleted ${lowerModuleName}",
      data: null
    }
  }
}
`;
}
