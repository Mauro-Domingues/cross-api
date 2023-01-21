"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateDependentController;
function updateDependentController(lowerModuleName, upperModuleName, pluralFatherLowerModuleName) {
  return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import I${upperModuleName}DTO from '@modules/${pluralFatherLowerModuleName}/dtos/I${upperModuleName}DTO';
import Update${upperModuleName}Service from './Update${upperModuleName}Service';

export default class Update${upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const update${upperModuleName} = container.resolve(Update${upperModuleName}Service);

    const ${lowerModuleName}Param: IObjectDTO = request.params;
    const ${lowerModuleName}Data: I${upperModuleName}DTO = request.body;

    const ${lowerModuleName} = await update${upperModuleName}.execute(${lowerModuleName}Param, ${lowerModuleName}Data);

    return response.send(${lowerModuleName});
  }
}
`;
}