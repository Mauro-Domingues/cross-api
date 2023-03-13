import { IModuleNamesDTO } from 'index';

export class CreateDependentService {
  private names: Omit<IModuleNamesDTO, 'dbModuleName' | 'routeModuleName'>;
  private fatherNames: Pick<IModuleNamesDTO, 'pluralLowerModuleName'>;

  constructor(names: IModuleNamesDTO, fatherNames: IModuleNamesDTO) {
    this.names = names;
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    return `import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import I${this.names.pluralUpperModuleName}Repository from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import I${this.names.upperModuleName}DTO from '@modules/${this.fatherNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import ${this.names.upperModuleName} from '@modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import IResponseDTO from '@dtos/IResponseDTO';

@injectable()
export default class Create${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
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
