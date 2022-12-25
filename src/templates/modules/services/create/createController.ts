export default function createController(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
): string {
  return `import I${upperModuleName}DTO from '@modules/${pluralLowerModuleName}/dtos/I${upperModuleName}DTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Create${upperModuleName}Service from './Create${upperModuleName}Service';

export default class Create${upperModuleName}Controller {
  async handle(request: Request, response: Response) {

    const ${lowerModuleName}Data: I${upperModuleName}DTO = request.body;

    const create${pluralLowerModuleName} = container.resolve(Create${upperModuleName}Service);

    const ${lowerModuleName} = await create${pluralLowerModuleName}.execute(${lowerModuleName}Data);

    return response.send(${lowerModuleName});
  }
}
`;
}
