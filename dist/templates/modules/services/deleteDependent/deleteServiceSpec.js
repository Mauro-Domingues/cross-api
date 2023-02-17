"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSpecDependentService = deleteSpecDependentService;
function deleteSpecDependentService(names, fatherNames) {
  return `import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import AppError from '@shared/errors/AppError';

import Fake${names.upperModuleName}Repository from '@modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository';
import Delete${names.upperModuleName}Services from './Delete${names.upperModuleName}Service';

let fake${names.upperModuleName}Repository: Fake${names.upperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let delete${names.upperModuleName}: Delete${names.upperModuleName}Services;

describe('Delete${names.upperModuleName}Service', () => {
  beforeEach(() => {
    fake${names.upperModuleName}Repository = new Fake${names.upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    delete${names.upperModuleName} = new Delete${names.upperModuleName}Services(
      fake${names.upperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should be able to delete a ${names.lowerModuleName}', async () => {
    const ${names.lowerModuleName} = await fake${names.upperModuleName}Repository.create({
      name: '${names.lowerModuleName}',
      description: 'This is a ${names.lowerModuleName}',
    });

    await delete${names.upperModuleName}.execute({ id: ${names.lowerModuleName}.id });

    const deleted${names.upperModuleName} = await fake${names.upperModuleName}Repository.findBy({ id: ${names.lowerModuleName}.id });

    expect(deleted${names.upperModuleName}).toBe(null);
  });

  it('should return App error', async () => {
    await expect(delete${names.upperModuleName}.execute({})).rejects.toBeInstanceOf(AppError);
  });
});
`;
}