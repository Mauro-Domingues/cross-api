import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateSpecService {
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
        breakStart: false,
        breakEnd: false,
      });
    }

    return `import { FakeCacheProvider } ${'from'} '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import { ICacheProviderDTO } ${'from'} '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { Fake${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { Fake${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { Connection, IConnectionDTO } ${'from'} '@shared/typeorm';
import { AppError } ${'from'} '@shared/errors/AppError';
import { FakeDataSource } ${'from'} '@shared/typeorm/dataSources/fakes/fakeDataSource';
import { Create${this.names.upperModuleName}Service } ${'from'} './Create${
      this.names.upperModuleName
    }Service';

let fake${this.names.pluralUpperModuleName}Repository: I${
      this.names.pluralUpperModuleName
    }RepositoryDTO;
let fakeCacheProvider: ICacheProviderDTO;
let connection: IConnectionDTO;
let create${this.names.upperModuleName}Service: Create${
      this.names.upperModuleName
    }Service;

describe('Create${this.names.upperModuleName}Service', (): void => {
  beforeAll((): void => {
    connection = new Connection('database_test', FakeDataSource);
  });

  beforeEach((): void => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${
      this.names.pluralUpperModuleName
    }Repository();
    fakeCacheProvider = new FakeCacheProvider();
    create${this.names.upperModuleName}Service = new Create${
      this.names.upperModuleName
    }Service(
      fake${this.names.pluralUpperModuleName}Repository,
      fakeCacheProvider,
      connection,
    );
  });

  it('Should be able to create a new ${
    this.names.lowerModuleName
  }', async (): Promise<void> => {
    const ${this.names.lowerModuleName} = await create${
      this.names.upperModuleName
    }Service.execute({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    expect(${this.names.lowerModuleName}.data).toHaveProperty('id');
  });

  it('Should return AppError', async (): Promise<void> => {
    jest.spyOn(fake${
      this.names.pluralUpperModuleName
    }Repository, 'create').mockImplementationOnce(() => {
      throw new AppError('FAILED_TO_CREATE', 'Failed to create a ${
        this.names.lowerModuleName
      }');
    });

    await expect(create${
      this.names.upperModuleName
    }Service.execute({})).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
`;
  }
}
