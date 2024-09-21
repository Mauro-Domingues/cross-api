import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class ShowSpecService {
  public constructor(
    private readonly names: Omit<
      IModuleNameDTO,
      'dbModuleName' | 'routeModuleName'
    >,
  ) {}

  public execute(): string {
    return `import { AppError } ${'from'} '@shared/errors/AppError';
import { Fake${
      this.names.pluralUpperModuleName
    }Repository } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { I${this.names.pluralUpperModuleName}Repository } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/repositories/I${this.names.pluralUpperModuleName}Repository';
import { Connection, IConnection } ${'from'} '@shared/typeorm';
import { FakeDataSource } ${'from'} '@shared/typeorm/dataSources/fakes/fakeDataSource';
import { Show${this.names.upperModuleName}Service } ${'from'} './Show${
      this.names.upperModuleName
    }Service';

let fake${this.names.pluralUpperModuleName}Repository: I${
      this.names.pluralUpperModuleName
    }Repository;
let connection: IConnection;
let show${this.names.upperModuleName}Service: Show${
      this.names.upperModuleName
    }Service;

describe('Show${this.names.upperModuleName}Service', (): void => {
  beforeAll((): void => {
    connection = new Connection('database_test', FakeDataSource);
  });

  beforeEach((): void => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${
      this.names.pluralUpperModuleName
    }Repository();
    show${this.names.upperModuleName}Service = new Show${
      this.names.upperModuleName
    }Service(
      fake${this.names.pluralUpperModuleName}Repository,
      connection,
    );
  });

  it('Should be able to show a ${
    this.names.lowerModuleName
  }', async (): Promise<void> => {
    const ${this.names.lowerModuleName} = await fake${
      this.names.pluralUpperModuleName
    }Repository.create({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    const get${this.names.upperModuleName} = await show${
      this.names.upperModuleName
    }Service.execute(${this.names.lowerModuleName}.id);

    expect(get${this.names.upperModuleName}.data).toHaveProperty('id');
    expect(get${this.names.upperModuleName}.data).toEqual(${
      this.names.lowerModuleName
    });
  });

  it('Should not be able to show a ${
    this.names.lowerModuleName
  } with a non-existing id', async (): Promise<void> => {
    await expect(
      show${this.names.upperModuleName}Service.execute('non-existing-${
      this.names.lowerModuleName
    }-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
