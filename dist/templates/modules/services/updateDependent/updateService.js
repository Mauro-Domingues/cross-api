"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateDependentService = void 0;
var _messages = require("../../../../../dist/tools/messages");
class UpdateDependentService {
  constructor(names, fatherNames) {
    this.messages = void 0;
    this.names = void 0;
    this.fatherNames = void 0;
    this.messages = new _messages.Messages().execute();
    this.names = names;
    this.fatherNames = fatherNames;
  }
  execute() {
    if (!this.names || !this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    return `import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ICacheProviderDTO } from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import { I${this.names.pluralUpperModuleName}RepositoryDTO } from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { I${this.names.upperModuleName}DTO } from '@modules/${this.fatherNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { mapAndUpdateAttribute } from '@utils/mappers/mapAndUpdateAttribute';
import { ${this.names.upperModuleName} } from '@modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { instanceToInstance } from 'class-transformer';
import { IObjectDTO } from '@dtos/IObjectDTO';
import { IResponseDTO } from '@dtos/IResponseDTO';

@injectable()
export class Update${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}RepositoryDTO,

    @inject('CacheProvider')
    private cacheProvider: ICacheProviderDTO,
  ) {}

  async execute(
    ${this.names.lowerModuleName}Param: IObjectDTO,
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
exports.UpdateDependentService = UpdateDependentService;