import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class DeleteDependentController {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
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
      throw this.console.single({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return `import { Request, Response } ${'from'} 'express';
import { container } ${'from'} 'tsyringe';
import { IResponseDTO } ${'from'} '@dtos/IResponseDTO';
import { I${this.names.upperModuleName}DTO } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/dtos/I${this.names.upperModuleName}DTO';
import { Delete${this.names.upperModuleName}Service } ${'from'} './Delete${
      this.names.upperModuleName
    }Service';

export class Delete${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<I${this.names.upperModuleName}DTO>,
    response: Response<IResponseDTO<null>>,
  ) {
    const delete${this.names.upperModuleName} = container.resolve(Delete${
      this.names.upperModuleName
    }Service);

    const { id } = request.params;

    const ${this.names.lowerModuleName} = await delete${
      this.names.upperModuleName
    }.execute(id);

    return response.send(${this.names.lowerModuleName});
  }
}
`;
  }
}
