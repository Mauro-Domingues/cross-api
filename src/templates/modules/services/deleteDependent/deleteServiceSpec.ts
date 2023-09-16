import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class DeleteSpecDependentService {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly names:
      | Pick<
          IModuleNamesDTO,
          'lowerModuleName' | 'upperModuleName' | 'pluralUpperModuleName'
        >
      | undefined,
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names || !this.fatherNames) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    return `import { FakeCacheProvider } ${'from'} '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import { AppError } ${'from'} '@shared/errors/AppError';

import { Fake${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { DataSource } ${'from'} 'typeorm';
import { createConnection } ${'from'} '@shared/typeorm';
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
let connection: DataSource;

describe('Delete${this.names.upperModuleName}Service', () => {
  beforeAll(async () => {
    connection = await createConnection();
  });

  afterAll(async () => {
    return connection.destroy();
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

  it('should be able to delete a ${this.names.lowerModuleName}', async () => {
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
