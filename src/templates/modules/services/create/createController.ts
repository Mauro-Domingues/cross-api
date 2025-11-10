import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class CreateController extends BaseTemplateModule {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'upperModuleName' | 'pluralLowerModuleName'
    >,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import type { I${this.names.upperModuleName}DTO } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import type { Request, Response } fr\om 'express';
import { container } fr\om 'tsyringe';
import type { IResponseDTO } fr\om '@dtos/IResponseDTO';
import type { ${this.names.upperModuleName} } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { Create${this.names.upperModuleName}Service } fr\om './Create${this.names.upperModuleName}Service';

export class Create${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<never, never, I${this.names.upperModuleName}DTO>,
    response: Response<IResponseDTO<${this.names.upperModuleName}>>,
  ): Promise<void> {
    const ${this.names.lowerModuleName}Data = request.body;

    const create${this.names.upperModuleName} = container.resolve(Create${this.names.upperModuleName}Service);

    const ${this.names.lowerModuleName} = await create${this.names.upperModuleName}.execute(request.dbConnection, ${this.names.lowerModuleName}Data);

    response.status(${this.names.lowerModuleName}.code).json(${this.names.lowerModuleName});
  }
}
`;
  }
}
