"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFakeRepository;
function createFakeRepository(lowerModuleName, upperModuleName, pluralLowerModuleName, pluralUpperModuleName) {
  return `/* eslint-disable @typescript-eslint/no-explicit-any */
import IObjectDTO from '@dtos/IObjectDTO';
import I${upperModuleName}DTO from '@modules/${pluralLowerModuleName}/dtos/I${upperModuleName}DTO';
import ${upperModuleName} from '@modules/${pluralLowerModuleName}/entities/${upperModuleName}';
import I${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import { v4 as uuid } from 'uuid';

export default class Fake${pluralUpperModuleName}Repository implements I${pluralUpperModuleName}Repository {
  private ${pluralLowerModuleName}: ${upperModuleName}[] = [];

  public async findBy(
    ${lowerModuleName}Data: IObjectDTO | IObjectDTO[],
  ): Promise<${upperModuleName} | null> {
    let find${upperModuleName}: ${upperModuleName} | undefined
    if (${lowerModuleName}Data && Array.isArray(${lowerModuleName}Data)) {
      ${lowerModuleName}Data.forEach((data: IObjectDTO) => {
        Object.keys(data).forEach((key: string) => {
          find${upperModuleName} = this.${pluralLowerModuleName}.find(
            (${lowerModuleName}: any) => ${lowerModuleName}[key] === data[key],
          );
        });
      });
    } else if (${lowerModuleName}Data) {
      Object.keys(${lowerModuleName}Data).forEach((key: string) => {
        find${upperModuleName} = this.${pluralLowerModuleName}.find(
          (${lowerModuleName}: any) => ${lowerModuleName}[key] === ${lowerModuleName}Data[key],
        );
      });
    }

    if (!find${upperModuleName}) {
      return null;
    }
    return find${upperModuleName};
  }

  public async findAll(
    page: number,
    limit: number,
    conditions?: IObjectDTO | IObjectDTO[],
  ): Promise<{ ${pluralLowerModuleName}: ${upperModuleName}[]; amount: number }> {
    const filter${pluralUpperModuleName}: ${upperModuleName}[] = [];
    if (conditions && Array.isArray(conditions)) {
      conditions.forEach((condition: IObjectDTO) => {
        Object.keys(condition).forEach((key: string) => {
          const applyFilter: ${upperModuleName}[] = this.${pluralLowerModuleName}.filter(
            (${lowerModuleName}: any) => ${lowerModuleName}[key] === condition[key],
          );

          applyFilter.forEach((${lowerModuleName}: ${upperModuleName}) => filter${pluralUpperModuleName}.push(${lowerModuleName}));
        });
      });
    } else if (conditions) {
      Object.keys(conditions).forEach((key: string) => {
        const applyFilter: ${upperModuleName}[] = this.${pluralLowerModuleName}.filter(
          (${lowerModuleName}: any) => ${lowerModuleName}[key] === conditions[key],
        );

        applyFilter.forEach((${lowerModuleName}: ${upperModuleName}) => filter${pluralUpperModuleName}.push(${lowerModuleName}));
      });
    } else {
      this.${pluralLowerModuleName}.forEach((${lowerModuleName}: ${upperModuleName}) => filter${pluralUpperModuleName}.push(${lowerModuleName}));
    }

    filter${pluralUpperModuleName}.slice((page - 1) * limit, page * limit);

    return { ${pluralLowerModuleName}: filter${pluralUpperModuleName}, amount: filter${pluralUpperModuleName}.length };
  }

  public async create(${lowerModuleName}Data: I${upperModuleName}DTO): Promise<${upperModuleName}> {
    const ${lowerModuleName}: ${upperModuleName} = new ${upperModuleName}();

    Object.assign(${lowerModuleName}, { id: uuid() }, ${lowerModuleName}Data);
    this.${pluralLowerModuleName}.push(${lowerModuleName});

    return ${lowerModuleName};
  }

  public async update(${lowerModuleName}Data: ${upperModuleName}): Promise<${upperModuleName}> {
    const find${upperModuleName}: number = this.${pluralLowerModuleName}.findIndex(
      ${lowerModuleName} => ${lowerModuleName}.id === ${lowerModuleName}Data.id,
    );

    this.${pluralLowerModuleName}[find${upperModuleName}] = ${lowerModuleName}Data;

    return ${lowerModuleName}Data;
  }

  public async delete(${lowerModuleName}Data: ${upperModuleName} | IObjectDTO): Promise<void> {
    if (${lowerModuleName}Data instanceof ${upperModuleName}) {
      const find${upperModuleName}: number = this.${pluralLowerModuleName}.findIndex(
        ${lowerModuleName} => ${lowerModuleName}.id === ${lowerModuleName}Data.id,
      );

      this.${pluralLowerModuleName}.splice(find${upperModuleName}, 1);
    } else {
      Object.keys(${lowerModuleName}Data).forEach((key: string) => {
        const find${upperModuleName}: number = this.${pluralLowerModuleName}.findIndex(
          (${lowerModuleName}: any) => ${lowerModuleName}[key] === ${lowerModuleName}Data[key],
        );

        if (find${upperModuleName}) {
          this.${pluralLowerModuleName}.splice(find${upperModuleName}, 1);
        }
      });
    }
  }

  public async softDelete(${lowerModuleName}Data: ${upperModuleName} | IObjectDTO): Promise<void> {
    if (${lowerModuleName}Data instanceof ${upperModuleName}) {
      const find${upperModuleName}: number = this.${pluralLowerModuleName}.findIndex(
        (${lowerModuleName}: any) => ${lowerModuleName}.id === ${lowerModuleName}Data.id,
      );

      if (find${upperModuleName}) {
        this.${pluralLowerModuleName}[find${upperModuleName}].deleted_at = new Date();
      }
    } else {
      Object.keys(${lowerModuleName}Data).forEach((key: string) => {
        const find${upperModuleName}: number = this.${pluralLowerModuleName}.findIndex(
          (${lowerModuleName}: any) => ${lowerModuleName}[key] === ${lowerModuleName}Data[key],
        );

        if (find${upperModuleName}) {
          this.${pluralLowerModuleName}[find${upperModuleName}].deleted_at = new Date();
        }
      });
    }
  }
}
`;
}