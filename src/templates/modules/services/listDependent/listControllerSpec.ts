import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class ListSpecDependentController {
  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'pluralUpperModuleName'>,
  ) {}

  public execute(): string {
    return `import request ${'from'} 'supertest';
import { MysqlDataSource } ${'from'} '@shared/typeorm/dataSources/mysqlDataSource';
import { IConnection } ${'from'} '@shared/typeorm';
import { app } ${'from'} '@shared/app';
import { v4 as uuid } ${'from'} 'uuid';

let connection: IConnection;

describe('List${this.names.upperModuleName}Controller', (): void => {
  beforeAll(async (): Promise<void> => {
    connection = {
      client: 'database_test',
      mysql: await MysqlDataSource('database_test').initialize(),
    };
    await connection.mysql.runMigrations();

    return connection.mysql.query(
      'INSERT INTO ${
        this.names.dbModuleName
      } (id, name, description) VALUES (?, ?, ?);',
      [uuid(), '${this.names.lowerModuleName}', 'This is a ${
      this.names.lowerModuleName
    }'],
    );
  });

  afterAll(async (): Promise<void> => {
    await connection.mysql.dropDatabase();
    return connection.mysql.destroy();
  });

  it('Should be able to list all ${
    this.names.pluralLowerModuleName
  }', async (): Promise<void> => {
    const response = await request(app.server).get('/${
      this.names.routeModuleName
    }');

    expect(response.status).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
  });
});
`;
  }
}
