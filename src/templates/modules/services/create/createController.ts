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
    return `import type { Request, Response } fr\u006Fm 'express';
import { inject, injectable } fr\u006Fm 'tsyringe';
import type { IResponseDTO } fr\u006Fm '@dtos/IResponseDTO';
import type { I${this.names.upperModuleName}DTO } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import type { ${this.names.upperModuleName} } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { Create${this.names.upperModuleName}Service } fr\u006Fm './Create${this.names.upperModuleName}Service';

@injectable()
export class Create${this.names.upperModuleName}Controller {
  public constructor(
    @inject('Create${this.names.upperModuleName}Service')
    private readonly create${this.names.upperModuleName}Service: Create${this.names.upperModuleName}Service,
  ) {}

  public async handle(
    request: Request<never, never, I${this.names.upperModuleName}DTO>,
    response: Response<IResponseDTO<${this.names.upperModuleName}>>,
  ): Promise<void> {
    const ${this.names.lowerModuleName}Data = request.body;

    const ${this.names.lowerModuleName} = await this.create${this.names.upperModuleName}Service.execute(
      request.dbConnection,
      ${this.names.lowerModuleName}Data,
    );

    response.status(${this.names.lowerModuleName}.code).json(${this.names.lowerModuleName});
  }
}
`;
  }
}
