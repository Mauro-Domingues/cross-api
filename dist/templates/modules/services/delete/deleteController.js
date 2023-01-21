"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteController;
function deleteController(lowerModuleName, upperModuleName, pluralLowerModuleName) {
  return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Delete${upperModuleName}Service from './Delete${upperModuleName}Service';

export default class Delete${upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const delete${pluralLowerModuleName} = container.resolve(Delete${upperModuleName}Service);

    const ${lowerModuleName}Param: IObjectDTO = request.params;

    const ${lowerModuleName} = await delete${pluralLowerModuleName}.execute(${lowerModuleName}Param);

    return response.send(${lowerModuleName});
  }
}
`;
}