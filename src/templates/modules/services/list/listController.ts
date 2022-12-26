export default function listController(
  upperModuleName: string,
  pluralLowerModuleName: string,
): string {
  return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import List${upperModuleName}Service from './List${upperModuleName}Service';

export default class List${upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const list${upperModuleName} = container.resolve(List${upperModuleName}Service);

    const { page = 1, limit = 20 } = request.query;

    const ${pluralLowerModuleName} = await list${upperModuleName}.execute(Number(page), Number(limit));

    return response.send(${pluralLowerModuleName});
  }
}
`;
}
