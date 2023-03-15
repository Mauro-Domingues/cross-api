"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateIndexDependentRoute = void 0;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CreateIndexDependentRoute {
  constructor(fatherNames) {
    this.messages = void 0;
    this.fatherNames = void 0;
    this.messages = _messages.default;
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