"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSpecService = createSpecService;
function createSpecService(names) {
  return `import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import Fake${names.upperModuleName}Repository from '@modules/${names.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository';
import Create${names.upperModuleName}Services from './Create${names.upperModuleName}Service';

let fake${names.upperModuleName}Repository: Fake${names.upperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let create${names.upperModuleName}: Create${names.upperModuleName}Services;

describe('Create${names.upperModuleName}Service', () => {
  beforeEach(() => {
    fake${names.upperModuleName}Repository = new Fake${names.upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    create${names.upperModuleName} = new Create${names.upperModuleName}Services(
      fake${names.upperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new ${names.lowerModuleName}', async () => {
    const ${names.lowerModuleName} = await create${names.upperModuleName}.execute({
      name: '${names.lowerModuleName}',
      description: 'This is a ${names.lowerModuleName}',
    });

    expect(${names.lowerModuleName}.data).toHaveProperty('id');
  });
});
`;
}