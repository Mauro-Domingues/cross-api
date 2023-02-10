import IModuleNamesDTO from 'index';

export default function listSpecController(
  names: Omit<IModuleNamesDTO, 'pluralUpperModuleName'>,
): string {
  return `import request from 'supertest';
import { DataSource } from 'typeorm';
import createConnection from '@shared/typeorm';
import app from '@shared/app';

let connection: DataSource;

describe('List${names.upperModuleName}Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    return connection.query(
      \`INSERT INTO ${names.dbModuleName}(id, name, description) values('12345', '${names.lowerModuleName}', 'This is a ${names.lowerModuleName}')\`,
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    return connection.destroy();
  });

  it('Should be able to list ${names.pluralLowerModuleName}', async () => {
    const response = await request(app).get('/${names.routeModuleName}');

    expect(response.status).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
  });
});
`;
}
