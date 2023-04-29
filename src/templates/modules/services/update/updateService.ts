import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class UpdateService {
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

    return `import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ICacheProviderDTO } from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import { I${this.names.pluralUpperModuleName}RepositoryDTO } from '@modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { I${this.names.upperModuleName}DTO } from '@modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { mapAndUpdateAttribute } from '@utils/mappers/mapAndUpdateAttribute';
import { ${this.names.upperModuleName} } from '@modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import { IResponseDTO } from '@dtos/IResponseDTO';
import { FindOptionsWhere } from 'typeorm';

@injectable()
export class Update${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}RepositoryDTO,

    @inject('CacheProvider')
    private cacheProvider: ICacheProviderDTO,
  ) {}

  public async execute(
    ${this.names.lowerModuleName}Param: FindOptionsWhere<${this.names.upperModuleName}>,
    ${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO,
  ): Promise<IResponseDTO<${this.names.upperModuleName}>> {
    const ${this.names.lowerModuleName} = await this.${this.names.pluralLowerModuleName}Repository.findBy(${this.names.lowerModuleName}Param);

    if (!${this.names.lowerModuleName}) {
      throw new AppError('${this.names.upperModuleName} not found', 404);
    }

    await this.${this.names.pluralLowerModuleName}Repository.update(mapAndUpdateAttribute(${this.names.lowerModuleName}, ${this.names.lowerModuleName}Data));

    await this.cacheProvider.invalidatePrefix('${this.names.pluralLowerModuleName}');

    return {
      code: 200,
      message_code: 'OK',
      message: 'successfully updated ${this.names.lowerModuleName}',
      data: instanceToInstance(${this.names.lowerModuleName}),
    };
  }
}
`;
  }
}
