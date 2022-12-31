export default function createSpecController(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
): string {
  return `import request from 'supertest';
import { Connection } from 'typeorm';

import app from '@shared/app';
import createConnection from '@shared/typeorm';

let connection: Connection;

describe('Create${upperModuleName}Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to create a ${lowerModuleName}', async () => {
    const response = await request(app).post('/${pluralLowerModuleName}').send({
      name: '${lowerModuleName}',
      description: 'This is a ${lowerModuleName}',
    });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('id');
  });
});
`;
}
