export default function updateDependentService(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
  pluralFatherLowerModuleName: string,
): string {
  return `import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import I${pluralUpperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import I${upperModuleName}DTO from '@modules/${pluralFatherLowerModuleName}/dtos/I${upperModuleName}DTO';
import IResponseDTO from '@dtos/IResponseDTO';
import IObjectDTO from '@dtos/IObjectDTO';
import mapAndUpdateAttribute from '@utils/mappers/mapAndUpdateAttribute';
import ${upperModuleName} from '@modules/${pluralFatherLowerModuleName}/entities/${upperModuleName}';

@injectable()
export default class Update${upperModuleName}Service {
  constructor(
    @inject('${pluralUpperModuleName}Repository')
    private ${pluralLowerModuleName}Repository: I${pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  async execute(
    ${lowerModuleName}Param: IObjectDTO,
    ${lowerModuleName}Data: I${upperModuleName}DTO,
  ): Promise<IResponseDTO<${upperModuleName}>> {
    const ${lowerModuleName} = await this.${pluralLowerModuleName}Repository.findBy(${lowerModuleName}Param);

    if (!${lowerModuleName}) {
      throw new AppError('${upperModuleName} not found', 404);
    }

    await this.cacheProvider.invalidatePrefix('${pluralLowerModuleName}');

    await this.${pluralLowerModuleName}Repository.update(
      await mapAndUpdateAttribute(${lowerModuleName}, ${lowerModuleName}Data),
    );

    return {
      code: 200,
      message_code: 'OK',
      message: 'successfully updated ${lowerModuleName}',
      data: ${lowerModuleName},
    };
  }
}
`;
}
