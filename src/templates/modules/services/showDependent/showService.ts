import { IModuleNamesDTO } from '@tools/names';

export class ShowDependentService {
  private names: Omit<IModuleNamesDTO, 'routeModuleName' | 'dbModuleName'>;
  private fatherNames: Pick<IModuleNamesDTO, 'pluralLowerModuleName'>;

  constructor(names: IModuleNamesDTO, fatherNames: IModuleNamesDTO) {
    this.names = names;
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    return `import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import I${this.names.pluralUpperModuleName}Repository from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import ${this.names.upperModuleName} from '@modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import IObjectDTO from '@dtos/IObjectDTO';
import IResponseDTO from '@dtos/IResponseDTO';

@injectable()
export default class Show${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}Repository,
  ) {}

  async execute(${this.names.lowerModuleName}Param: IObjectDTO): Promise<IResponseDTO<${this.names.upperModuleName}>> {
    const ${this.names.lowerModuleName} = await this.${this.names.pluralLowerModuleName}Repository.findBy(${this.names.lowerModuleName}Param, []);

    if (!${this.names.lowerModuleName}) {
      throw new AppError('${this.names.upperModuleName} not found', 404);
    }

    return {
      code: 200,
      message_code: 'OK',
      message: '${this.names.upperModuleName} found successfully',
      data: instanceToInstance(${this.names.lowerModuleName}),
    };
  }
}
`;
  }
}
