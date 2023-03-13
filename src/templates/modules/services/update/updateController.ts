import { IModuleNamesDTO } from 'index';

export class UpdateController {
  private names: Pick<
    IModuleNamesDTO,
    'lowerModuleName' | 'upperModuleName' | 'pluralLowerModuleName'
  >;

  constructor(names: IModuleNamesDTO) {
    this.names = names;
  }

  public execute(): string {
    return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import I${this.names.upperModuleName}DTO from '@modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import IObjectDTO from '@dtos/IObjectDTO';
import Update${this.names.upperModuleName}Service from './Update${this.names.upperModuleName}Service';

export default class Update${this.names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const update${this.names.upperModuleName} = container.resolve(Update${this.names.upperModuleName}Service);

    const ${this.names.lowerModuleName}Param: IObjectDTO = request.params;
    const ${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO = request.body;

    const ${this.names.lowerModuleName} = await update${this.names.upperModuleName}.execute(${this.names.lowerModuleName}Param, ${this.names.lowerModuleName}Data);

    return response.send(${this.names.lowerModuleName});
  }
}
`;
  }
}
