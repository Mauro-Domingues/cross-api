import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';

export class CreateRepository {
  private messages: IMessagesDTO;
  private names:
    | Omit<IModuleNamesDTO, 'dbModuleName' | 'routeModuleName'>
    | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.names = names;
  }

  public execute(): string {
    if (!this.names) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    return `import I${this.names.upperModuleName}DTO from '@modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { DeleteResult, Repository } from 'typeorm';

import { ${this.names.upperModuleName} } from '@modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { I${this.names.pluralUpperModuleName}RepositoryDTO } from '@modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { AppDataSource } from '@shared/typeorm/dataSource';
import { IObjectDTO } from '@dtos/IObjectDTO';

export class ${this.names.pluralUpperModuleName}Repository implements I${this.names.pluralUpperModuleName}RepositoryDTO {
  private ormRepository: Repository<${this.names.upperModuleName}>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(${this.names.upperModuleName});
  }

  public async findBy(
    ${this.names.lowerModuleName}Data: IObjectDTO | IObjectDTO[],
    relations?: string[],
  ): Promise<${this.names.upperModuleName} | null> {
    const ${this.names.lowerModuleName} = await this.ormRepository.findOne({
      where: ${this.names.lowerModuleName}Data,
      relations,
    });

    return ${this.names.lowerModuleName};
  }

  public async findAll(
    page: number,
    limit: number,
    conditions?: IObjectDTO | IObjectDTO[],
    relations?: string[],
  ): Promise<{ ${this.names.pluralLowerModuleName}: ${this.names.upperModuleName}[]; amount: number }> {
    const [${this.names.pluralLowerModuleName}, amount] = await this.ormRepository.findAndCount({
      where: conditions,
      take: limit,
      skip: (page - 1) * limit,
      relations,
    });

    return { ${this.names.pluralLowerModuleName}, amount };
  }

  public async create(${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO): Promise<${this.names.upperModuleName}> {
    const ${this.names.lowerModuleName} = this.ormRepository.create(${this.names.lowerModuleName}Data);

    await this.ormRepository.save(${this.names.lowerModuleName});

    return ${this.names.lowerModuleName};
  }

  public async update(${this.names.lowerModuleName}Data: ${this.names.upperModuleName}): Promise<${this.names.upperModuleName}> {
    return this.ormRepository.save(${this.names.lowerModuleName}Data);
  }

  public async delete(${this.names.lowerModuleName}Data: ${this.names.upperModuleName} | IObjectDTO): Promise<DeleteResult> {
    if (${this.names.lowerModuleName}Data instanceof ${this.names.upperModuleName}) {
      return this.ormRepository.delete({ id: ${this.names.lowerModuleName}Data.id });
    }
    return this.ormRepository.delete(${this.names.lowerModuleName}Data);
  }

  public async softDelete(${this.names.lowerModuleName}Data: ${this.names.upperModuleName} | IObjectDTO): Promise<DeleteResult> {
    if (${this.names.lowerModuleName}Data instanceof ${this.names.upperModuleName}) {
      return this.ormRepository.softDelete({ id: ${this.names.lowerModuleName}Data.id });
    }
    return this.ormRepository.softDelete(${this.names.lowerModuleName}Data);
  }
}
`;
  }
}
