export default function createSpecService(
  lowerModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import Fake${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/Fake${pluralUpperModuleName}Repository';
import Create${pluralUpperModuleName}Services from './Create${pluralUpperModuleName}Service';

let fake${pluralUpperModuleName}Repository: Fake${pluralUpperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let create${pluralUpperModuleName}: Create${pluralUpperModuleName}Services;

describe('Create${pluralUpperModuleName}Service', () => {
  beforeEach(() => {
    fake${pluralUpperModuleName}Repository = new Fake${pluralUpperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    create${pluralUpperModuleName} = new Create${pluralUpperModuleName}Services(
      fake${pluralUpperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new ${lowerModuleName}', async () => {
    const ${lowerModuleName} = await create${pluralUpperModuleName}.execute({
      name: '${lowerModuleName}',
      description: 'This is a ${lowerModuleName}',
    });

    expect(${lowerModuleName}.data).toHaveProperty('id');
  });
});
`;
}
