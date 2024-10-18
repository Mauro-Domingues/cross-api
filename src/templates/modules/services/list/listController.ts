import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class ListController extends BaseTemplateModule {
  public constructor(
    protected readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'pluralLowerModuleName' | 'lowerModuleName'
    >,
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super();
  }

  public execute(): string {
    return `import { Request, Response } ${'from'} 'express';
import { container } ${'from'} 'tsyringe';
import { FindOptionsWhere } ${'from'} 'typeorm';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { IListDTO } ${'from'} '@dtos/IListDTO';
import { List${this.names.upperModuleName}Service } ${'from'} './List${
      this.names.upperModuleName
    }Service';

export class List${this.names.upperModuleName}Controller {
  public async handle(
    request: Request<
      never,
      never,
      never,
      { page: number; limit: number } & FindOptionsWhere<${
        this.names.upperModuleName
      }>
    >,
    response: Response<IListDTO<${this.names.upperModuleName}>>,
  ) {
    const list${this.names.upperModuleName} = container.resolve(List${
      this.names.upperModuleName
    }Service);

    const { page = 1, limit = 20, ...filters } = request.query;

    const ${this.names.pluralLowerModuleName} = await list${
      this.names.upperModuleName
    }.execute(page, limit, filters);

    return response.status(${this.names.pluralLowerModuleName}.code).send(${
      this.names.pluralLowerModuleName
    });
  }
}
`;
  }
}
