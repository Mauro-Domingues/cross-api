import { Messages } from '../../../../tools/messages.js';
import { Console } from '../../../../tools/console.js';

export class UpdateDependentController {
  messages;
  console;
  names;
  fatherNames;
  constructor(names, fatherNames) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
    this.fatherNames = fatherNames;
  }
  execute() {
    if (!this.names || !this.fatherNames) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }
    return `import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { I${this.names.upperModuleName}DTO } from '@modules/${this.fatherNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { IObjectDTO } from '@dtos/IObjectDTO';
import { Update${this.names.upperModuleName}Service } from './Update${this.names.upperModuleName}Service';

export class Update${this.names.upperModuleName}Controller {
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
