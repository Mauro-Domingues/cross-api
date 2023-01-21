"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showController;
function showController(lowerModuleName, upperModuleName) {
  return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Show${upperModuleName}Service from './Show${upperModuleName}Service';

export default class Show${upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const show${upperModuleName} = container.resolve(Show${upperModuleName}Service);

    const ${lowerModuleName}Param: IObjectDTO = request.params;

    const ${lowerModuleName} = await show${upperModuleName}.execute(${lowerModuleName}Param);

    return response.send(${lowerModuleName});
  }
}
`;
}