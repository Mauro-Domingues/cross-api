import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class DeleteSpecService extends BaseTemplateModule {
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
import { AppError } fr\om '@shared/errors/AppError';
import { Fake${this.names.pluralUpperModuleName}Repository } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import type { I${this.names.pluralUpperModuleName}Repository } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import type { IConnection } fr\om '@shared/typeorm';
import { Connection } fr\om '@shared/typeorm';
import { Delete${this.names.upperModuleName}Service } fr\om './Delete${this.names.upperModuleName}Service';

let fake${this.names.pluralUpperModuleName}Repository: I${this.names.pluralUpperModuleName}Repository;
let fakeCacheProvider: ICacheProvider;
let connection: IConnection;
let delete${this.names.upperModuleName}Service: Delete${this.names.upperModuleName}Service;

describe('Delete${this.names.upperModuleName}Service', (): void => {
  beforeAll((): void => {
    connection = new Connection();
    connection.fakeConnect();
  });

  beforeEach((): void => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${this.names.pluralUpperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();
    delete${this.names.upperModuleName}Service = new Delete${this.names.upperModuleName}Service(
      fake${this.names.pluralUpperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('Should be able to delete a ${this.names.lowerModuleName}', async (): Promise<void> => {
    const ${this.names.lowerModuleName} = await fake${this.names.pluralUpperModuleName}Repository.create({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    await delete${this.names.upperModuleName}Service.execute(connection, ${this.names.lowerModuleName}.id);

    const deleted${this.names.upperModuleName} = await fake${this.names.pluralUpperModuleName}Repository.findBy({
      where: {
        id: ${this.names.lowerModuleName}.id,
      },
    });

    expect(deleted${this.names.upperModuleName}).toBe(null);
  });

  it('Should not be able to delete a ${this.names.lowerModuleName} with a non-existing id', async (): Promise<void> => {
    await expect(
      delete${this.names.upperModuleName}Service.execute(connection, 'non-existing-${this.names.lowerModuleName}-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
