import { Messages } from '../../../../tools/messages.js';
import { Console } from '../../../../tools/console.js';
export class CreateFakeRepository {
    messages;
    console;
    names;
    constructor(names) {
        this.messages = new Messages().execute();
        this.console = new Console();
        this.names = names;
    }
    execute() {
        if (!this.names) {
            this.console.one([
                this.messages.moduleNotFound,
                'red',
                true,
                false,
                false,
            ]);
            throw new Error();
        }
        return `/* eslint-disable @typescript-eslint/no-explicit-any */
import { IObjectDTO } from '@dtos/IObjectDTO';
import { I${this.names.upperModuleName}DTO } from '@modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { ${this.names.upperModuleName} } from '@modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { I${this.names.pluralUpperModuleName}RepositoryDTO } from '@modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { v4 as uuid } from 'uuid';

export class Fake${this.names.pluralUpperModuleName}Repository implements I${this.names.pluralUpperModuleName}RepositoryDTO {
  private ${this.names.pluralLowerModuleName}: ${this.names.upperModuleName}[] = [];

  public async findBy(
    ${this.names.lowerModuleName}Data: IObjectDTO | IObjectDTO[],
  ): Promise<${this.names.upperModuleName} | null> {
    let find${this.names.upperModuleName}: ${this.names.upperModuleName} | undefined;
    if (${this.names.lowerModuleName}Data && Array.isArray(${this.names.lowerModuleName}Data)) {
      ${this.names.lowerModuleName}Data.forEach((data: IObjectDTO) => {
        Object.keys(data).forEach((key: string) => {
          find${this.names.upperModuleName} = this.${this.names.pluralLowerModuleName}.find(
            (${this.names.lowerModuleName}: any) => ${this.names.lowerModuleName}[key] === data[key],
          );
        });
      });
    } else if (${this.names.lowerModuleName}Data) {
      Object.keys(${this.names.lowerModuleName}Data).forEach((key: string) => {
        find${this.names.upperModuleName} = this.${this.names.pluralLowerModuleName}.find(
          (${this.names.lowerModuleName}: any) => ${this.names.lowerModuleName}[key] === ${this.names.lowerModuleName}Data[key],
        );
      });
    }

    if (!find${this.names.upperModuleName}) {
      return null;
    }
    return find${this.names.upperModuleName};
  }

  public async findAll(
    page: number,
    limit: number,
    conditions?: IObjectDTO | IObjectDTO[],
  ): Promise<{ ${this.names.pluralLowerModuleName}: ${this.names.upperModuleName}[]; amount: number }> {
    const filter${this.names.pluralUpperModuleName}: ${this.names.upperModuleName}[] = [];
    if (conditions && Array.isArray(conditions)) {
      conditions.forEach((condition: IObjectDTO) => {
        Object.keys(condition).forEach((key: string) => {
          const applyFilter: ${this.names.upperModuleName}[] = this.${this.names.pluralLowerModuleName}.filter(
            (${this.names.lowerModuleName}: any) => ${this.names.lowerModuleName}[key] === condition[key],
          );

          applyFilter.forEach((${this.names.lowerModuleName}: ${this.names.upperModuleName}) => filter${this.names.pluralUpperModuleName}.push(${this.names.lowerModuleName}));
        });
      });
    } else if (conditions) {
      let applyFilter: ${this.names.upperModuleName}[] = this.${this.names.pluralLowerModuleName};
      Object.keys(conditions).forEach((key: string) => {
        applyFilter = applyFilter.filter(
          (${this.names.lowerModuleName}: any) => ${this.names.lowerModuleName}[key] === conditions[key],
        );
      });

      applyFilter.forEach((${this.names.lowerModuleName}: ${this.names.upperModuleName}) => filter${this.names.pluralUpperModuleName}.push(${this.names.lowerModuleName}));
    } else {
      this.${this.names.pluralLowerModuleName}.forEach((${this.names.lowerModuleName}: ${this.names.upperModuleName}) => filter${this.names.pluralUpperModuleName}.push(${this.names.lowerModuleName}));
    }

    const filtred${this.names.pluralUpperModuleName} = filter${this.names.pluralUpperModuleName}.slice((page - 1) * limit, page * limit);

    return { ${this.names.pluralLowerModuleName}: filtred${this.names.pluralUpperModuleName}, amount: filter${this.names.pluralUpperModuleName}.length };
  }

  public async create(${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO): Promise<${this.names.upperModuleName}> {
    const ${this.names.lowerModuleName}: ${this.names.upperModuleName} = new ${this.names.upperModuleName}();

    Object.assign(${this.names.lowerModuleName}, { id: uuid() }, ${this.names.lowerModuleName}Data);
    this.${this.names.pluralLowerModuleName}.push(${this.names.lowerModuleName});

    return ${this.names.lowerModuleName};
  }

  public async update(${this.names.lowerModuleName}Data: ${this.names.upperModuleName}): Promise<${this.names.upperModuleName}> {
    const find${this.names.upperModuleName}: number = this.${this.names.pluralLowerModuleName}.findIndex(
      ${this.names.lowerModuleName} => ${this.names.lowerModuleName}.id === ${this.names.lowerModuleName}Data.id,
    );

    this.${this.names.pluralLowerModuleName}[find${this.names.upperModuleName}] = ${this.names.lowerModuleName}Data;

    return ${this.names.lowerModuleName}Data;
  }

  public async delete(${this.names.lowerModuleName}Data: ${this.names.upperModuleName} | IObjectDTO): Promise<void> {
    if (${this.names.lowerModuleName}Data instanceof ${this.names.upperModuleName}) {
      const find${this.names.upperModuleName}: number = this.${this.names.pluralLowerModuleName}.findIndex(
        ${this.names.lowerModuleName} => ${this.names.lowerModuleName}.id === ${this.names.lowerModuleName}Data.id,
      );

      this.${this.names.pluralLowerModuleName}.splice(find${this.names.upperModuleName}, 1);
    } else {
      Object.keys(${this.names.lowerModuleName}Data).forEach((key: string) => {
        const find${this.names.upperModuleName}: ${this.names.upperModuleName}[] = this.${this.names.pluralLowerModuleName}.filter(
          (${this.names.lowerModuleName}: any) => ${this.names.lowerModuleName}[key] === ${this.names.lowerModuleName}Data[key],
        );

        find${this.names.upperModuleName}.forEach(each${this.names.upperModuleName} => {
          const ${this.names.lowerModuleName}Index: number = this.${this.names.pluralLowerModuleName}.findIndex(
            ${this.names.lowerModuleName} => ${this.names.lowerModuleName}.id === each${this.names.upperModuleName}.id,
          );

          this.${this.names.pluralLowerModuleName}.splice(${this.names.lowerModuleName}Index, 1);
        });
      });
    }
  }

  public async softDelete(${this.names.lowerModuleName}Data: ${this.names.upperModuleName} | IObjectDTO): Promise<void> {
    if (${this.names.lowerModuleName}Data instanceof ${this.names.upperModuleName}) {
      const find${this.names.upperModuleName}: number = this.${this.names.pluralLowerModuleName}.findIndex(
        (${this.names.lowerModuleName}: any) => ${this.names.lowerModuleName}.id === ${this.names.lowerModuleName}Data.id,
      );

      this.${this.names.pluralLowerModuleName}[find${this.names.upperModuleName}].deleted_at = new Date();
    } else {
      Object.keys(${this.names.lowerModuleName}Data).forEach((key: string) => {
        const find${this.names.upperModuleName}: ${this.names.upperModuleName}[] = this.${this.names.pluralLowerModuleName}.filter(
          (${this.names.lowerModuleName}: any) => ${this.names.lowerModuleName}[key] === ${this.names.lowerModuleName}Data[key],
        );

        find${this.names.upperModuleName}.forEach(each${this.names.upperModuleName} => {
          const ${this.names.lowerModuleName}Index: number = this.${this.names.pluralLowerModuleName}.findIndex(
            ${this.names.lowerModuleName} => ${this.names.lowerModuleName}.id === each${this.names.upperModuleName}.id,
          );

          this.${this.names.pluralLowerModuleName}[${this.names.lowerModuleName}Index].deleted_at = new Date();
        });
      });
    }
  }
}
`;
    }
}
