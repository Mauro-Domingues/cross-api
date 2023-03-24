"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDependentController = void 0;
const messages_1 = require("@tools/messages");
class CreateDependentController {
    constructor(names, fatherNames) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
        this.fatherNames = fatherNames;
    }
    execute() {
        if (!this.names || !this.fatherNames) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        return `import I${this.names.upperModuleName}DTO from '@modules/${this.fatherNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Create${this.names.upperModuleName}Service from './Create${this.names.upperModuleName}Service';

export default class Create${this.names.upperModuleName}Controller {
  async handle(request: Request, response: Response) {
    const ${this.names.lowerModuleName}Data: I${this.names.upperModuleName}DTO = request.body;

    const create${this.names.upperModuleName} = container.resolve(Create${this.names.upperModuleName}Service);

    const ${this.names.lowerModuleName} = await create${this.names.upperModuleName}.execute(${this.names.lowerModuleName}Data);

    return response.send(${this.names.lowerModuleName});
  }
}
`;
    }
}
exports.CreateDependentController = CreateDependentController;
