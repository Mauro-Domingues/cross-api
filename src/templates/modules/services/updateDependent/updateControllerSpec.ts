export default function updateSpecDependentController(
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

describe('Show${upperModuleName}Controller', () => {
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

  it('Should be able to update ${pluralLowerModuleName}', async () => {
    const response = await request(app)
      .put('/${pluralFatherLowerModuleName}/track/${pluralLowerModuleName}/12345')
      .send({
        name: 'updated${upperModuleName}',
      });

    expect(response.status).toBe(200);
    expect(response.body.data.name).toEqual('updated${upperModuleName}');
  });
});
`;
}
