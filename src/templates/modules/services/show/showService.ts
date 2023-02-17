import { IModuleNamesDTO } from 'index';

export function showService(
  names: Omit<IModuleNamesDTO, 'dbModuleName' | 'routeModuleName'>,
): string {
  return `import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import I${names.pluralUpperModuleName}Repository from '@modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository';
import ${names.upperModuleName} from '@modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import IObjectDTO from '@dtos/IObjectDTO';
import IResponseDTO from '@dtos/IResponseDTO';

@injectable()
export default class Show${names.upperModuleName}Service {
  constructor(
    @inject('${names.pluralUpperModuleName}Repository')
    private ${names.pluralLowerModuleName}Repository: I${names.pluralUpperModuleName}Repository,
  ) {}

  async execute(${names.lowerModuleName}Param: IObjectDTO): Promise<IResponseDTO<${names.upperModuleName}>> {
    const ${names.lowerModuleName} = await this.${names.pluralLowerModuleName}Repository.findBy(${names.lowerModuleName}Param, []);

    if (!${names.lowerModuleName}) {
      throw new AppError('${names.upperModuleName} not found', 404);
    }

    return {
      code: 200,
      message_code: 'OK',
      message: '${names.upperModuleName} found successfully',
      data: instanceToInstance(${names.lowerModuleName}),
    };
  }
}
`;
}
