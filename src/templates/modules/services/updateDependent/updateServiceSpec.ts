import { IModuleNamesDTO } from 'index';

export function updateSpecDependentService(
  names: Pick<
    IModuleNamesDTO,
    'lowerModuleName' | 'upperModuleName' | 'pluralUpperModuleName'
  >,
  fatherNames: Pick<IModuleNamesDTO, 'pluralLowerModuleName'>,
): string {
  return `import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import AppError from '@shared/errors/AppError';

import Fake${names.upperModuleName}Repository from '@modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository';
import Update${names.upperModuleName}Service from './Update${names.upperModuleName}Service';

let fake${names.upperModuleName}Repository: Fake${names.upperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let update${names.upperModuleName}Service: Update${names.upperModuleName}Service;

describe('Update${names.upperModuleName}Service', () => {
  beforeEach(() => {
    fake${names.upperModuleName}Repository = new Fake${names.upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    update${names.upperModuleName}Service = new Update${names.upperModuleName}Service(
      fake${names.upperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should update the ${names.lowerModuleName}', async () => {
    const ${names.lowerModuleName} = await fake${names.upperModuleName}Repository.create({
      name: '${names.lowerModuleName}',
      description: 'This is a ${names.lowerModuleName}',
    });

    const updated${names.upperModuleName} = await update${names.upperModuleName}Service.execute(
      { id: ${names.lowerModuleName}.id },
      { name: 'updated${names.upperModuleName}', description: 'This is a updated${names.lowerModuleName}' },
    );

    expect(updated${names.upperModuleName}.data.name).toEqual('updated${names.upperModuleName}');
  });

  it('should return App Error', async () => {
    await expect(
      update${names.upperModuleName}Service.execute({}, { name: '', description: '' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
}
