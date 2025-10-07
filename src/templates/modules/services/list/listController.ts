import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
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
    return `import { Request, Response } fr\om 'express';
import { container } fr\om 'tsyringe';
import { FindOptionsWhere } fr\om 'typeorm';
import { ${this.names.upperModuleName} } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { IListDTO } fr\om '@dtos/IListDTO';
import { List${this.names.upperModuleName}Service } fr\om './List${this.names.upperModuleName}Service';

export class List${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<
      never,
      never,
      never,
      { page: number; limit: number } & FindOptionsWhere<${this.names.upperModuleName}>
    >,
    response: Response<IListDTO<${this.names.upperModuleName}>>,
  ): Promise<void> {
    const list${this.names.upperModuleName} = container.resolve(List${this.names.upperModuleName}Service);

    const { page = 1, limit = 20, ...filters } = request.query;

    const ${this.names.pluralLowerModuleName} = await list${this.names.upperModuleName}.execute(page, limit, filters);

    response.status(${this.names.pluralLowerModuleName}.code).send(${this.names.pluralLowerModuleName});
  }
}
`;
  }
}
