import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class DeleteService {
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
import { IObjectDTO } from '@dtos/IObjectDTO';
import { IResponseDTO } from '@dtos/IResponseDTO';

@injectable()
export class Delete${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}RepositoryDTO,

    @inject('CacheProvider')
    private cacheProvider: ICacheProviderDTO,
  ) {}

  async execute(${this.names.lowerModuleName}Param: IObjectDTO): Promise<IResponseDTO<null>> {
    const ${this.names.lowerModuleName} = await this.${this.names.pluralLowerModuleName}Repository.findBy(${this.names.lowerModuleName}Param);

    if (!${this.names.lowerModuleName}) {
      throw new AppError('${this.names.upperModuleName} not found', 404);
    }

    await this.${this.names.pluralLowerModuleName}Repository.delete(${this.names.lowerModuleName});

    await this.cacheProvider.invalidatePrefix('${this.names.pluralLowerModuleName}');

    return {
      code: 204,
      message_code: 'NO_CONTENT',
      message: 'successfully deleted ${this.names.lowerModuleName}',
      data: null,
    };
  }
}
`;
  }
}
