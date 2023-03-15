"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDependentInjection = void 0;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CreateDependentInjection {
  constructor(names, fatherNames) {
    this.messages = void 0;
    this.names = void 0;
    this.fatherNames = void 0;
    this.messages = _messages.default;
    this.names = names;
    this.fatherNames = fatherNames;
  }
  execute() {
    if (!this.names || !this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    return `import I${this.names.pluralUpperModuleName}Repository from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import ${this.names.pluralUpperModuleName}Repository from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository';

container.registerSingleton<I${this.names.pluralUpperModuleName}Repository>(
  '${this.names.pluralUpperModuleName}Repository',
  ${this.names.pluralUpperModuleName}Repository,
);
`;
  }
}
exports.CreateDependentInjection = CreateDependentInjection;