import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
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
    return `import type { Request, Response } fr\u006Fm 'express';
import { container } fr\u006Fm 'tsyringe';
import type { IResponseDTO } fr\u006Fm '@dtos/IResponseDTO';
import type { I${this.names.upperModuleName}DTO } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import type { ${this.names.upperModuleName} } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { Update${this.names.upperModuleName}Service } fr\u006Fm './Update${this.names.upperModuleName}Service';

export class Update${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<Required<I${this.names.upperModuleName}DTO>, never, I${this.names.upperModuleName}DTO>,
    response: Response<IResponseDTO<${this.names.upperModuleName}>>,
  ): Promise<void> {
    const update${this.names.upperModuleName} = container.resolve(Update${this.names.upperModuleName}Service);

    const { id } = request.params;
    const ${this.names.lowerModuleName}Data = request.body;

    const ${this.names.lowerModuleName} = await update${this.names.upperModuleName}.execute(
      request.dbConnection,
      id,
      ${this.names.lowerModuleName}Data,
    );

    response.status(${this.names.lowerModuleName}.code).json(${this.names.lowerModuleName});
  }
}
`;
  }
}
