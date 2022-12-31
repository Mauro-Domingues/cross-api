export default function createSpecDependentService(
  lowerModuleName: string,
  upperModuleName: string,
  pluralUpperModuleName: string,
  pluralFatherLowerModuleName: string,
): string {
  return `import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import Fake${pluralUpperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/fakes/Fake${upperModuleName}Repository';
import Create${upperModuleName}Services from './Create${upperModuleName}Service';

let fake${upperModuleName}Repository: Fake${upperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let create${upperModuleName}: Create${upperModuleName}Services;

describe('Create${upperModuleName}Service', () => {
  beforeEach(() => {
    fake${upperModuleName}Repository = new Fake${upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    create${upperModuleName} = new Create${upperModuleName}Services(
      fake${upperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new ${lowerModuleName}', async () => {
    const ${lowerModuleName} = await create${upperModuleName}.execute({
      name: '${lowerModuleName}',
      description: 'This is a ${lowerModuleName}',
    });

    expect(${lowerModuleName}.data).toHaveProperty('id');
  });
});
`;
}
