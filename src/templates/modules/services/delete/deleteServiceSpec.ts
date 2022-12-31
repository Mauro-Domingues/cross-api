export default function deleteSpecService(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import AppError from '@shared/errors/AppError';

import Fake${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/Fake${pluralUpperModuleName}Repository';
import Delete${pluralUpperModuleName}Services from './Delete${pluralUpperModuleName}Service';

let fake${pluralUpperModuleName}Repository: Fake${pluralUpperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let delete${pluralUpperModuleName}: Delete${pluralUpperModuleName}Services;

describe('Delete${pluralUpperModuleName}Service', () => {
  beforeEach(() => {
    fake${pluralUpperModuleName}Repository = new Fake${pluralUpperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    delete${pluralUpperModuleName} = new delete${pluralUpperModuleName}Services(
      fake${pluralUpperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should be able to delete a new ${lowerModuleName}', async () => {

    const ${lowerModuleName} = await fake${pluralUpperModuleName}Repository.create({
      name: 'activated'
    });

    await delete${pluralUpperModuleName}.execute({ id: ${lowerModuleName}.id });

    const deleted${upperModuleName} = await fake${pluralUpperModuleName}Repository.findById({ id: ${lowerModuleName}.id });

    expect(deleted${upperModuleName}).toBe(undefined);
  });

  it('should return App error', async () => {
    await expect(delete${pluralUpperModuleName}.execute('')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
`;
}
