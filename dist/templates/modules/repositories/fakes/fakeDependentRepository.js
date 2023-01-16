"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDependentFakeRepository;
function createDependentFakeRepository(lowerModuleName, upperModuleName, pluralLowerModuleName, pluralUpperModuleName, pluralFatherLowerModuleName) {
  return `/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
import I${upperModuleName}DTO from '@modules/${pluralFatherLowerModuleName}/dtos/I${upperModuleName}DTO';
import ${upperModuleName} from '@modules/${pluralFatherLowerModuleName}/entities/${upperModuleName}';
import I${pluralUpperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import { v4 as uuid } from 'uuid';
import IObjectDTO from '@dtos/IObjectDTO';

export default class Fake${pluralUpperModuleName}Repository implements I${pluralUpperModuleName}Repository {
  private ${pluralLowerModuleName}: ${upperModuleName}[] = [];

  public async findBy(
    ${lowerModuleName}Data: IObjectDTO | IObjectDTO[],
  ): Promise<${upperModuleName} | null> {
    let find${upperModuleName}: ${upperModuleName} | ${upperModuleName}[] | undefined;
    if (${lowerModuleName}Data && Array.isArray(${lowerModuleName}Data)) {
      for (const property of ${lowerModuleName}Data) {
        find${upperModuleName} = this.${pluralLowerModuleName}.find(
          (${lowerModuleName}: any) =>
            ${lowerModuleName}[Object.keys(property)[0]] ===
            property[Object.keys(property)[0]],
        );

        if (find${upperModuleName} !== undefined) {
          return find${upperModuleName};
        }
      }
    } else if (${lowerModuleName}Data) {
      for (const key in ${lowerModuleName}Data) {
        find${upperModuleName} = this.${pluralLowerModuleName}.filter(
          (${lowerModuleName}: any) => ${lowerModuleName}[key] === ${lowerModuleName}Data[key],
        );
      }

      find${upperModuleName} = this.${pluralLowerModuleName}.find(${lowerModuleName} => ${lowerModuleName});

      if (find${upperModuleName}) {
        return find${upperModuleName};
      }
    }

    return null;
  }

  public async findAll(
    page: number,
    limit: number,
    conditions?: IObjectDTO | IObjectDTO[],
  ): Promise<{ ${pluralLowerModuleName}: ${upperModuleName}[]; amount: number }> {
    let filter${upperModuleName}: ${upperModuleName}[] | undefined;
    if (conditions && Array.isArray(conditions)) {
      for (const property of conditions) {
        filter${upperModuleName} = this.${pluralLowerModuleName}.filter(
          (${lowerModuleName}: any) =>
            ${lowerModuleName}[Object.keys(property)[0]] ===
            property[Object.keys(property)[0]],
        );

        if (filter${upperModuleName} !== undefined) {
          return { ${pluralLowerModuleName}: filter${upperModuleName}, amount: filter${upperModuleName}.length };
        }
      }
    } else if (conditions) {
      for (const key in conditions) {
        filter${upperModuleName} = this.${pluralLowerModuleName}.filter(
          (${lowerModuleName}: any) => ${lowerModuleName}[key] === conditions[key],
        );
      }

      filter${upperModuleName} = this.${pluralLowerModuleName}.slice((page - 1) * limit, page * limit);

      return { ${pluralLowerModuleName}: filter${upperModuleName}, amount: filter${upperModuleName}.length };
    }

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