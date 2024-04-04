import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class ListSpecService {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Omit<IModuleNamesDTO, 'dbModuleName' | 'routeModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return `import { Fake${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { I${
      this.names.pluralUpperModuleName
    }RepositoryDTO } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { FakeCacheProvider } ${'from'} '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import { ICacheProviderDTO } ${'from'} '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { Connection, IConnectionDTO } ${'from'} '@shared/typeorm';
import { AppError } ${'from'} '@shared/errors/AppError';
import { FakeDataSource } ${'from'} '@shared/typeorm/dataSources/fakes/fakeDataSource';
import { List${this.names.upperModuleName}Service } ${'from'} './List${
      this.names.upperModuleName
    }Service';

let fake${this.names.pluralUpperModuleName}Repository: I${
      this.names.pluralUpperModuleName
    }RepositoryDTO;
let fakeCacheProvider: ICacheProviderDTO;
let connection: IConnectionDTO;
let list${this.names.upperModuleName}Service: List${
      this.names.upperModuleName
    }Service;

describe('List${this.names.upperModuleName}Service', (): void => {
  beforeAll((): void => {
    connection = new Connection('database_test', FakeDataSource);
  });

  beforeEach((): void => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${
      this.names.pluralUpperModuleName
    }Repository();
    fakeCacheProvider = new FakeCacheProvider();
    list${this.names.upperModuleName}Service = new List${
      this.names.upperModuleName
    }Service(
      fake${this.names.pluralUpperModuleName}Repository,
      fakeCacheProvider,
      connection,
    );
  });

  it('Should be able to list all the ${
    this.names.pluralLowerModuleName
  }', async (): Promise<void> => {
    const [${this.names.lowerModuleName}01, ${
      this.names.lowerModuleName
    }02] = await fake${this.names.pluralUpperModuleName}Repository.createMany([
      {
        name: '${this.names.lowerModuleName} 1',
        description: 'This is the first ${this.names.lowerModuleName}',
      },
      {
        name: '${this.names.lowerModuleName} 2',
        description: 'This is the second ${this.names.lowerModuleName}',
      },
    ]);

    const ${this.names.lowerModuleName}List = await list${
      this.names.upperModuleName
    }Service.execute(1, 2, {});

    expect(${this.names.lowerModuleName}List.data).toEqual([${
      this.names.lowerModuleName
    }01, ${this.names.lowerModuleName}02]);
  });

  it('Should be able to list all the ${
    this.names.pluralLowerModuleName
  } using cache', async (): Promise<void> => {
    const [${this.names.lowerModuleName}01, ${
      this.names.lowerModuleName
    }02] = await fake${this.names.pluralUpperModuleName}Repository.createMany([
      {
        name: '${this.names.lowerModuleName} 1',
        description: 'This is the first ${this.names.lowerModuleName}',
      },
      {
        name: '${this.names.lowerModuleName} 2',
        description: 'This is the second ${this.names.lowerModuleName}',
      },
    ]);

    await list${this.names.upperModuleName}Service.execute(1, 2, {});

    const ${this.names.lowerModuleName}List = await list${
      this.names.upperModuleName
    }Service.execute(1, 2, {});

    expect(${this.names.lowerModuleName}List.data).toEqual(
      JSON.parse(JSON.stringify([${this.names.lowerModuleName}01, ${
      this.names.lowerModuleName
    }02])),
    );
  });

  it('Should be able to list the ${
    this.names.pluralLowerModuleName
  } with the specified pagination', async (): Promise<void> => {
    const [${this.names.lowerModuleName}01, ${
      this.names.lowerModuleName
    }02] = await fake${this.names.pluralUpperModuleName}Repository.createMany([
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

    const ${this.names.lowerModuleName}List01 = await list${
      this.names.upperModuleName
    }Service.execute(1, 1, {});

    expect(${this.names.lowerModuleName}List01.data).toEqual([${
      this.names.lowerModuleName
    }01]);

    const ${this.names.lowerModuleName}List02 = await list${
      this.names.upperModuleName
    }Service.execute(1, 2, {});

    expect(${this.names.lowerModuleName}List02.data).toEqual([${
      this.names.lowerModuleName
    }01, ${this.names.lowerModuleName}02]);
  });

  it('Should return AppError', async (): Promise<void> => {
    jest.spyOn(fake${
      this.names.pluralUpperModuleName
    }Repository, 'findAll').mockImplementationOnce(() => {
      throw new AppError('FAILED_TO_LIST', 'Failed to list ${
        this.names.pluralLowerModuleName
      }');
    });

    await expect(list${
      this.names.upperModuleName
    }Service.execute(1, 2, {})).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
`;
  }
}
