"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listSpecService;
function listSpecService(lowerModuleName, upperModuleName, pluralLowerModuleName, pluralUpperModuleName) {
  return `import Fake${upperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/fakes/Fake${pluralUpperModuleName}Repository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import List${upperModuleName}Service from './List${upperModuleName}Service';

let fake${upperModuleName}Repository: Fake${upperModuleName}Repository;
let list${upperModuleName}: List${upperModuleName}Service;
let fakeCacheProvider: FakeCacheProvider;

describe('List${upperModuleName}Service', () => {
  beforeEach(() => {
    fake${upperModuleName}Repository = new Fake${upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    list${upperModuleName} = new List${upperModuleName}Service(fake${upperModuleName}Repository, fakeCacheProvider);
  });

  it('should be able to list all the ${pluralLowerModuleName}', async () => {
    const ${lowerModuleName}01 = await fake${upperModuleName}Repository.create({
      name: '${lowerModuleName} 1',
      description: 'This is the first ${lowerModuleName}',
    });

    const ${lowerModuleName}02 = await fake${upperModuleName}Repository.create({
      name: '${lowerModuleName} 2',
      description: 'This is the second ${lowerModuleName}',
    });

    const ${lowerModuleName}List = await list${upperModuleName}.execute(1, 2);

    expect(${lowerModuleName}List.data).toEqual([${lowerModuleName}01, ${lowerModuleName}02]);
  });

  it('should be able to list all the ${pluralLowerModuleName} using cache', async () => {
    const ${lowerModuleName}01 = await fake${upperModuleName}Repository.create({
      name: '${lowerModuleName} 1',
      description: 'This is the first ${lowerModuleName}',
    });

    const ${lowerModuleName}02 = await fake${upperModuleName}Repository.create({
      name: '${lowerModuleName} 2',
      description: 'This is the second ${lowerModuleName}',
    });

    await list${upperModuleName}.execute(1, 2);

    const ${lowerModuleName}List = await list${upperModuleName}.execute(1, 2);

    expect(${lowerModuleName}List.data).toEqual([${lowerModuleName}01, ${lowerModuleName}02]);
  });

  it('should be able to list the ${pluralLowerModuleName} with the specified pagination', async () => {
    const ${lowerModuleName}01 = await fake${upperModuleName}Repository.create({
      name: '${lowerModuleName} 1',
      description: 'This is the first ${lowerModuleName}',
    });

    const ${lowerModuleName}02 = await fake${upperModuleName}Repository.create({
      name: '${lowerModuleName} 2',
      description: 'This is the second ${lowerModuleName}',
    });

    await fake${upperModuleName}Repository.create({
      name: '${lowerModuleName} 3',
      description: 'This is the third ${lowerModuleName}',
    });

    const ${lowerModuleName}List01 = await list${upperModuleName}.execute(1, 1);

    expect(${lowerModuleName}List01.data).toEqual([${lowerModuleName}01]);

    const ${lowerModuleName}List02 = await list${upperModuleName}.execute(1, 2);
    expect(${lowerModuleName}List02.data).toEqual([${lowerModuleName}01, ${lowerModuleName}02]);
  });
});
`;
}