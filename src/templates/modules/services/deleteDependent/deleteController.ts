export default function deleteDependentController(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
): string {
  return `import { Request, Response } from 'express';
import { container } from 'tsyringe';
import IObjectDTO from '@dtos/IObjectDTO';

import Delete${upperModuleName}Service from './Delete${upperModuleName}Service';

export default class Delete${upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const delete${pluralLowerModuleName} = container.resolve(Delete${upperModuleName}Service);

    const ${lowerModuleName}Param: IObjectDTO = request.params;

    const ${lowerModuleName} = delete${pluralLowerModuleName}.execute(${lowerModuleName}Param);

    return response.send(${lowerModuleName});
  }
}
`;
}
