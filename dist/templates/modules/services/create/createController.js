"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createController;
function createController(lowerModuleName, upperModuleName, pluralLowerModuleName, pluralUpperModuleName) {
  return `import I${upperModuleName}DTO from '@modules/${pluralLowerModuleName}/dtos/I${upperModuleName}DTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Create${upperModuleName}Service from './Create${upperModuleName}Service';

export default class Create${upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const ${lowerModuleName}Data: I${upperModuleName}DTO = request.body;

    const create${pluralUpperModuleName} = container.resolve(Create${upperModuleName}Service);

    const ${lowerModuleName} = await create${pluralUpperModuleName}.execute(${lowerModuleName}Data);

    return response.send(${lowerModuleName});
  }
}
`;
}