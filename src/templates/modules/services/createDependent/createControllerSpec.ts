export default function createSpecDependentController(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
  pluralFatherLowerModuleName: string,
): string {
  return `import request from 'supertest';
import { DataSource } from 'typeorm';

import app from '@shared/app';
import createConnection from '@shared/typeorm';

let connection: DataSource;

describe('Create${upperModuleName}Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    return connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    return connection.destroy();
  });

  it('Should be able to create a new ${lowerModuleName}', async () => {
    const response = await request(app).post('/${pluralFatherLowerModuleName}/track/${pluralLowerModuleName}').send({
      name: '${lowerModuleName}',
      description: 'This is a ${lowerModuleName}',
    });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('id');
  });
});
`;
}
