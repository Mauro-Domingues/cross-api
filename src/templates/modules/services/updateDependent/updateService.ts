import { IModuleNamesDTO } from '@tools/names';
import messages from '@tools/messages';

export class UpdateDependentService {
  private messages: typeof messages;
  private names:
    | Omit<IModuleNamesDTO, 'routeModuleName' | 'dbModuleName'>
    | undefined;
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = messages;
    this.names = names;
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    if (!this.names || !this.fatherNames) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    return `import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import I${this.names.pluralUpperModuleName}Repository from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import I${this.names.upperModuleName}DTO from '@modules/${this.fatherNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import mapAndUpdateAttribute from '@utils/mappers/mapAndUpdateAttribute';
import ${this.names.upperModuleName} from '@modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import IObjectDTO from '@dtos/IObjectDTO';
import IResponseDTO from '@dtos/IResponseDTO';

@injectable()
export default class Update${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}Repository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  async execute(
    ${this.names.lowerModuleName}Param: IObjectDTO,
    ${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO,
  ): Promise<IResponseDTO<${this.names.upperModuleName}>> {
    const ${this.names.lowerModuleName} = await this.${this.names.pluralLowerModuleName}Repository.findBy(${this.names.lowerModuleName}Param);

    if (!${this.names.lowerModuleName}) {
      throw new AppError('${this.names.upperModuleName} not found', 404);
    }

    await this.cacheProvider.invalidatePrefix('${this.names.pluralLowerModuleName}');

    await this.${this.names.pluralLowerModuleName}Repository.update(
      await mapAndUpdateAttribute(${this.names.lowerModuleName}, ${this.names.lowerModuleName}Data),
    );

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
