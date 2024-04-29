import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class DeleteSpecService {
  private readonly messages: IMessageDTO;

  public constructor(
    private readonly names:
      | Omit<IModuleNameDTO, 'dbModuleName' | 'routeModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
  }

  public execute(): string {
    if (!this.names) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return `import { FakeCacheProvider } ${'from'} '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import { ICacheProviderDTO } ${'from'} '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { AppError } ${'from'} '@shared/errors/AppError';
import { Fake${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { I${
      this.names.pluralUpperModuleName
    }RepositoryDTO } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { Connection, IConnectionDTO } ${'from'} '@shared/typeorm';
import { FakeDataSource } ${'from'} '@shared/typeorm/dataSources/fakes/fakeDataSource';
import { Delete${this.names.upperModuleName}Service } ${'from'} './Delete${
      this.names.upperModuleName
    }Service';

let fake${this.names.pluralUpperModuleName}Repository: I${
      this.names.pluralUpperModuleName
    }RepositoryDTO;
let fakeCacheProvider: ICacheProviderDTO;
let connection: IConnectionDTO;
let delete${this.names.upperModuleName}Service: Delete${
      this.names.upperModuleName
    }Service;

describe('Delete${this.names.upperModuleName}Service', (): void => {
  beforeAll((): void => {
    connection = new Connection('database_test', FakeDataSource);
  });

  beforeEach((): void => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${
      this.names.pluralUpperModuleName
    }Repository();
    fakeCacheProvider = new FakeCacheProvider();
    delete${this.names.upperModuleName}Service = new Delete${
      this.names.upperModuleName
    }Service(
      fake${this.names.pluralUpperModuleName}Repository,
      fakeCacheProvider,
      connection,
    );
  });

  it('Should be able to delete a ${
    this.names.lowerModuleName
  }', async (): Promise<void> => {
    const ${this.names.lowerModuleName} = await fake${
      this.names.pluralUpperModuleName
    }Repository.create({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    await delete${this.names.upperModuleName}Service.execute(${
      this.names.lowerModuleName
    }.id);

    const deleted${this.names.upperModuleName} = await fake${
      this.names.pluralUpperModuleName
    }Repository.findBy({
      where: {
        id: ${this.names.lowerModuleName}.id,
      },
    });

    expect(deleted${this.names.upperModuleName}).toBe(null);
  });

  it('Should not be able to delete a ${
    this.names.lowerModuleName
  } with a non-existing id', async (): Promise<void> => {
    await expect(
      delete${this.names.upperModuleName}Service.execute('non-existing-${
      this.names.lowerModuleName
    }-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
