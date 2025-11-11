import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class CreateSpecService extends BaseTemplateModule {
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
    return `import { FakeCacheProvider } fr\om '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import type { ICacheProvider } fr\om '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { Fake${this.names.pluralUpperModuleName}Repository } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import type { I${this.names.pluralUpperModuleName}Repository } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import type { IConnection } fr\om '@shared/typeorm';
import { Connection } fr\om '@shared/typeorm';
import { AppError } fr\om '@shared/errors/AppError';
import { Create${this.names.upperModuleName}Service } fr\om './Create${this.names.upperModuleName}Service';

let fake${this.names.pluralUpperModuleName}Repository: I${this.names.pluralUpperModuleName}Repository;
let fakeCacheProvider: ICacheProvider;
let connection: IConnection;
let create${this.names.upperModuleName}Service: Create${this.names.upperModuleName}Service;

describe('Create${this.names.upperModuleName}Service', (): void => {
  beforeAll((): void => {
    connection = new Connection();
    connection.fakeConnect();
  });

  beforeEach((): void => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${this.names.pluralUpperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();
    create${this.names.upperModuleName}Service = new Create${this.names.upperModuleName}Service(
      fake${this.names.pluralUpperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('Should be able to create a new ${this.names.lowerModuleName}', async (): Promise<void> => {
    const ${this.names.lowerModuleName} = await create${this.names.upperModuleName}Service.execute(connection, {
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    expect(${this.names.lowerModuleName}.data).toHaveProperty('id');
  });

  it('Should return AppError', async (): Promise<void> => {
    jest.spyOn(fake${this.names.pluralUpperModuleName}Repository, 'create').mockImplementationOnce(() => {
      throw new AppError('FAILED_TO_CREATE', 'Failed to create a ${this.names.lowerModuleName}');
    });

    await expect(
      create${this.names.upperModuleName}Service.execute(connection, {}),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
