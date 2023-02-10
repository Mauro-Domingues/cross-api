import IModuleNamesDTO from 'index';

export default function createDependentRepository(
  names: Omit<IModuleNamesDTO, 'dbModuleName' | 'routeModuleName'>,
  fatherNames: Pick<IModuleNamesDTO, 'pluralLowerModuleName'>,
): string {
  return `import I${names.upperModuleName}DTO from '@modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO';
import { DeleteResult, Repository } from 'typeorm';

import ${names.upperModuleName} from '@modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}';
import I${names.pluralUpperModuleName}Repository from '@modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository';
import { AppDataSource } from '@shared/typeorm/dataSource';
import IObjectDTO from '@dtos/IObjectDTO';

export default class ${names.pluralUpperModuleName}Repository implements I${names.pluralUpperModuleName}Repository {
  private ormRepository: Repository<${names.upperModuleName}>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(${names.upperModuleName});
  }

  public async findBy(
    ${names.lowerModuleName}Data: IObjectDTO | IObjectDTO[],
    relations?: string[],
  ): Promise<${names.upperModuleName} | null> {
    const ${names.lowerModuleName} = await this.ormRepository.findOne({
      where: ${names.lowerModuleName}Data,
      relations,
    });

    return ${names.lowerModuleName};
  }

  public async findAll(
    page: number,
    limit: number,
    conditions?: IObjectDTO | IObjectDTO[],
    relations?: string[],
  ): Promise<{ ${names.pluralLowerModuleName}: ${names.upperModuleName}[]; amount: number }> {
    const [${names.pluralLowerModuleName}, amount] = await this.ormRepository.findAndCount({
      where: conditions,
      take: limit,
      skip: (page - 1) * limit,
      relations,
    });

    return { ${names.pluralLowerModuleName}, amount };
  }

  public async create(${names.lowerModuleName}Data: I${names.upperModuleName}DTO): Promise<${names.upperModuleName}> {
    const ${names.lowerModuleName} = this.ormRepository.create(${names.lowerModuleName}Data);

    await this.ormRepository.save(${names.lowerModuleName});

    return ${names.lowerModuleName};
  }

  public async update(${names.lowerModuleName}Data: ${names.upperModuleName}): Promise<${names.upperModuleName}> {
    return this.ormRepository.save(${names.lowerModuleName}Data);
  }

  public async delete(${names.lowerModuleName}Data: ${names.upperModuleName} | IObjectDTO): Promise<DeleteResult> {
    if (${names.lowerModuleName}Data instanceof ${names.upperModuleName}) {
      return this.ormRepository.delete({ id: ${names.lowerModuleName}Data.id });
    }
    return this.ormRepository.delete(${names.lowerModuleName}Data);
  }

  public async softDelete(${names.lowerModuleName}Data: ${names.upperModuleName} | IObjectDTO): Promise<DeleteResult> {
    if (${names.lowerModuleName}Data instanceof ${names.upperModuleName}) {
      return this.ormRepository.softDelete({ id: ${names.lowerModuleName}Data.id });
    }
    return this.ormRepository.softDelete(${names.lowerModuleName}Data);
  }
}
`;
}
