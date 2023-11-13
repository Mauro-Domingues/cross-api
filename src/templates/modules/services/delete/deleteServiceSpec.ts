import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class DeleteSpecService {
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
      throw this.console.one({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    return `import { FakeCacheProvider } ${'from'} '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import { AppError } ${'from'} '@shared/errors/AppError';

import { Fake${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { Connection } ${'from'} '@shared/typeorm';
import { FakeMysqlDataSource } ${'from'} '@shared/typeorm/dataSources/fakes/fakeDataSource';
import { Delete${this.names.upperModuleName}Service } ${'from'} './Delete${
      this.names.upperModuleName
    }Service';

let fake${this.names.pluralUpperModuleName}Repository: Fake${
      this.names.pluralUpperModuleName
    }Repository;
let fakeCacheProvider: FakeCacheProvider;
let delete${this.names.upperModuleName}: Delete${
      this.names.upperModuleName
    }Service;

describe('Delete${this.names.upperModuleName}Service', () => {
  beforeAll(async () => {
    Connection.mysql = FakeMysqlDataSource;
  });

  beforeEach(() => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${
      this.names.pluralUpperModuleName
    }Repository();
    fakeCacheProvider = new FakeCacheProvider();
    delete${this.names.upperModuleName} = new Delete${
      this.names.upperModuleName
    }Service(
      fake${this.names.pluralUpperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should be able to delete a new ${
    this.names.lowerModuleName
  }', async () => {
    const ${this.names.lowerModuleName} = await fake${
      this.names.pluralUpperModuleName
    }Repository.create({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    await delete${this.names.upperModuleName}.execute(${
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

  it('should return AppError', async () => {
    await expect(delete${
      this.names.upperModuleName
    }.execute()).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
