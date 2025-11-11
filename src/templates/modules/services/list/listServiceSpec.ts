import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class ListSpecService extends BaseTemplateModule {
  public constructor(
    private readonly names: Omit<
      IModuleNameDTO,
      'dbModuleName' | 'routeModuleName'
    >,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { Fake${this.names.pluralUpperModuleName}Repository } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import type { I${this.names.pluralUpperModuleName}Repository } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { FakeCacheProvider } fr\om '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import type { ICacheProvider } fr\om '@shared/container/providers/CacheProvider/models/ICacheProvider';
import type { IConnection } fr\om '@shared/typeorm';
import { Connection } fr\om '@shared/typeorm';
import { AppError } fr\om '@shared/errors/AppError';
import { List${this.names.upperModuleName}Service } fr\om './List${this.names.upperModuleName}Service';

let fake${this.names.pluralUpperModuleName}Repository: I${this.names.pluralUpperModuleName}Repository;
let fakeCacheProvider: ICacheProvider;
let connection: IConnection;
let list${this.names.upperModuleName}Service: List${this.names.upperModuleName}Service;

describe('List${this.names.upperModuleName}Service', (): void => {
  beforeAll((): void => {
    connection = new Connection();
    connection.fakeConnect();
  });

  beforeEach((): void => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${this.names.pluralUpperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();
    list${this.names.upperModuleName}Service = new List${this.names.upperModuleName}Service(
      fake${this.names.pluralUpperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('Should be able to list all the ${this.names.pluralLowerModuleName}', async (): Promise<void> => {
    const [${this.names.lowerModuleName}01, ${this.names.lowerModuleName}02] = await fake${this.names.pluralUpperModuleName}Repository.createMany([
      {
        name: '${this.names.lowerModuleName} 1',
        description: 'This is the first ${this.names.lowerModuleName}',
      },
      {
        name: '${this.names.lowerModuleName} 2',
        description: 'This is the second ${this.names.lowerModuleName}',
      },
    ]);

    const ${this.names.lowerModuleName}List = await list${this.names.upperModuleName}Service.execute(connection, 1, 2, {});

    expect(${this.names.lowerModuleName}List.data).toEqual([${this.names.lowerModuleName}01, ${this.names.lowerModuleName}02]);
  });

  it('Should be able to list all the ${this.names.pluralLowerModuleName} using cache', async (): Promise<void> => {
    const [${this.names.lowerModuleName}01, ${this.names.lowerModuleName}02] = await fake${this.names.pluralUpperModuleName}Repository.createMany([
      {
        name: '${this.names.lowerModuleName} 1',
        description: 'This is the first ${this.names.lowerModuleName}',
      },
      {
        name: '${this.names.lowerModuleName} 2',
        description: 'This is the second ${this.names.lowerModuleName}',
      },
    ]);

    await list${this.names.upperModuleName}Service.execute(connection, 1, 2, {});

    const ${this.names.lowerModuleName}List = await list${this.names.upperModuleName}Service.execute(connection, 1, 2, {});

    expect(${this.names.lowerModuleName}List.data).toEqual(
      JSON.parse(JSON.stringify([${this.names.lowerModuleName}01, ${this.names.lowerModuleName}02])),
    );
  });

  it('Should be able to list the ${this.names.pluralLowerModuleName} with the specified pagination', async (): Promise<void> => {
    const [${this.names.lowerModuleName}01, ${this.names.lowerModuleName}02] = await fake${this.names.pluralUpperModuleName}Repository.createMany([
      {
        name: '${this.names.lowerModuleName} 1',
        description: 'This is the first ${this.names.lowerModuleName}',
      },
      {
        name: '${this.names.lowerModuleName} 2',
        description: 'This is the second ${this.names.lowerModuleName}',
      },
      {
        name: '${this.names.lowerModuleName} 3',
        description: 'This is the third ${this.names.lowerModuleName}',
      },
    ]);

    const ${this.names.lowerModuleName}List01 = await list${this.names.upperModuleName}Service.execute(connection, 1, 1, {});

    expect(${this.names.lowerModuleName}List01.data).toEqual([${this.names.lowerModuleName}01]);

    const ${this.names.lowerModuleName}List02 = await list${this.names.upperModuleName}Service.execute(connection, 1, 2, {});

    expect(${this.names.lowerModuleName}List02.data).toEqual([${this.names.lowerModuleName}01, ${this.names.lowerModuleName}02]);
  });

  it('Should return AppError', async (): Promise<void> => {
    jest.spyOn(fake${this.names.pluralUpperModuleName}Repository, 'findAll').mockImplementationOnce(() => {
      throw new AppError('FAILED_TO_LIST', 'Failed to list ${this.names.pluralLowerModuleName}');
    });

    await expect(
      list${this.names.upperModuleName}Service.execute(connection, 1, 2, {}),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
