import { IModuleNamesDTO } from 'index';

export function createFakeRepository(
  names: Omit<IModuleNamesDTO, 'dbModuleName' | 'dbModuleName'>,
): string {
  return `/* eslint-disable @typescript-eslint/no-explicit-any */
import IObjectDTO from '@dtos/IObjectDTO';
import I${names.upperModuleName}DTO from '@modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO';
import ${names.upperModuleName} from '@modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}';
import I${names.pluralUpperModuleName}Repository from '@modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository';
import { v4 as uuid } from 'uuid';

export default class Fake${names.pluralUpperModuleName}Repository implements I${names.pluralUpperModuleName}Repository {
  private ${names.pluralLowerModuleName}: ${names.upperModuleName}[] = [];

  public async findBy(
    ${names.lowerModuleName}Data: IObjectDTO | IObjectDTO[],
  ): Promise<${names.upperModuleName} | null> {
    let find${names.upperModuleName}: ${names.upperModuleName} | undefined;
    if (${names.lowerModuleName}Data && Array.isArray(${names.lowerModuleName}Data)) {
      ${names.lowerModuleName}Data.forEach((data: IObjectDTO) => {
        Object.keys(data).forEach((key: string) => {
          find${names.upperModuleName} = this.${names.pluralLowerModuleName}.find(
            (${names.lowerModuleName}: any) => ${names.lowerModuleName}[key] === data[key],
          );
        });
      });
    } else if (${names.lowerModuleName}Data) {
      Object.keys(${names.lowerModuleName}Data).forEach((key: string) => {
        find${names.upperModuleName} = this.${names.pluralLowerModuleName}.find(
          (${names.lowerModuleName}: any) => ${names.lowerModuleName}[key] === ${names.lowerModuleName}Data[key],
        );
      });
    }

    if (!find${names.upperModuleName}) {
      return null;
    }
    return find${names.upperModuleName};
  }

  public async findAll(
    page: number,
    limit: number,
    conditions?: IObjectDTO | IObjectDTO[],
  ): Promise<{ ${names.pluralLowerModuleName}: ${names.upperModuleName}[]; amount: number }> {
    const filter${names.pluralUpperModuleName}: ${names.upperModuleName}[] = [];
    if (conditions && Array.isArray(conditions)) {
      conditions.forEach((condition: IObjectDTO) => {
        Object.keys(condition).forEach((key: string) => {
          const applyFilter: ${names.upperModuleName}[] = this.${names.pluralLowerModuleName}.filter(
            (${names.lowerModuleName}: any) => ${names.lowerModuleName}[key] === condition[key],
          );

          applyFilter.forEach((${names.lowerModuleName}: ${names.upperModuleName}) => filter${names.pluralUpperModuleName}.push(${names.lowerModuleName}));
        });
      });
    } else if (conditions) {
      let applyFilter: ${names.upperModuleName}[] = this.${names.pluralLowerModuleName};
      Object.keys(conditions).forEach((key: string) => {
        applyFilter = applyFilter.filter(
          (${names.lowerModuleName}: any) => ${names.lowerModuleName}[key] === conditions[key],
        );
      });

      applyFilter.forEach((${names.lowerModuleName}: ${names.upperModuleName}) => filter${names.pluralUpperModuleName}.push(${names.lowerModuleName}));
    } else {
      this.${names.pluralLowerModuleName}.forEach((${names.lowerModuleName}: ${names.upperModuleName}) => filter${names.pluralUpperModuleName}.push(${names.lowerModuleName}));
    }

    const filtred${names.pluralUpperModuleName} = filter${names.pluralUpperModuleName}.slice((page - 1) * limit, page * limit);

    return { ${names.pluralLowerModuleName}: filtred${names.pluralUpperModuleName}, amount: filter${names.pluralUpperModuleName}.length };
  }

  public async create(${names.lowerModuleName}Data: I${names.upperModuleName}DTO): Promise<${names.upperModuleName}> {
    const ${names.lowerModuleName}: ${names.upperModuleName} = new ${names.upperModuleName}();

    Object.assign(${names.lowerModuleName}, { id: uuid() }, ${names.lowerModuleName}Data);
    this.${names.pluralLowerModuleName}.push(${names.lowerModuleName});

    return ${names.lowerModuleName};
  }

  public async update(${names.lowerModuleName}Data: ${names.upperModuleName}): Promise<${names.upperModuleName}> {
    const find${names.upperModuleName}: number = this.${names.pluralLowerModuleName}.findIndex(
      ${names.lowerModuleName} => ${names.lowerModuleName}.id === ${names.lowerModuleName}Data.id,
    );

    this.${names.pluralLowerModuleName}[find${names.upperModuleName}] = ${names.lowerModuleName}Data;

    return ${names.lowerModuleName}Data;
  }

  public async delete(${names.lowerModuleName}Data: ${names.upperModuleName} | IObjectDTO): Promise<void> {
    if (${names.lowerModuleName}Data instanceof ${names.upperModuleName}) {
      const find${names.upperModuleName}: number = this.${names.pluralLowerModuleName}.findIndex(
        ${names.lowerModuleName} => ${names.lowerModuleName}.id === ${names.lowerModuleName}Data.id,
      );

      this.${names.pluralLowerModuleName}.splice(find${names.upperModuleName}, 1);
    } else {
      Object.keys(${names.lowerModuleName}Data).forEach((key: string) => {
        const find${names.upperModuleName}: ${names.upperModuleName}[] = this.${names.pluralLowerModuleName}.filter(
          (${names.lowerModuleName}: any) => ${names.lowerModuleName}[key] === ${names.lowerModuleName}Data[key],
        );

        find${names.upperModuleName}.forEach(each${names.upperModuleName} => {
          const ${names.lowerModuleName}Index: number = this.${names.pluralLowerModuleName}.findIndex(
            ${names.lowerModuleName} => ${names.lowerModuleName}.id === each${names.upperModuleName}.id,
          );

          this.${names.pluralLowerModuleName}.splice(${names.lowerModuleName}Index, 1);
        });
      });
    }
  }

  public async softDelete(${names.lowerModuleName}Data: ${names.upperModuleName} | IObjectDTO): Promise<void> {
    if (${names.lowerModuleName}Data instanceof ${names.upperModuleName}) {
      const find${names.upperModuleName}: number = this.${names.pluralLowerModuleName}.findIndex(
        (${names.lowerModuleName}: any) => ${names.lowerModuleName}.id === ${names.lowerModuleName}Data.id,
      );

      this.${names.pluralLowerModuleName}[find${names.upperModuleName}].deleted_at = new Date();
    } else {
      Object.keys(${names.lowerModuleName}Data).forEach((key: string) => {
        const find${names.upperModuleName}: ${names.upperModuleName}[] = this.${names.pluralLowerModuleName}.filter(
          (${names.lowerModuleName}: any) => ${names.lowerModuleName}[key] === ${names.lowerModuleName}Data[key],
        );

        find${names.upperModuleName}.forEach(each${names.upperModuleName} => {
          const ${names.lowerModuleName}Index: number = this.${names.pluralLowerModuleName}.findIndex(
            ${names.lowerModuleName} => ${names.lowerModuleName}.id === each${names.upperModuleName}.id,
          );

          this.${names.pluralLowerModuleName}[${names.lowerModuleName}Index].deleted_at = new Date();
        });
      });
    }
  }
}
`;
}
