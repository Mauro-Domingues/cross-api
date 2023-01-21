"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteSpecDependentService;
function deleteSpecDependentService(lowerModuleName, upperModuleName, pluralUpperModuleName, pluralFatherLowerModuleName) {
  return `import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import AppError from '@shared/errors/AppError';

import Fake${upperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/fakes/Fake${pluralUpperModuleName}Repository';
import Delete${upperModuleName}Services from './Delete${upperModuleName}Service';

let fake${upperModuleName}Repository: Fake${upperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let delete${upperModuleName}: Delete${upperModuleName}Services;

describe('Delete${upperModuleName}Service', () => {
  beforeEach(() => {
    fake${upperModuleName}Repository = new Fake${upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    delete${upperModuleName} = new Delete${upperModuleName}Services(
      fake${upperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should be able to delete a ${lowerModuleName}', async () => {
    const ${lowerModuleName} = await fake${upperModuleName}Repository.create({
      name: '${lowerModuleName}',
      description: 'This is a ${lowerModuleName}',
    });

    await delete${upperModuleName}.execute({ id: ${lowerModuleName}.id });

    const deleted${upperModuleName} = await fake${upperModuleName}Repository.findBy({ id: ${lowerModuleName}.id });

    expect(deleted${upperModuleName}).toBe(null);
  });

  it('should return App error', async () => {
    await expect(delete${upperModuleName}.execute({})).rejects.toBeInstanceOf(AppError);
  });
});
`;
}