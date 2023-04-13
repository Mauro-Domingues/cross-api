"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIndexRoute = void 0;
const messages_1 = require("../../../tools/messages");
class CreateIndexRoute {
    constructor(names) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
    }
    execute() {
        if (!this.names) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        return `import { ${this.names.lowerModuleName}Router } from './${this.names.lowerModuleName}Router';
routes.use('/', ${this.names.lowerModuleName}Router);
`;
    }
}
exports.CreateIndexRoute = CreateIndexRoute;
