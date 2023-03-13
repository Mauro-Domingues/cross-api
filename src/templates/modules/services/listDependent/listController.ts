import { IModuleNamesDTO } from 'index';

export class ListDependentController {
  private names: Pick<
    IModuleNamesDTO,
    'upperModuleName' | 'pluralLowerModuleName'
  >;

  constructor(names: IModuleNamesDTO) {
    this.names = names;
  }

  public execute(): string {
    return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import List${this.names.upperModuleName}Service from './List${this.names.upperModuleName}Service';

export default class List${this.names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const list${this.names.upperModuleName} = container.resolve(List${this.names.upperModuleName}Service);

    const { page = 1, limit = 20 } = request.query;

    const ${this.names.pluralLowerModuleName} = await list${this.names.upperModuleName}.execute(Number(page), Number(limit));

    return response.send(${this.names.pluralLowerModuleName});
  }
}
`;
  }
}
