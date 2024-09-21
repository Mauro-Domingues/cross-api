import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class UpdateSpecController {
  public constructor(
    private readonly names: Omit<
      IModuleNameDTO,
      'pluralUpperModuleName' | 'pluralLowerModuleName'
    >,
  ) {}

  public execute(): string {
    return `import request ${'from'} 'supertest';
import { MysqlDataSource } ${'from'} '@shared/typeorm/dataSources/mysqlDataSource';
import { IConnection } ${'from'} '@shared/typeorm';
import { app } ${'from'} '@shared/app';
import { v4 as uuid } ${'from'} 'uuid';

const id = uuid();
let connection: IConnection;

describe('Update${this.names.upperModuleName}Controller', (): void => {
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
      [id, '${this.names.lowerModuleName}', 'This is a ${
      this.names.lowerModuleName
    }'],
    );
  });

  afterAll(async (): Promise<void> => {
    await connection.mysql.dropDatabase();
    return connection.mysql.destroy();
  });

  it('Should be able to update a ${
    this.names.lowerModuleName
  }', async (): Promise<void> => {
    const response = await request(app.server).put(\`/${
      this.names.routeModuleName
    }/\${id}\`).send({
      name: 'updated${this.names.upperModuleName}',
    });

    expect(response.status).toBe(200);
    expect(response.body.data.name).toEqual('updated${
      this.names.upperModuleName
    }');
  });
});
`;
  }
}
