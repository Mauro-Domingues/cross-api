import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class UpdateController extends BaseTemplateModule {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'pluralLowerModuleName' | 'lowerModuleName' | 'upperModuleName'
    >,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { Request, Response } ${'from'} 'express';
import { container } ${'from'} 'tsyringe';
import { I${this.names.upperModuleName}DTO } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/dtos/I${this.names.upperModuleName}DTO';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { IResponseDTO } ${'from'} '@dtos/IResponseDTO';
import { Update${this.names.upperModuleName}Service } ${'from'} './Update${
      this.names.upperModuleName
    }Service';

export class Update${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<Required<I${this.names.upperModuleName}DTO>, never, I${
      this.names.upperModuleName
    }DTO>,
    response: Response<IResponseDTO<${this.names.upperModuleName}>>,
  ): Promise<void> {
    const update${this.names.upperModuleName} = container.resolve(Update${
      this.names.upperModuleName
    }Service);

    const { id } = request.params;
    const ${this.names.lowerModuleName}Data = request.body;

    const ${this.names.lowerModuleName} = await update${
      this.names.upperModuleName
    }.execute(id, ${this.names.lowerModuleName}Data);

    response.status(${this.names.lowerModuleName}.code).send(${
      this.names.lowerModuleName
    });
  }
}
`;
  }
}
