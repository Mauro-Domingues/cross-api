export default function createFakeRepository(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import I${upperModuleName}DTO from '@modules/${pluralLowerModuleName}/dtos/I${upperModuleName}DTO';
import ${upperModuleName} from '@modules/${pluralLowerModuleName}/entities/${upperModuleName}';
import I${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import { v4 as uuid } from 'uuid';

export default class Fake${pluralUpperModuleName}Repository implements I${pluralUpperModuleName}Repository {
  private ${pluralLowerModuleName}: ${upperModuleName}[] = [];

  public async findBy(data: {[key: string]: string}): Promise<${upperModuleName} | null> {
    const find${upperModuleName} = this.${pluralLowerModuleName}.find(${lowerModuleName} => ${lowerModuleName}.id === data.id);
    return find${upperModuleName} || null;
  }

  public async findAll(page: number, limit: number): Promise<[${upperModuleName}[], number]> {
    const find${upperModuleName} = this.${pluralLowerModuleName}.slice((page - 1) * limit, page * limit);

    return [find${upperModuleName}, find${upperModuleName}.length];
  }

  public async create(${lowerModuleName}Data: I${upperModuleName}DTO): Promise<${upperModuleName}> {
    const ${lowerModuleName} = new ${upperModuleName}();

    Object.assign(${lowerModuleName}, { id: uuid() }, ${lowerModuleName}Data);
    this.${pluralLowerModuleName}.push(${lowerModuleName});

    return ${lowerModuleName};
  }

  public async save(${lowerModuleName}Data: ${upperModuleName}): Promise<${upperModuleName}> {
    const find${upperModuleName} = this.${pluralLowerModuleName}.findIndex(${lowerModuleName} => ${lowerModuleName}.id === ${lowerModuleName}Data.id);

    this.${pluralLowerModuleName}[find${upperModuleName}] = ${lowerModuleName}Data;

    return ${lowerModuleName}Data;
  }

  public async delete(data: {[key: string]: string}): Promise<void> {
    const find${upperModuleName} = this.${pluralLowerModuleName}.findIndex(${lowerModuleName} => ${lowerModuleName}.id === data.id);
    this.${pluralLowerModuleName}.splice(find${upperModuleName}, 1);
  }

  public async softDelete(data: {[key: string]: string}): Promise<void> {
    const find${upperModuleName} = this.${pluralLowerModuleName}.findIndex(${lowerModuleName} => ${lowerModuleName}.id === data.id);
    this.${pluralLowerModuleName}.splice(find${upperModuleName}, 1);
  }
}
`;
}
