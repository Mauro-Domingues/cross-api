export default function createRepository(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import I${upperModuleName}DTO from '@modules/${pluralLowerModuleName}/dtos/I${upperModuleName}DTO';
import { getRepository, Repository } from 'typeorm';

import ${upperModuleName} from '@modules/${pluralLowerModuleName}/entities/${upperModuleName}';
import I${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import IObjectDTO from '@dtos/IObjectDTO';

export default class ${pluralUpperModuleName}Repository implements I${pluralUpperModuleName}Repository {
  private ormRepository: Repository<${upperModuleName}>;

  constructor() {
    this.ormRepository = getRepository(${upperModuleName});
  }

  public async findBy(
    ${lowerModuleName}Data: IObjectDTO,
    relations?: string[],
  ): Promise<${upperModuleName} | null> {
    const ${lowerModuleName} = await this.ormRepository.findOne({
      where: ${lowerModuleName}Data,
      relations,
    });

    return ${lowerModuleName};
  }

  public async findAll(
    page: number,
    limit: number,
    relations?: string[],
  ): Promise<[${upperModuleName}[], number]> {
    return this.ormRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
      relations,
    });
  }

  public async create(${lowerModuleName}Data: I${upperModuleName}DTO): Promise<${upperModuleName}> {
    const ${lowerModuleName} = this.ormRepository.create(${lowerModuleName}Data);

    await this.ormRepository.save(${lowerModuleName});

    return ${lowerModuleName};
  }

  public async save(${lowerModuleName}Data: ${upperModuleName}): Promise<${upperModuleName}> {
    return this.ormRepository.save(${lowerModuleName}Data);
  }

  public async delete(${lowerModuleName}Data: IObjectDTO): Promise<void> {
    this.ormRepository.delete(${lowerModuleName}Data);
  }

  public async softDelete(${lowerModuleName}Data: IObjectDTO): Promise<void> {
    this.ormRepository.softDelete(${lowerModuleName}Data);
  }
}
`;
}
