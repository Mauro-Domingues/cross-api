export default function updateSpecController(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  dbModuleName: string,
): string {
  return `import request from 'supertest';
import { DataSource } from 'typeorm';
import createConnection from '@shared/typeorm';
import app from '@shared/app';

let connection: DataSource;

describe('Update${upperModuleName}Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    await connection.query(
      \`INSERT INTO ${dbModuleName}(id, name, description) values('12345', '${lowerModuleName}', 'This is a ${lowerModuleName}')\`,
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.destroy();
  });

  it('Should be able to update ${pluralLowerModuleName}', async () => {
    const response = await request(app).put('/${pluralLowerModuleName}/12345').send({
      name: 'updated${upperModuleName}',
    });

    expect(response.status).toBe(200);
    expect(response.body.data.name).toEqual('updated${upperModuleName}');
  });
});
`;
}
