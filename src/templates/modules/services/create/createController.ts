import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateController {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Pick<
          IModuleNamesDTO,
          'lowerModuleName' | 'upperModuleName' | 'pluralLowerModuleName'
        >
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    return `import { I${this.names.upperModuleName}DTO } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/dtos/I${this.names.upperModuleName}DTO';
import { Request, Response } ${'from'} 'express';
import { container } ${'from'} 'tsyringe';
import { IResponseDTO } ${'from'} '@dtos/IResponseDTO';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { Create${this.names.upperModuleName}Service } ${'from'} './Create${
      this.names.upperModuleName
    }Service';

export class Create${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<never, never, I${this.names.upperModuleName}DTO>,
    response: Response<IResponseDTO<${this.names.upperModuleName}>>,
  ) {
    const ${this.names.lowerModuleName}Data = request.body;

    const create${this.names.upperModuleName} = container.resolve(Create${
      this.names.upperModuleName
    }Service);

    const ${this.names.lowerModuleName} = await create${
      this.names.upperModuleName
    }.execute(${this.names.lowerModuleName}Data);

    return response.status(${this.names.lowerModuleName}.code).send(${
      this.names.lowerModuleName
    });
  }
}
`;
  }
}
