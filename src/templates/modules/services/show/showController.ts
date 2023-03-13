import { IModuleNamesDTO } from 'index';

export class ShowController {
  private names: Pick<IModuleNamesDTO, 'lowerModuleName' | 'upperModuleName'>;

  constructor(names: IModuleNamesDTO) {
    this.names = names;
  }

  public execute(): string {
    return `import IObjectDTO from '@dtos/IObjectDTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Show${this.names.upperModuleName}Service from './Show${this.names.upperModuleName}Service';

export default class Show${this.names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const show${this.names.upperModuleName} = container.resolve(Show${this.names.upperModuleName}Service);

    const ${this.names.lowerModuleName}Param: IObjectDTO = request.params;

    const ${this.names.lowerModuleName} = await show${this.names.upperModuleName}.execute(${this.names.lowerModuleName}Param);

    return response.send(${this.names.lowerModuleName});
  }
}
`;
  }
}
