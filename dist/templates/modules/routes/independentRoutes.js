"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIndependentRoute = void 0;
const messages_1 = require("../../../tools/messages");
class CreateIndependentRoute {
    constructor(names) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
    }
    execute() {
        if (!this.names) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        return `import { Router } from 'express';

import Create${this.names.upperModuleName}Controller from '@modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}/Create${this.names.upperModuleName}Controller';
import Show${this.names.upperModuleName}Controller from '@modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}/Show${this.names.upperModuleName}Controller';
import List${this.names.upperModuleName}Controller from '@modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}/List${this.names.upperModuleName}Controller';
import Update${this.names.upperModuleName}Controller from '@modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}/Update${this.names.upperModuleName}Controller';
import Delete${this.names.upperModuleName}Controller from '@modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}/Delete${this.names.upperModuleName}Controller';

const ${this.names.lowerModuleName}Router = Router();
const create${this.names.upperModuleName}Controller = new Create${this.names.upperModuleName}Controller();
const list${this.names.upperModuleName}Controller = new List${this.names.upperModuleName}Controller();
const show${this.names.upperModuleName}Controller = new Show${this.names.upperModuleName}Controller();
const update${this.names.upperModuleName}Controller = new Update${this.names.upperModuleName}Controller();
const delete${this.names.upperModuleName}Controller = new Delete${this.names.upperModuleName}Controller();

${this.names.lowerModuleName}Router.post('/', create${this.names.upperModuleName}Controller.handle);
${this.names.lowerModuleName}Router.get('/', list${this.names.upperModuleName}Controller.handle);
${this.names.lowerModuleName}Router.get('/:id', show${this.names.upperModuleName}Controller.handle);
${this.names.lowerModuleName}Router.put('/:id', update${this.names.upperModuleName}Controller.handle);
${this.names.lowerModuleName}Router.delete('/:id', delete${this.names.upperModuleName}Controller.handle);

export default ${this.names.lowerModuleName}Router;
`;
    }
}
exports.CreateIndependentRoute = CreateIndependentRoute;
