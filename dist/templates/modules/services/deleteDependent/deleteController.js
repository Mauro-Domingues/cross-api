"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteDependentController;
function deleteDependentController(lowerModuleName, upperModuleName) {
  return `import IObjectDTO from '@dtos/IObjectDTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Delete${upperModuleName}Service from './Delete${upperModuleName}Service';

export default class Delete${upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const delete${upperModuleName} = container.resolve(Delete${upperModuleName}Service);

    const ${lowerModuleName}Param: IObjectDTO = request.params;

    const ${lowerModuleName} = await delete${upperModuleName}.execute(${lowerModuleName}Param);

    return response.send(${lowerModuleName});
  }
}
`;
}