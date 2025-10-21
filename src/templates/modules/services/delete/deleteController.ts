import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class DeleteController extends BaseTemplateModule {
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
    return `import { Request, Response } fr\om 'express';
import { container } fr\om 'tsyringe';
import { IResponseDTO } fr\om '@dtos/IResponseDTO';
import { I${this.names.upperModuleName}DTO } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { Delete${this.names.upperModuleName}Service } fr\om './Delete${this.names.upperModuleName}Service';

export class Delete${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<Required<I${this.names.upperModuleName}DTO>>,
    response: Response<IResponseDTO<null>>,
  ): Promise<void> {
    const delete${this.names.upperModuleName} = container.resolve(Delete${this.names.upperModuleName}Service);

    const { id } = request.params;

    const ${this.names.lowerModuleName} = await delete${this.names.upperModuleName}.execute(request.dbConnection, id);

    response.sendStatus(${this.names.lowerModuleName}.code);
  }
}
`;
  }
}
