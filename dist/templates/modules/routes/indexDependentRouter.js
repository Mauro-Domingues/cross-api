"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIndexDependentRoute = void 0;
const messages_1 = require("@tools/messages");
class CreateIndexDependentRoute {
    constructor(fatherNames) {
        this.messages = new messages_1.Messages().execute();
        this.fatherNames = fatherNames;
    }
    execute() {
        if (!this.fatherNames) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        return `import ${this.fatherNames.lowerModuleName}Router from './${this.fatherNames.lowerModuleName}Router';
routes.use('/${this.fatherNames.routeModuleName}', ${this.fatherNames.lowerModuleName}Router);
`;
    }
}
exports.CreateIndexDependentRoute = CreateIndexDependentRoute;
