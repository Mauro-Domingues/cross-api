import { IModuleNamesDTO } from 'index';

export function updateDependentController(
  names: Pick<IModuleNamesDTO, 'lowerModuleName' | 'upperModuleName'>,
  fatherNames: Pick<IModuleNamesDTO, 'pluralLowerModuleName'>,
): string {
  return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import I${names.upperModuleName}DTO from '@modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO';
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
