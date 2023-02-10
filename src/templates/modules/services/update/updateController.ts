import IModuleNamesDTO from 'index';

export default function updateController(
  names: Pick<
    IModuleNamesDTO,
    'lowerModuleName' | 'upperModuleName' | 'pluralLowerModuleName'
  >,
): string {
  return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import I${names.upperModuleName}DTO from '@modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO';
import IObjectDTO from '@dtos/IObjectDTO';
import Update${names.upperModuleName}Service from './Update${names.upperModuleName}Service';

export default class Update${names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const update${names.upperModuleName} = container.resolve(Update${names.upperModuleName}Service);

    const ${names.lowerModuleName}Param: IObjectDTO = request.params;
    const ${names.lowerModuleName}Data: I${names.upperModuleName}DTO = request.body;

    const ${names.lowerModuleName} = await update${names.upperModuleName}.execute(${names.lowerModuleName}Param, ${names.lowerModuleName}Data);

    return response.send(${names.lowerModuleName});
  }
}
`;
}
