"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIRepository = createIRepository;
function createIRepository(names) {
  return `import ${names.upperModuleName} from '@modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}';
import I${names.upperModuleName}DTO from '@modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO';
import { DeleteResult } from 'typeorm';
import IObjectDTO from '@dtos/IObjectDTO';

export default interface I${names.pluralUpperModuleName}Repository {
  findAll(
    page: number,
    limit: number,
    conditions?: IObjectDTO | IObjectDTO[],
    relations?: string[],
  ): Promise<{ ${names.pluralLowerModuleName}: ${names.upperModuleName}[]; amount: number }>;
  findBy(
    ${names.lowerModuleName}Data: IObjectDTO | IObjectDTO[],
    relations?: string[],
  ): Promise<${names.upperModuleName} | null>;
  create(${names.lowerModuleName}Data: I${names.upperModuleName}DTO): Promise<${names.upperModuleName}>;
  update(${names.lowerModuleName}Data: ${names.upperModuleName}): Promise<${names.upperModuleName}>;
  delete(${names.lowerModuleName}Data: ${names.upperModuleName} | IObjectDTO): Promise<DeleteResult | void>;
  softDelete(${names.lowerModuleName}Data: ${names.upperModuleName} | IObjectDTO): Promise<DeleteResult | void>;
}
`;
}