export default function listSpecDependentController(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralFatherLowerModuleName: string,
  dbModuleName: string,
): string {
  return `import request from 'supertest';
import { Connection } from 'typeorm';
import createConnection from '@shared/typeorm';
import app from '@shared/app';

let connection: Connection;

describe('List${upperModuleName}Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    await connection.query(
      \`INSERT INTO ${dbModuleName}(id, name, description) values('12345', '${lowerModuleName}', 'This is a ${lowerModuleName}')\`,
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });
  
  it('Should be able to list ${pluralLowerModuleName}', async () => {
    const response = await request(app)
      .get('/${pluralFatherLowerModuleName}/track/${pluralLowerModuleName}')

      expect(response.status).toBe(200);
      expect(response.body.data.list[0]).toHaveProperty('id');
  });
});
`;
}
