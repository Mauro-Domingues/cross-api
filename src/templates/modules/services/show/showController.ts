import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class ShowController extends BaseTemplateModule {
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
    return `import type { Request, Response } fr\u006Fm 'express';
import { container } fr\u006Fm 'tsyringe';
import type { IResponseDTO } fr\u006Fm '@dtos/IResponseDTO';
import type { I${this.names.upperModuleName}DTO } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import type { ${this.names.upperModuleName} } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { Show${this.names.upperModuleName}Service } fr\u006Fm './Show${this.names.upperModuleName}Service';

export class Show${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<Required<I${this.names.upperModuleName}DTO>>,
    response: Response<IResponseDTO<${this.names.upperModuleName}>>,
  ): Promise<void> {
    const show${this.names.upperModuleName} = container.resolve(Show${this.names.upperModuleName}Service);

    const { id } = request.params;

    const ${this.names.lowerModuleName} = await show${this.names.upperModuleName}.execute(request.dbConnection, id);

    response.status(${this.names.lowerModuleName}.code).json(${this.names.lowerModuleName});
  }
}
`;
  }
}
