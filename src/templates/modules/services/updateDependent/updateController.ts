import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class UpdateDependentController {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly names:
      | Pick<IModuleNamesDTO, 'lowerModuleName' | 'upperModuleName'>
      | undefined,
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names || !this.fatherNames) {
      throw this.console.one({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    return `import { Request, Response } ${'from'} 'express';
import { container } ${'from'} 'tsyringe';

import { I${this.names.upperModuleName}DTO } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/dtos/I${this.names.upperModuleName}DTO';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { IResponseDTO } ${'from'} '@dtos/IResponseDTO';
import { Update${this.names.upperModuleName}Service } ${'from'} './Update${
      this.names.upperModuleName
    }Service';

export class Update${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<I${this.names.upperModuleName}DTO, never, I${
      this.names.upperModuleName
    }DTO>,
    response: Response<IResponseDTO<${this.names.upperModuleName}>>,
  ) {
    const update${this.names.upperModuleName} = container.resolve(Update${
      this.names.upperModuleName
    }Service);

    const { id } = request.params;
    const ${this.names.lowerModuleName}Data = request.body;

    const ${this.names.lowerModuleName} = await update${
      this.names.upperModuleName
    }.execute(${this.names.lowerModuleName}Data, id);

    return response.status(${this.names.lowerModuleName}.code).send(${
      this.names.lowerModuleName
    });
  }
}
`;
  }
}
