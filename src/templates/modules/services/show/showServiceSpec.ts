export default function showSpecService(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import AppError from '@shared/errors/AppError';
import Fake${upperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/fakes/Fake${pluralUpperModuleName}Repository';
import Show${upperModuleName}Service from './Show${upperModuleName}Service';

let fake${upperModuleName}Repository: Fake${upperModuleName}Repository;
let show${upperModuleName}: Show${upperModuleName}Service;

describe('Show${upperModuleName}Service', () => {
  beforeEach(() => {
    fake${upperModuleName}Repository = new Fake${upperModuleName}Repository()

    show${upperModuleName} = new Show${upperModuleName}Service(fake${upperModuleName}Repository);
  });

  it('should be able to show the ${lowerModuleName}', async () => {    
    const ${lowerModuleName} = await fake${upperModuleName}Repository.create({
      name: '${lowerModuleName}',
      description: 'This is a ${lowerModuleName}',
    });

    const get${upperModuleName} = await show${upperModuleName}.execute({
      id: ${lowerModuleName}.id,
    });

    expect(get${upperModuleName}.data).toHaveProperty('id');
    expect(get${upperModuleName}.data).toEqual(${lowerModuleName});
  });

  it('should not be able to show ${pluralLowerModuleName} with a non-existing id', async () => {
    await expect(
      show${upperModuleName}.execute({
        id: 'non-existing-${lowerModuleName}-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
}
