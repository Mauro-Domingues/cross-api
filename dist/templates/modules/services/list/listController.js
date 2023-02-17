"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listController = listController;
function listController(names) {
  return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import List${names.upperModuleName}Service from './List${names.upperModuleName}Service';

export default class List${names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const list${names.upperModuleName} = container.resolve(List${names.upperModuleName}Service);

    const { page = 1, limit = 20 } = request.query;

    const ${names.pluralLowerModuleName} = await list${names.upperModuleName}.execute(Number(page), Number(limit));

    return response.send(${names.pluralLowerModuleName});
  }
}
`;
}