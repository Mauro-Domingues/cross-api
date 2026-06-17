import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class ListController extends BaseTemplateModule {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'pluralLowerModuleName' | 'lowerModuleName'
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
import type { IListDTO } fr\u006Fm '@dtos/IListDTO';
import type { ${this.names.upperModuleName} } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { List${this.names.upperModuleName}Service } fr\u006Fm './List${this.names.upperModuleName}Service';

@injectable()
export class List${this.names.upperModuleName}Controller {
  public constructor(
    @inject('List${this.names.upperModuleName}Service')
    private readonly list${this.names.upperModuleName}Service: List${this.names.upperModuleName}Service,
  ) {}

  public async handle(
    request: Request<
      never,
      never,
      never,
      { page: number; limit: number } & Partial<${this.names.upperModuleName}>
    >,
    response: Response<IListDTO<${this.names.upperModuleName}>>,
  ): Promise<void> {
    const { page = 1, limit = 20, ...filters } = request.query;

    const ${this.names.pluralLowerModuleName} = await this.list${this.names.upperModuleName}Service.execute(
      request.dbConnection,
      page,
      limit,
      filters,
    );

    response.status(${this.names.pluralLowerModuleName}.code).json(${this.names.pluralLowerModuleName});
  }
}
`;
  }
}
