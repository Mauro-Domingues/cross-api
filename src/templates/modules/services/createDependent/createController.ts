import { IModuleNamesDTO } from 'index';

export function createDependentController(
  names: Pick<IModuleNamesDTO, 'lowerModuleName' | 'upperModuleName'>,
  fatherNames: Pick<
    IModuleNamesDTO,
    'pluralLowerModuleName' | 'upperModuleName'
  >,
): string {
  return `import I${names.upperModuleName}DTO from '@modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Create${names.upperModuleName}Service from './Create${names.upperModuleName}Service';

export default class Create${names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const ${names.lowerModuleName}Data: I${names.upperModuleName}DTO = request.body;

    const create${names.upperModuleName} = container.resolve(Create${names.upperModuleName}Service);

    const ${names.lowerModuleName} = await create${names.upperModuleName}.execute(${names.lowerModuleName}Data);

    return response.send(${names.lowerModuleName});
  }
}
`;
}
