export default function createService(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import I${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';

import IResponseDTO from '@dtos/IResponseDTO';
import I${upperModuleName}DTO from '@modules/${pluralLowerModuleName}/dtos/I${upperModuleName}DTO';

@injectable()
export default class Create${upperModuleName}Service {
  constructor(
    @inject('${pluralUpperModuleName}Repository')
    private ${pluralLowerModuleName}Repository: I${pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) { }

  async execute(${lowerModuleName}Data: IJourneyDTO): Promise<IResponseDTO> {
    const ${lowerModuleName} = await this.${pluralLowerModuleName}Repository.create(${lowerModuleName}Data);

    await this.cacheProvider.invalidatePrefix('${pluralLowerModuleName}');

    return {
      code: 201,
      message_code: "CREATED",
      message: "${upperModuleName} successfully created",
      data: ${lowerModuleName}
    }
  }
}`;
}
