"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowService = void 0;
const messages_1 = require("@tools/messages");
class ShowService {
    constructor(names) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
    }
    execute() {
        if (!this.names) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        return `import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import I${this.names.pluralUpperModuleName}Repository from '@modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import ${this.names.upperModuleName} from '@modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
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
exports.ShowService = ShowService;
