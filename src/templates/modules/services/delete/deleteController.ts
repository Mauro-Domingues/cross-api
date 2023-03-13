import { IModuleNamesDTO } from '@tools/names';

export class DeleteController {
  private names: Pick<IModuleNamesDTO, 'lowerModuleName' | 'upperModuleName'>;

  constructor(names: IModuleNamesDTO) {
    this.names = names;
  }

  public execute(): string {
    return `import IObjectDTO from '@dtos/IObjectDTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Delete${this.names.upperModuleName}Service from './Delete${this.names.upperModuleName}Service';

export default class Delete${this.names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const delete${this.names.upperModuleName} = container.resolve(Delete${this.names.upperModuleName}Service);

    const ${this.names.lowerModuleName}Param: IObjectDTO = request.params;

    const ${this.names.lowerModuleName} = await delete${this.names.upperModuleName}.execute(${this.names.lowerModuleName}Param);

    return response.send(${this.names.lowerModuleName});
  }
}
`;
  }
}
