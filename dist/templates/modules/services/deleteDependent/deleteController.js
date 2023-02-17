"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDependentController = deleteDependentController;
function deleteDependentController(names) {
  return `import IObjectDTO from '@dtos/IObjectDTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Delete${names.upperModuleName}Service from './Delete${names.upperModuleName}Service';

export default class Delete${names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const delete${names.upperModuleName} = container.resolve(Delete${names.upperModuleName}Service);

    const ${names.lowerModuleName}Param: IObjectDTO = request.params;

    const ${names.lowerModuleName} = await delete${names.upperModuleName}.execute(${names.lowerModuleName}Param);

    return response.send(${names.lowerModuleName});
  }
}
`;
}