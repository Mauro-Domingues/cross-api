import { IModuleNamesDTO } from '@tools/names';

export class UpdateSpecDependentService {
  private names: Pick<
    IModuleNamesDTO,
    'lowerModuleName' | 'upperModuleName' | 'pluralUpperModuleName'
  >;
  private fatherNames: Pick<IModuleNamesDTO, 'pluralLowerModuleName'>;

  constructor(names: IModuleNamesDTO, fatherNames: IModuleNamesDTO) {
    this.names = names;
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    return `import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import AppError from '@shared/errors/AppError';

import Fake${this.names.upperModuleName}Repository from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import Update${this.names.upperModuleName}Service from './Update${this.names.upperModuleName}Service';

let fake${this.names.upperModuleName}Repository: Fake${this.names.upperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let update${this.names.upperModuleName}Service: Update${this.names.upperModuleName}Service;

describe('Update${this.names.upperModuleName}Service', () => {
  beforeEach(() => {
    fake${this.names.upperModuleName}Repository = new Fake${this.names.upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    update${this.names.upperModuleName}Service = new Update${this.names.upperModuleName}Service(
      fake${this.names.upperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should update the ${this.names.lowerModuleName}', async () => {
    const ${this.names.lowerModuleName} = await fake${this.names.upperModuleName}Repository.create({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    const updated${this.names.upperModuleName} = await update${this.names.upperModuleName}Service.execute(
      { id: ${this.names.lowerModuleName}.id },
      { name: 'updated${this.names.upperModuleName}', description: 'This is a updated${this.names.lowerModuleName}' },
    );

    expect(updated${this.names.upperModuleName}.data.name).toEqual('updated${this.names.upperModuleName}');
  });

  it('should return App Error', async () => {
    await expect(
      update${this.names.upperModuleName}Service.execute({}, { name: '', description: '' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
