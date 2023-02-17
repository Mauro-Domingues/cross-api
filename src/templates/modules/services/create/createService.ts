import { IModuleNamesDTO } from 'index';

export function createService(
  names: Omit<IModuleNamesDTO, 'dbModuleName' | 'routeModuleName'>,
): string {
  return `import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import I${names.pluralUpperModuleName}Repository from '@modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository';
import I${names.upperModuleName}DTO from '@modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO';
import ${names.upperModuleName} from '@modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import IResponseDTO from '@dtos/IResponseDTO';

@injectable()
export default class Create${names.upperModuleName}Service {
  constructor(
    @inject('${names.pluralUpperModuleName}Repository')
    private ${names.pluralLowerModuleName}Repository: I${names.pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  async execute(${names.lowerModuleName}Data: I${names.upperModuleName}DTO): Promise<IResponseDTO<${names.upperModuleName}>> {
    const ${names.lowerModuleName} = await this.${names.pluralLowerModuleName}Repository.create(${names.lowerModuleName}Data);

    await this.cacheProvider.invalidatePrefix('${names.pluralLowerModuleName}');

    return {
      code: 201,
      message_code: 'CREATED',
      message: '${names.upperModuleName} successfully created',
      data: instanceToInstance(${names.lowerModuleName}),
    };
  }
}
`;
}
