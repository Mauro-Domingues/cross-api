"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listSpecDependentService = listSpecDependentService;
function listSpecDependentService(names, fatherNames) {
  return `import Fake${names.upperModuleName}Repository from '@modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import List${names.upperModuleName}Service from './List${names.upperModuleName}Service';

let fake${names.upperModuleName}Repository: Fake${names.upperModuleName}Repository;
let list${names.upperModuleName}: List${names.upperModuleName}Service;
let fakeCacheProvider: FakeCacheProvider;

describe('List${names.upperModuleName}Service', () => {
  beforeEach(() => {
    fake${names.upperModuleName}Repository = new Fake${names.upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    list${names.upperModuleName} = new List${names.upperModuleName}Service(fake${names.upperModuleName}Repository, fakeCacheProvider);
  });

  it('should be able to list all the ${names.pluralLowerModuleName}', async () => {
    const ${names.lowerModuleName}01 = await fake${names.upperModuleName}Repository.create({
      name: '${names.lowerModuleName} 1',
      description: 'This is the first ${names.lowerModuleName}',
    });

    const ${names.lowerModuleName}02 = await fake${names.upperModuleName}Repository.create({
      name: '${names.lowerModuleName} 2',
      description: 'This is the second ${names.lowerModuleName}',
    });

    const ${names.lowerModuleName}List = await list${names.upperModuleName}.execute(1, 2);

    expect(${names.lowerModuleName}List.data).toEqual([${names.lowerModuleName}01, ${names.lowerModuleName}02]);
  });

  it('should be able to list all the ${names.pluralLowerModuleName} using cache', async () => {
    const ${names.lowerModuleName}01 = await fake${names.upperModuleName}Repository.create({
      name: '${names.lowerModuleName} 1',
      description: 'This is the first ${names.lowerModuleName}',
    });

    const ${names.lowerModuleName}02 = await fake${names.upperModuleName}Repository.create({
      name: '${names.lowerModuleName} 2',
      description: 'This is the second ${names.lowerModuleName}',
    });

    await list${names.upperModuleName}.execute(1, 2);

    const ${names.lowerModuleName}List = await list${names.upperModuleName}.execute(1, 2);

    expect(${names.lowerModuleName}List.data).toEqual([${names.lowerModuleName}01, ${names.lowerModuleName}02]);
  });

  it('should be able to list the ${names.pluralLowerModuleName} with the specified pagination', async () => {
    const ${names.lowerModuleName}01 = await fake${names.upperModuleName}Repository.create({
      name: '${names.lowerModuleName} 1',
      description: 'This is the first ${names.lowerModuleName}',
    });

    const ${names.lowerModuleName}02 = await fake${names.upperModuleName}Repository.create({
      name: '${names.lowerModuleName} 2',
      description: 'This is the second ${names.lowerModuleName}',
    });

    await fake${names.upperModuleName}Repository.create({
      name: '${names.lowerModuleName} 3',
      description: 'This is the third ${names.lowerModuleName}',
    });

    const ${names.lowerModuleName}List01 = await list${names.upperModuleName}.execute(1, 1);

    expect(${names.lowerModuleName}List01.data).toEqual([${names.lowerModuleName}01]);

    const ${names.lowerModuleName}List02 = await list${names.upperModuleName}.execute(1, 2);
    expect(${names.lowerModuleName}List02.data).toEqual([${names.lowerModuleName}01, ${names.lowerModuleName}02]);
  });
});
`;
}