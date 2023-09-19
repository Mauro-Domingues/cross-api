import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class ShowSpecDependentService {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly names:
      | Omit<IModuleNamesDTO, 'routeModuleName' | 'dbModuleName'>
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

    return `import { AppError } ${'from'} '@shared/errors/AppError';
import { Fake${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.fatherNames.pluralLowerModuleName
    }/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { Connection } ${'from'} '@shared/typeorm';
import { FakeMysqlDataSource } ${'from'} '@shared/typeorm/dataSources/fakes/fakeDataSource';
import { Show${this.names.upperModuleName}Service } ${'from'} './Show${
      this.names.upperModuleName
    }Service';

let fake${this.names.pluralUpperModuleName}Repository: Fake${
      this.names.pluralUpperModuleName
    }Repository;
let show${this.names.upperModuleName}: Show${this.names.upperModuleName}Service;

describe('Show${this.names.upperModuleName}Service', () => {
  beforeAll(async () => {
    Connection.mysql = FakeMysqlDataSource;
  });

  beforeEach(() => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${
      this.names.pluralUpperModuleName
    }Repository();
    show${this.names.upperModuleName} = new Show${
      this.names.upperModuleName
    }Service(fake${this.names.pluralUpperModuleName}Repository);
  });

  it('should be able to show a ${this.names.lowerModuleName}', async () => {
    const ${this.names.lowerModuleName} = await fake${
      this.names.pluralUpperModuleName
    }Repository.create({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    const get${this.names.upperModuleName} = await show${
      this.names.upperModuleName
    }.execute(${this.names.lowerModuleName}.id);

    expect(get${this.names.upperModuleName}.data).toHaveProperty('id');
    expect(get${this.names.upperModuleName}.data).toEqual(${
      this.names.lowerModuleName
    });
  });

  it('should not be able to show ${
    this.names.pluralLowerModuleName
  } with a non-existing id', async () => {
    await expect(
      show${this.names.upperModuleName}.execute('non-existing-${
      this.names.lowerModuleName
    }-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
