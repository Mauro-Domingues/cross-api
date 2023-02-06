export default function deleteDependentController(
  lowerModuleName: string,
  upperModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import IObjectDTO from '@dtos/IObjectDTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Delete${upperModuleName}Service from './Delete${upperModuleName}Service';

export default class Delete${upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const delete${pluralUpperModuleName} = container.resolve(Delete${upperModuleName}Service);

    const ${lowerModuleName}Param: IObjectDTO = request.params;

    const ${lowerModuleName} = await delete${pluralUpperModuleName}.execute(${lowerModuleName}Param);

    return response.send(${lowerModuleName});
  }
}
`;
}
