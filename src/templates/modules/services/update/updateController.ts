export default function updateController(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
): string {
  return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import I${upperModuleName}DTO from '@modules/${pluralLowerModuleName}/dtos/I${upperModuleName}DTO';
import IObjectDTO from '@dtos/IObjectDTO';
import Update${upperModuleName}Service from './Update${upperModuleName}Service';

export default class Update${upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const update${upperModuleName} = container.resolve(Update${upperModuleName}Service);

    const ${lowerModuleName}Id: IObjectDTO = request.params;
    const ${lowerModuleName}Data: I${upperModuleName}DTO = request.body;

    const ${lowerModuleName} = await update${upperModuleName}.execute({
      ${lowerModuleName}Id,
      ${lowerModuleName}Data,
    });

    return response.send(${lowerModuleName});
  }
}
`;
}
