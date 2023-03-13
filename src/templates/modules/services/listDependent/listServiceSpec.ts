import { IModuleNamesDTO } from '@tools/names';

export class ListSpecDependentService {
  private names: Omit<IModuleNamesDTO, 'routeModuleName' | 'dbModuleName'>;
  private fatherNames: Pick<IModuleNamesDTO, 'pluralLowerModuleName'>;

  constructor(names: IModuleNamesDTO, fatherNames: IModuleNamesDTO) {
    this.names = names;
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    return `import Fake${this.names.upperModuleName}Repository from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import List${this.names.upperModuleName}Service from './List${this.names.upperModuleName}Service';

let fake${this.names.upperModuleName}Repository: Fake${this.names.upperModuleName}Repository;
let list${this.names.upperModuleName}: List${this.names.upperModuleName}Service;
let fakeCacheProvider: FakeCacheProvider;

describe('List${this.names.upperModuleName}Service', () => {
  beforeEach(() => {
    fake${this.names.upperModuleName}Repository = new Fake${this.names.upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    list${this.names.upperModuleName} = new List${this.names.upperModuleName}Service(fake${this.names.upperModuleName}Repository, fakeCacheProvider);
  });

  it('should be able to list all the ${this.names.pluralLowerModuleName}', async () => {
    const ${this.names.lowerModuleName}01 = await fake${this.names.upperModuleName}Repository.create({
      name: '${this.names.lowerModuleName} 1',
      description: 'This is the first ${this.names.lowerModuleName}',
    });

    const ${this.names.lowerModuleName}02 = await fake${this.names.upperModuleName}Repository.create({
      name: '${this.names.lowerModuleName} 2',
      description: 'This is the second ${this.names.lowerModuleName}',
    });

    const ${this.names.lowerModuleName}List = await list${this.names.upperModuleName}.execute(1, 2);

    expect(${this.names.lowerModuleName}List.data).toEqual([${this.names.lowerModuleName}01, ${this.names.lowerModuleName}02]);
  });

  it('should be able to list all the ${this.names.pluralLowerModuleName} using cache', async () => {
    const ${this.names.lowerModuleName}01 = await fake${this.names.upperModuleName}Repository.create({
      name: '${this.names.lowerModuleName} 1',
      description: 'This is the first ${this.names.lowerModuleName}',
    });

    const ${this.names.lowerModuleName}02 = await fake${this.names.upperModuleName}Repository.create({
      name: '${this.names.lowerModuleName} 2',
      description: 'This is the second ${this.names.lowerModuleName}',
    });

    await list${this.names.upperModuleName}.execute(1, 2);

    const ${this.names.lowerModuleName}List = await list${this.names.upperModuleName}.execute(1, 2);

    expect(${this.names.lowerModuleName}List.data).toEqual([${this.names.lowerModuleName}01, ${this.names.lowerModuleName}02]);
  });

  it('should be able to list the ${this.names.pluralLowerModuleName} with the specified pagination', async () => {
    const ${this.names.lowerModuleName}01 = await fake${this.names.upperModuleName}Repository.create({
      name: '${this.names.lowerModuleName} 1',
      description: 'This is the first ${this.names.lowerModuleName}',
    });

    const ${this.names.lowerModuleName}02 = await fake${this.names.upperModuleName}Repository.create({
      name: '${this.names.lowerModuleName} 2',
      description: 'This is the second ${this.names.lowerModuleName}',
    });

    await fake${this.names.upperModuleName}Repository.create({
      name: '${this.names.lowerModuleName} 3',
      description: 'This is the third ${this.names.lowerModuleName}',
    });

    const ${this.names.lowerModuleName}List01 = await list${this.names.upperModuleName}.execute(1, 1);

    expect(${this.names.lowerModuleName}List01.data).toEqual([${this.names.lowerModuleName}01]);

    const ${this.names.lowerModuleName}List02 = await list${this.names.upperModuleName}.execute(1, 2);
    expect(${this.names.lowerModuleName}List02.data).toEqual([${this.names.lowerModuleName}01, ${this.names.lowerModuleName}02]);
  });
});
`;
  }
}
