"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateIndexRoute = void 0;
var _messages = require("../../../../dist/tools/messages");
class CreateIndexRoute {
  constructor(names) {
    this.messages = void 0;
    this.names = void 0;
    this.messages = new _messages.Messages().execute();
    this.names = names;
  }
  execute() {
    if (!this.names) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    return `import ${this.names.lowerModuleName}Router from './${this.names.lowerModuleName}Router';
routes.use('/${this.names.routeModuleName}', ${this.names.lowerModuleName}Router);
`;
  }
}
exports.CreateIndexRoute = CreateIndexRoute;