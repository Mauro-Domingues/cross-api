export default function createIRepository(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import ${upperModuleName} from '@modules/${pluralLowerModuleName}/entities/${upperModuleName}';
import I${upperModuleName}DTO from '@modules/${pluralLowerModuleName}/dtos/I${upperModuleName}DTO';
import { DeleteResult } from 'typeorm';

export default interface I${pluralUpperModuleName}Repository {
  findAll(
    page: number,
    limit: number,
    conditions?: IObjectDTO | IObjectDTO[],
    relations?: string[],
  ): Promise<{ ${pluralLowerModuleName}: ${upperModuleName}[]; amount: number }>;
  findBy(
    ${lowerModuleName}Data: IObjectDTO | IObjectDTO[],
    relations?: string[],
  ): Promise<${upperModuleName} | null>;
  create(${lowerModuleName}Data: I${upperModuleName}DTO): Promise<${upperModuleName}>;
  update(${lowerModuleName}Data: ${upperModuleName}): Promise<${upperModuleName}>;
  delete(${lowerModuleName}Data: ${upperModuleName} | IObjectDTO): Promise<DeleteResult | void>;
  softDelete(${lowerModuleName}Data: ${upperModuleName} | IObjectDTO): Promise<DeleteResult | void>;
}
`;
}
