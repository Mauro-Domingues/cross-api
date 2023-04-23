import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class CreateIRepository {
  private messages: IMessagesDTO;
  private console: Console;
  private names:
    | Omit<IModuleNamesDTO, 'dbModuleName' | 'routeModuleName'>
    | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
  }

  public execute(): string {
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
