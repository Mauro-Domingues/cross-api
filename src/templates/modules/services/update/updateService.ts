export default function updateService(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import I${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import I${upperModuleName}DTO from '@modules/${pluralLowerModuleName}/dtos/I${upperModuleName}DTO';
import IResponseDTO from '@dtos/IResponseDTO';
import IObjectDTO from '@dtos/IObjectDTO';
import mapAttributeList from '@utils/mapObjectAttribute';

@injectable()
export default class Update${upperModuleName}Service {
  constructor(
    @inject('${pluralUpperModuleName}Repository')
    private ${pluralLowerModuleName}Repository: I${pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  async execute({
    ${lowerModuleName}Id: IObjectDTO,
    ${lowerModuleName}Data: I${upperModuleName}DTO
  }: IRequest): Promise<IResponseDTO> {
    const ${lowerModuleName} = await this.${pluralLowerModuleName}Repository.findBy(${lowerModuleName}Id);

    if (!${lowerModuleName}) {
      throw new AppError('${upperModuleName} not found', 404);
    }

    await this.cacheProvider.invalidatePrefix('${pluralLowerModuleName}');

    await this.${pluralLowerModuleName}Repository.save(await mapAttributeList(${lowerModuleName}Data, ${lowerModuleName}))

    return {
      code: 200,
      message_code: "OK",
      message: "successfully updated ${lowerModuleName}",
      data: ${lowerModuleName}
    }
  }
}
`;
}
