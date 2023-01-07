export default function createDependentFakeRepository(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
  pluralFatherLowerModuleName: string,
): string {
  return `import I${upperModuleName}DTO from '@modules/${pluralFatherLowerModuleName}/dtos/I${upperModuleName}DTO';
import ${upperModuleName} from '@modules/${pluralFatherLowerModuleName}/entities/${upperModuleName}';
import I${pluralUpperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import { v4 as uuid } from 'uuid';
import IObjectDTO from '@dtos/IObjectDTO';

export default class Fake${pluralUpperModuleName}Repository implements I${pluralUpperModuleName}Repository {
  private ${pluralLowerModuleName}: ${upperModuleName}[] = [];

  public async findBy(${lowerModuleName}Data: IObjectDTO): Promise<${upperModuleName} | null> {
    const find${upperModuleName} = this.${pluralLowerModuleName}.find(${lowerModuleName} => ${lowerModuleName}.id === ${lowerModuleName}Data.id);
    return find${upperModuleName} || null;
  }

  public async findAll(
    page: number,
    limit: number,
  ): Promise<{ ${pluralLowerModuleName}: ${upperModuleName}[]; amount: number }> {
    const find${upperModuleName} = this.${pluralLowerModuleName}.slice((page - 1) * limit, page * limit);

    return { ${pluralLowerModuleName}: find${upperModuleName}, amount: find${upperModuleName}.length };
  }

  public async create(${lowerModuleName}Data: I${upperModuleName}DTO): Promise<${upperModuleName}> {
    const ${lowerModuleName} = new ${upperModuleName}();

    Object.assign(${lowerModuleName}, { id: uuid() }, ${lowerModuleName}Data);
    this.${pluralLowerModuleName}.push(${lowerModuleName});

    return ${lowerModuleName};
  }

  public async update(${lowerModuleName}Data: ${upperModuleName}): Promise<${upperModuleName}> {
    const find${upperModuleName} = this.${pluralLowerModuleName}.findIndex(
      ${lowerModuleName} => ${lowerModuleName}.id === ${lowerModuleName}Data.id,
    );

    this.${pluralLowerModuleName}[find${upperModuleName}] = ${lowerModuleName}Data;

    return ${lowerModuleName}Data;
  }

  public async delete(${lowerModuleName}Data: IObjectDTO): Promise<void> {
    const find${upperModuleName} = this.${pluralLowerModuleName}.findIndex(
      ${lowerModuleName} => ${lowerModuleName}.id === ${lowerModuleName}Data.id,
    );

    this.${pluralLowerModuleName}.splice(find${upperModuleName}, 1);
  }

  public async softDelete(${lowerModuleName}Data: IObjectDTO): Promise<void> {
    const find${upperModuleName} = this.${pluralLowerModuleName}.findIndex(
      ${lowerModuleName} => ${lowerModuleName}.id === ${lowerModuleName}Data.id,
    );
    
    this.${pluralLowerModuleName}.splice(find${upperModuleName}, 1);
  }
}
`;
}
