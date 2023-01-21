"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDependentRepository;
function createDependentRepository(lowerModuleName, upperModuleName, pluralLowerModuleName, pluralUpperModuleName, pluralFatherLowerModuleName) {
  return `import I${upperModuleName}DTO from '@modules/${pluralFatherLowerModuleName}/dtos/I${upperModuleName}DTO';
import { DeleteResult, Repository } from 'typeorm';

import ${upperModuleName} from '@modules/${pluralFatherLowerModuleName}/entities/${upperModuleName}';
import I${pluralUpperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import { AppDataSource } from '@shared/typeorm/dataSource';

export default class ${pluralUpperModuleName}Repository implements I${pluralUpperModuleName}Repository {
  private ormRepository: Repository<${upperModuleName}>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(${upperModuleName});
  }

  public async findBy(
    ${lowerModuleName}Data: IObjectDTO | IObjectDTO[],
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
    conditions?: IObjectDTO | IObjectDTO[],
    relations?: string[],
  ): Promise<{ ${pluralLowerModuleName}: ${upperModuleName}[]; amount: number }> {
    const [${pluralLowerModuleName}, amount] = await this.ormRepository.findAndCount({
      where: conditions,
      take: limit,
      skip: (page - 1) * limit,
      relations,
    });

    return { ${pluralLowerModuleName}, amount };
  }

  public async create(${lowerModuleName}Data: I${upperModuleName}DTO): Promise<${upperModuleName}> {
    const ${lowerModuleName} = this.ormRepository.create(${lowerModuleName}Data);

    await this.ormRepository.save(${lowerModuleName});

    return ${lowerModuleName};
  }

  public async update(${lowerModuleName}Data: ${upperModuleName}): Promise<${upperModuleName}> {
    return this.ormRepository.save(${lowerModuleName}Data);
  }

  public async delete(${lowerModuleName}Data: ${upperModuleName} | IObjectDTO): Promise<DeleteResult> {
    if (${lowerModuleName}Data instanceof ${upperModuleName}) {
      return this.ormRepository.delete({ id: ${lowerModuleName}Data.id });
    }
    return this.ormRepository.delete(${lowerModuleName}Data);
  }

  public async softDelete(${lowerModuleName}Data: ${upperModuleName} | IObjectDTO): Promise<DeleteResult> {
    if (${lowerModuleName}Data instanceof ${upperModuleName}) {
      return this.ormRepository.softDelete({ id: ${lowerModuleName}Data.id });
    }
    return this.ormRepository.softDelete(${lowerModuleName}Data);
  }
}
`;
}