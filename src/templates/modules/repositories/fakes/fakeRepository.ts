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
import IObjectDTO from '@dtos/IObjectDTO';

export default class Fake${pluralUpperModuleName}Repository implements I${pluralUpperModuleName}Repository {
  private ${pluralLowerModuleName}: ${upperModuleName}[] = [];

  public async findBy(
    ${lowerModuleName}Data: IObjectDTO | IObjectDTO[],
  ): Promise<${upperModuleName} | null> {
    let find${upperModuleName}: ${upperModuleName} | undefined;
    if (Array.isArray(${lowerModuleName}Data)) {
      for (const property of ${lowerModuleName}Data) {
        findPost = this.${pluralLowerModuleName}.find(
          (${lowerModuleName}: any) =>
            ${lowerModuleName}[Object.keys(property)[0]] ===
            property[Object.keys(property)[0]],
        );

        if (find${upperModuleName} !== undefined) {
          return find${upperModuleName};
        }
      }
    } else {
      find${upperModuleName} = this.${pluralLowerModuleName}.find(${lowerModuleName} => ${lowerModuleName}.id === ${lowerModuleName}Data.id);

      if (find${upperModuleName}) {
        return find${upperModuleName};
      }
    }
    return null;
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
