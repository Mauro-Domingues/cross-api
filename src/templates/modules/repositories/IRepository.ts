export default function createIRepository(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import I${upperModuleName}DTO from '../dtos/I${upperModuleName}DTO';
import ${upperModuleName} from '@modules/${pluralLowerModuleName}/entities/${upperModuleName}';

export default interface I${pluralUpperModuleName}Repository {
  findAll(page: number, limit: number, relations?: string[]): Promise<[${upperModuleName}[], number]>;
  findBy(data: {[key: string]: string}, relations?: string[]): Promise<${upperModuleName} | null>;
  create(${lowerModuleName}Data: I${upperModuleName}DTO): Promise<${upperModuleName}>;
  save(${lowerModuleName}Data: ${upperModuleName}): Promise<${upperModuleName}>;
  delete(data: {[key: string]: string}): void;
  softDelete(data: {[key: string]: string}): void;
}
`;
}
