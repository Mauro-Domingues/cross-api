export default function updateSpecDependentService(
  lowerModuleName: string,
  upperModuleName: string,
  pluralUpperModuleName: string,
  pluralFatherLowerModuleName: string,
): string {
  return `import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import AppError from '@shared/errors/AppError';

import Fake${upperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/fakes/Fake${pluralUpperModuleName}Repository';
import Update${upperModuleName}Service from './Update${upperModuleName}Service';

let fake${upperModuleName}Repository: Fake${upperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let update${upperModuleName}Service: Update${upperModuleName}Service;

describe('Update${upperModuleName}Service', () => {
  beforeEach(() => {
    fake${upperModuleName}Repository = new Fake${upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    update${upperModuleName}Service = new Update${upperModuleName}Service(
      fake${upperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should update the ${lowerModuleName}', async () => {
    const ${lowerModuleName} = await fake${upperModuleName}Repository.create({
      name: '${lowerModuleName}',
      description: 'This is a ${lowerModuleName}',
    });

    const updated${upperModuleName} = await update${upperModuleName}Service.execute({ id: ${lowerModuleName}.id }, { name: 'updated${upperModuleName}' });

    expect(updated${upperModuleName}.data.name).toEqual('opened');
  });

  it('should return App Error', async () => {
    await expect(
      update${upperModuleName}Service.execute({
        id: '',
        name: '',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
}
