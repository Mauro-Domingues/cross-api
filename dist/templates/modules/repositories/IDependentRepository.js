"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIDependentRepository = void 0;
const messages_1 = require("@tools/messages");
class CreateIDependentRepository {
    constructor(names, fatherNames) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
        this.fatherNames = fatherNames;
    }
    execute() {
        if (!this.names || !this.fatherNames) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        return `import ${this.names.upperModuleName} from '@modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import I${this.names.upperModuleName}DTO from '@modules/${this.fatherNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { DeleteResult } from 'typeorm';
import IObjectDTO from '@dtos/IObjectDTO';

export default interface I${this.names.pluralUpperModuleName}Repository {
  findAll(
    page: number,
    limit: number,
    conditions?: IObjectDTO | IObjectDTO[],
    relations?: string[],
  ): Promise<{ ${this.names.pluralLowerModuleName}: ${this.names.upperModuleName}[]; amount: number }>;
  findBy(
    ${this.names.lowerModuleName}Data: IObjectDTO | IObjectDTO[],
    relations?: string[],
  ): Promise<${this.names.upperModuleName} | null>;
  create(${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO): Promise<${this.names.upperModuleName}>;
  update(${this.names.lowerModuleName}Data: ${this.names.upperModuleName}): Promise<${this.names.upperModuleName}>;
  delete(${this.names.lowerModuleName}Data: ${this.names.upperModuleName} | IObjectDTO): Promise<DeleteResult | void>;
  softDelete(${this.names.lowerModuleName}Data: ${this.names.upperModuleName} | IObjectDTO): Promise<DeleteResult | void>;
}
`;
    }
}
exports.CreateIDependentRepository = CreateIDependentRepository;
