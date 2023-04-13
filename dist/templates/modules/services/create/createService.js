import { Messages } from '../../../../tools/messages.js';

export class CreateService {
  messages;
  names;
  constructor(names) {
    this.messages = new Messages().execute();
    this.names = names;
  }
  execute() {
    if (!this.names) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }
    return `import { injectable, inject } from 'tsyringe';

import { ICacheProviderDTO } from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import { I${this.names.pluralUpperModuleName}RepositoryDTO } from '@modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { I${this.names.upperModuleName}DTO } from '@modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { ${this.names.upperModuleName} } from '@modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import { IResponseDTO } from '@dtos/IResponseDTO';

@injectable()
export class Create${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}RepositoryDTO,

    @inject('CacheProvider')
    private cacheProvider: ICacheProviderDTO,
  ) {}

  async execute(${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO): Promise<IResponseDTO<${this.names.upperModuleName}>> {
    const ${this.names.lowerModuleName} = await this.${this.names.pluralLowerModuleName}Repository.create(${this.names.lowerModuleName}Data);

    await this.cacheProvider.invalidatePrefix('${this.names.pluralLowerModuleName}');

    return {
      code: 201,
      message_code: 'CREATED',
      message: '${this.names.upperModuleName} successfully created',
      data: instanceToInstance(${this.names.lowerModuleName}),
    };
  }
}
`;
  }
}
