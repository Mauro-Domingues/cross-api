"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowSpecDependentService = void 0;
var _messages = _interopRequireDefault(require("../../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ShowSpecDependentService {
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
    return `import AppError from '@shared/errors/AppError';
import Fake${this.names.upperModuleName}Repository from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import Show${this.names.upperModuleName}Service from './Show${this.names.upperModuleName}Service';

let fake${this.names.upperModuleName}Repository: Fake${this.names.upperModuleName}Repository;
let show${this.names.upperModuleName}: Show${this.names.upperModuleName}Service;

describe('Show${this.names.upperModuleName}Service', () => {
  beforeEach(() => {
    fake${this.names.upperModuleName}Repository = new Fake${this.names.upperModuleName}Repository();

    show${this.names.upperModuleName} = new Show${this.names.upperModuleName}Service(fake${this.names.upperModuleName}Repository);
  });

  it('should be able to show the ${this.names.lowerModuleName}', async () => {
    const ${this.names.lowerModuleName} = await fake${this.names.upperModuleName}Repository.create({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    const get${this.names.upperModuleName} = await show${this.names.upperModuleName}.execute({
      id: ${this.names.lowerModuleName}.id,
    });

    expect(get${this.names.upperModuleName}.data).toHaveProperty('id');
    expect(get${this.names.upperModuleName}.data).toEqual(${this.names.lowerModuleName});
  });

  it('should not be able to show ${this.names.pluralLowerModuleName} with a non-existing id', async () => {
    await expect(
      show${this.names.upperModuleName}.execute({
        id: 'non-existing-${this.names.lowerModuleName}-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
exports.ShowSpecDependentService = ShowSpecDependentService;