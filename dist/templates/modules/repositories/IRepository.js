import { Messages } from '../../../tools/messages';
export class CreateIRepository {
    messages;
    names;
    constructor(names) {
        this.messages = new Messages().execute();
        this.names = names;
    }
    execute() {
        if (!this.names) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        return `import { ${this.names.upperModuleName} } from '@modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { I${this.names.upperModuleName}DTO } from '@modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { DeleteResult } from 'typeorm';
import { IObjectDTO } from '@dtos/IObjectDTO';

export interface I${this.names.pluralUpperModuleName}RepositoryDTO {
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
