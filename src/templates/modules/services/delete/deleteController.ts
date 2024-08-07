import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class DeleteController {
  private readonly messages: IMessageDTO;

  public constructor(
    private readonly names:
      | Pick<
          IModuleNameDTO,
          'pluralLowerModuleName' | 'lowerModuleName' | 'upperModuleName'
        >
      | undefined,
  ) {
    this.messages = Messages.getInstance().execute();
  }

  public execute(): string {
    if (!this.names) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
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
      this.names.pluralLowerModuleName
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
