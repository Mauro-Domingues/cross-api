import { IModuleNamesDTO } from 'index';

export function showController(
  names: Pick<IModuleNamesDTO, 'lowerModuleName' | 'upperModuleName'>,
): string {
  return `import IObjectDTO from '@dtos/IObjectDTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Show${names.upperModuleName}Service from './Show${names.upperModuleName}Service';

export default class Show${names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const show${names.upperModuleName} = container.resolve(Show${names.upperModuleName}Service);

    const ${names.lowerModuleName}Param: IObjectDTO = request.params;

    const ${names.lowerModuleName} = await show${names.upperModuleName}.execute(${names.lowerModuleName}Param);

    return response.send(${names.lowerModuleName});
  }
}
`;
}
