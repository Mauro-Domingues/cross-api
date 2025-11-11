import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class UpdateSpecService extends BaseTemplateModule {
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
import { Update${this.names.upperModuleName}Service } fr\om './Update${this.names.upperModuleName}Service';

let fake${this.names.pluralUpperModuleName}Repository: I${this.names.pluralUpperModuleName}Repository;
let fakeCacheProvider: ICacheProvider;
let connection: IConnection;
let update${this.names.upperModuleName}Service: Update${this.names.upperModuleName}Service;

describe('Update${this.names.upperModuleName}Service', (): void => {
  beforeAll((): void => {
    connection = new Connection();
    connection.fakeConnect();
  });

  beforeEach((): void => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${this.names.pluralUpperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();
    update${this.names.upperModuleName}Service = new Update${this.names.upperModuleName}Service(
      fake${this.names.pluralUpperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('Should be able to update a ${this.names.lowerModuleName}', async (): Promise<void> => {
    const ${this.names.lowerModuleName} = await fake${this.names.pluralUpperModuleName}Repository.create({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    const updated${this.names.upperModuleName} = await update${this.names.upperModuleName}Service.execute(
      connection,
      ${this.names.lowerModuleName}.id,
      {
        ...${this.names.lowerModuleName},
        name: 'updated${this.names.upperModuleName}',
      },
    );

    expect(updated${this.names.upperModuleName}.data.name).toEqual('updated${this.names.upperModuleName}');
  });

  it('Should not be able to update a ${this.names.lowerModuleName} with a non-existing id', async (): Promise<void> => {
    await expect(
      update${this.names.upperModuleName}Service.execute(connection, 'non-existing-${this.names.lowerModuleName}-id', {}),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
