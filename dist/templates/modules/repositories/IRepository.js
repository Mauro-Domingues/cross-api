"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createIRepository;
function createIRepository(lowerModuleName, upperModuleName, pluralLowerModuleName, pluralUpperModuleName) {
  return `import ${upperModuleName} from '@modules/${pluralLowerModuleName}/entities/${upperModuleName}';
import IObjectDTO from '@dtos/IObjectDTO';
import I${upperModuleName}DTO from '@modules/${pluralLowerModuleName}/dtos/I${upperModuleName}DTO';

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
  delete(${lowerModuleName}Data: IObjectDTO): void;
  softDelete(${lowerModuleName}Data: IObjectDTO): void;
}
`;
}