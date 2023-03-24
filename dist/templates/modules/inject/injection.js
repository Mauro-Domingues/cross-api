"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInjection = void 0;
const messages_1 = require("@tools/messages");
class CreateInjection {
    constructor(names) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
    }
    execute() {
        if (!this.names) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        return `import I${this.names.pluralUpperModuleName}Repository from '@modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import ${this.names.pluralUpperModuleName}Repository from '@modules/${this.names.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository';

container.registerSingleton<I${this.names.pluralUpperModuleName}Repository>(
  '${this.names.pluralUpperModuleName}Repository',
  ${this.names.pluralUpperModuleName}Repository,
);
`;
    }
}
exports.CreateInjection = CreateInjection;
