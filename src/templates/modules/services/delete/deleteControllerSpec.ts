export default function deleteSpecController(
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

describe('Delete${upperModuleName}Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    return connection.query(
      \`INSERT INTO ${dbModuleName}(id, name, description) values('12345', '${lowerModuleName}', 'This is a ${lowerModuleName}')\`,
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    return connection.destroy();
  });

  it('Should be able to delete a ${lowerModuleName}', async () => {
    const response = await request(app).delete('/${pluralLowerModuleName}/12345');

    expect(response.status).toBe(200);
  });
});
`;
}
