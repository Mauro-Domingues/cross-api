import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateSpecDependentService {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly names:
    | Pick<
        IModuleNamesDTO,
        'lowerModuleName' | 'upperModuleName' | 'pluralUpperModuleName'
      >
    | undefined;
  private readonly fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
    this.fatherNames = fatherNames;
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

    return `import { FakeCacheProvider } from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import { Fake${this.names.pluralUpperModuleName}Repository } from '@modules/${this.fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { DataSource } from 'typeorm';
import { createConnection } from '@shared/typeorm';
import { AppError } from '@shared/errors/AppError';
import { Create${this.names.upperModuleName}Service } from './Create${this.names.upperModuleName}Service';

let fake${this.names.pluralUpperModuleName}Repository: Fake${this.names.pluralUpperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let create${this.names.upperModuleName}: Create${this.names.upperModuleName}Service;
let connection: DataSource;

describe('Create${this.names.upperModuleName}Service', () => {
  beforeAll(async () => {
    connection = await createConnection();
  });

  afterAll(async () => {
    return connection.destroy();
  });

  beforeEach(() => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${this.names.pluralUpperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    create${this.names.upperModuleName} = new Create${this.names.upperModuleName}Service(
      fake${this.names.pluralUpperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new ${this.names.lowerModuleName}', async () => {
    const ${this.names.lowerModuleName} = await create${this.names.upperModuleName}.execute({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    expect(${this.names.lowerModuleName}.data).toHaveProperty('id');
  });

  it('should return AppError', async () => {
    jest.spyOn(fake${this.names.pluralUpperModuleName}Repository, 'create').mockImplementationOnce(() => {
      throw new AppError('Failed to create a ${this.names.lowerModuleName}');
    });

    await expect(
      create${this.names.upperModuleName}.execute({
        name: '${this.names.lowerModuleName}',
        description: 'This is a ${this.names.lowerModuleName}',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
