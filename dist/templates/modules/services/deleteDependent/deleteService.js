"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteDependentService = void 0;
var _messages = require("../../../../../dist/tools/messages");
class DeleteDependentService {
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
exports.DeleteDependentService = DeleteDependentService;