import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class ShowDependentController {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'upperModuleName'
    >,
    private readonly fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ) {}

  public execute(): string {
    return `import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { Request, Response } ${'from'} 'express';
import { container } ${'from'} 'tsyringe';
import { IResponseDTO } ${'from'} '@dtos/IResponseDTO';
import { I${this.names.upperModuleName}DTO } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/dtos/I${this.names.upperModuleName}DTO';
import { Show${this.names.upperModuleName}Service } ${'from'} './Show${
      this.names.upperModuleName
    }Service';

export class Show${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<I${this.names.upperModuleName}DTO>,
    response: Response<IResponseDTO<${this.names.upperModuleName}>>,
  ) {
    const show${this.names.upperModuleName} = container.resolve(Show${
      this.names.upperModuleName
    }Service);

    const { id } = request.params;

    const ${this.names.lowerModuleName} = await show${
      this.names.upperModuleName
    }.execute(id);

    return response.status(${this.names.lowerModuleName}.code).send(${
      this.names.lowerModuleName
    });
  }
}
`;
  }
}
