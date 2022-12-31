export default function deleteSpecDependentService(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
  pluralFatherLowerModuleName: string,
): string {
  return `import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import AppError from '@shared/errors/AppError';

import Fake${upperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/Fake${upperModuleName}Repository';
import Delete${upperModuleName}Services from './Delete${upperModuleName}Service';

let fake${upperModuleName}Repository: Fake${upperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let delete${upperModuleName}: Delete${upperModuleName}Services;

describe('Delete${upperModuleName}Service', () => {
  beforeEach(() => {
    fake${upperModuleName}Repository = new Fake${upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    delete${upperModuleName} = new delete${upperModuleName}Services(
      fake${upperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should be able to delete a new ${lowerModuleName}', async () => {
    const ${lowerModuleName} = await fake${upperModuleName}Repository.create({
      name: '${lowerModuleName}',
      description: 'This is a ${lowerModuleName}',
    });

    await delete${upperModuleName}.execute({ id: ${lowerModuleName}.id });

    const deleted${upperModuleName} = await fake${upperModuleName}Repository.findById({ id: ${lowerModuleName}.id });

    expect(deleted${upperModuleName}).toBe(undefined);
  });

  it('should return App error', async () => {
    await expect(delete${upperModuleName}.execute('')).rejects.toBeInstanceOf(AppError);
  });
});
`;
}
