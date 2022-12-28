export default function createIDependentRepository(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
  pluralFatherLowerModuleName: string,
): string {
  return `import ${upperModuleName} from '@modules/${pluralFatherLowerModuleName}/entities/${upperModuleName}';
import IObjectDTO from '@dtos/IObjectDTO';
import I${upperModuleName}DTO from '@modules/${pluralFatherLowerModuleName}/dtos/I${upperModuleName}DTO';

export default interface I${pluralUpperModuleName}Repository {
  findAll(
    page: number,
    limit: number,
    relations?: string[],
  ): Promise<{ ${pluralLowerModuleName}: ${upperModuleName}[]; amount: number }>;
  findBy(${lowerModuleName}Data: IObjectDTO, relations?: string[]): Promise<${upperModuleName} | null>;
  create(${lowerModuleName}Data: I${upperModuleName}DTO): Promise<${upperModuleName}>;
  save(${lowerModuleName}Data: ${upperModuleName}): Promise<${upperModuleName}>;
  delete(${lowerModuleName}Data: IObjectDTO): void;
  softDelete(${lowerModuleName}Data: IObjectDTO): void;
}
`;
}
