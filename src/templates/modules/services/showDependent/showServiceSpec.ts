import IModuleNamesDTO from 'index';

export default function showSpecDependentService(
  names: Omit<IModuleNamesDTO, 'routeModuleName' | 'dbModuleName'>,
  fatherNames: Pick<IModuleNamesDTO, 'pluralLowerModuleName'>,
): string {
  return `import AppError from '@shared/errors/AppError';
import Fake${names.upperModuleName}Repository from '@modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository';
import Show${names.upperModuleName}Service from './Show${names.upperModuleName}Service';

let fake${names.upperModuleName}Repository: Fake${names.upperModuleName}Repository;
let show${names.upperModuleName}: Show${names.upperModuleName}Service;

describe('Show${names.upperModuleName}Service', () => {
  beforeEach(() => {
    fake${names.upperModuleName}Repository = new Fake${names.upperModuleName}Repository();

    show${names.upperModuleName} = new Show${names.upperModuleName}Service(fake${names.upperModuleName}Repository);
  });

  it('should be able to show the ${names.lowerModuleName}', async () => {
    const ${names.lowerModuleName} = await fake${names.upperModuleName}Repository.create({
      name: '${names.lowerModuleName}',
      description: 'This is a ${names.lowerModuleName}',
    });

    const get${names.upperModuleName} = await show${names.upperModuleName}.execute({
      id: ${names.lowerModuleName}.id,
    });

    expect(get${names.upperModuleName}.data).toHaveProperty('id');
    expect(get${names.upperModuleName}.data).toEqual(${names.lowerModuleName});
  });

  it('should not be able to show ${names.pluralLowerModuleName} with a non-existing id', async () => {
    await expect(
      show${names.upperModuleName}.execute({
        id: 'non-existing-${names.lowerModuleName}-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
}
