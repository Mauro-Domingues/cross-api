"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateSpecDependentService = void 0;
var _messages = require("../../../../../dist/tools/messages");
class UpdateSpecDependentService {
  constructor(names, fatherNames) {
    this.messages = void 0;
    this.names = void 0;
    this.fatherNames = void 0;
    this.messages = new _messages.Messages().execute();
    this.names = names;
    this.fatherNames = fatherNames;
  }
  execute() {
    if (!this.names || !this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    return `import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import AppError from '@shared/errors/AppError';

import Fake${this.names.upperModuleName}Repository from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import Update${this.names.upperModuleName}Service from './Update${this.names.upperModuleName}Service';

let fake${this.names.upperModuleName}Repository: Fake${this.names.upperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let update${this.names.upperModuleName}Service: Update${this.names.upperModuleName}Service;

describe('Update${this.names.upperModuleName}Service', () => {
  beforeEach(() => {
    fake${this.names.upperModuleName}Repository = new Fake${this.names.upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    update${this.names.upperModuleName}Service = new Update${this.names.upperModuleName}Service(
      fake${this.names.upperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should update the ${this.names.lowerModuleName}', async () => {
    const ${this.names.lowerModuleName} = await fake${this.names.upperModuleName}Repository.create({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    const updated${this.names.upperModuleName} = await update${this.names.upperModuleName}Service.execute(
      { id: ${this.names.lowerModuleName}.id },
      { name: 'updated${this.names.upperModuleName}', description: 'This is a updated${this.names.lowerModuleName}' },
    );

    expect(updated${this.names.upperModuleName}.data.name).toEqual('updated${this.names.upperModuleName}');
  });

  it('should return App Error', async () => {
    await expect(
      update${this.names.upperModuleName}Service.execute({}, { name: '', description: '' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
exports.UpdateSpecDependentService = UpdateSpecDependentService;