import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class CreateDependentController {
  private readonly messages: IMessageDTO;

  public constructor(
    private readonly names:
      | Pick<IModuleNameDTO, 'lowerModuleName' | 'upperModuleName'>
      | undefined,
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'upperModuleName'>
      | undefined,
  ) {
    this.messages = Messages.getInstance().execute();
  }

  public execute(): string {
    if (!this.names || !this.fatherNames) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return `import { I${this.names.upperModuleName}DTO } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/dtos/I${this.names.upperModuleName}DTO';
import { Request, Response } ${'from'} 'express';
import { container } ${'from'} 'tsyringe';
import { IResponseDTO } ${'from'} '@dtos/IResponseDTO';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
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
