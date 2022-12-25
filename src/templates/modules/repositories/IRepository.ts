export default function createIRepository(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import ${upperModuleName} from '@modules/${pluralLowerModuleName}/entities/${upperModuleName}';
import I${upperModuleName}DTO from '../dtos/I${upperModuleName}DTO';

export default interface I${pluralUpperModuleName}Repository {
  findAll(
    page: number,
    limit: number,
    relations?: string[],
  ): Promise<[${upperModuleName}[], number]>;
  findBy(
    ${lowerModuleName}Data: { [key: string]: string },
    relations?: string[],
  ): Promise<${upperModuleName} | null>;
  create(${lowerModuleName}Data: I${upperModuleName}DTO): Promise<${upperModuleName}>;
  save(${lowerModuleName}Data: ${upperModuleName}): Promise<${upperModuleName}>;
  delete(${lowerModuleName}Data: { [key: string]: string }): void;
  softDelete(${lowerModuleName}Data: { [key: string]: string }): void;
}
`;
}
