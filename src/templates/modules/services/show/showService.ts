export default function showService(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import I${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import ${upperModuleName} from '@modules/${pluralLowerModuleName}/entities/${upperModuleName}';
import IObjectDTO from '@dtos/IObjectDTO';
import IResponseDTO from '@dtos/IResponseDTO';

@injectable()
export default class Show${upperModuleName}Service {
  constructor(
    @inject('${pluralUpperModuleName}Repository')
    private ${pluralLowerModuleName}Repository: I${pluralUpperModuleName}Repository,
  ) {}

  async execute(${lowerModuleName}Param: IObjectDTO): Promise<IResponseDTO<${upperModuleName}>> {
    const ${lowerModuleName} = await this.${pluralLowerModuleName}Repository.findBy(${lowerModuleName}Param, []);

    if (!${lowerModuleName}) {
      throw new AppError('${upperModuleName} not found', 404);
    }

    return {
      code: 200,
      message_code: 'OK',
      message: '${upperModuleName} found successfully',
      data: ${lowerModuleName},
    };
  }
}
`;
}
