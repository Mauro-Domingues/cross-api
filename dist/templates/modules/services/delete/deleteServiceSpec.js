"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSpecService = void 0;
const messages_1 = require("@tools/messages");
class DeleteSpecService {
    constructor(names) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
    }
    execute() {
        if (!this.names) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        return `import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import AppError from '@shared/errors/AppError';

import Fake${this.names.upperModuleName}Repository from '@modules/${this.names.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import Delete${this.names.upperModuleName}Services from './Delete${this.names.upperModuleName}Service';

let fake${this.names.upperModuleName}Repository: Fake${this.names.upperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let delete${this.names.upperModuleName}: Delete${this.names.upperModuleName}Services;

describe('Delete${this.names.upperModuleName}Service', () => {
  beforeEach(() => {
    fake${this.names.upperModuleName}Repository = new Fake${this.names.upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    delete${this.names.upperModuleName} = new Delete${this.names.upperModuleName}Services(
      fake${this.names.upperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should be able to delete a new ${this.names.lowerModuleName}', async () => {
    const ${this.names.lowerModuleName} = await fake${this.names.upperModuleName}Repository.create({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    await delete${this.names.upperModuleName}.execute({ id: ${this.names.lowerModuleName}.id });

    const deleted${this.names.upperModuleName} = await fake${this.names.upperModuleName}Repository.findBy({ id: ${this.names.lowerModuleName}.id });

    expect(deleted${this.names.upperModuleName}).toBe(null);
  });

  it('should return App error', async () => {
    await expect(delete${this.names.upperModuleName}.execute({})).rejects.toBeInstanceOf(AppError);
  });
});
`;
    }
}
exports.DeleteSpecService = DeleteSpecService;
