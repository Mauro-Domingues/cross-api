import { IModuleNamesDTO } from 'index';

export function createSpecDependentController(
  names: Pick<
    IModuleNamesDTO,
    'lowerModuleName' | 'upperModuleName' | 'routeModuleName'
  >,
  fatherNames: Pick<IModuleNamesDTO, 'routeModuleName'>,
): string {
  return `import request from 'supertest';
import { DataSource } from 'typeorm';
import createConnection from '@shared/typeorm';
import app from '@shared/app';

let connection: DataSource;

describe('Create${names.upperModuleName}Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    return connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    return connection.destroy();
  });

  it('Should be able to create a new ${names.lowerModuleName}', async () => {
    const response = await request(app).post('/${fatherNames.routeModuleName}/track/${names.routeModuleName}').send({
      name: '${names.lowerModuleName}',
      description: 'This is a ${names.lowerModuleName}',
    });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('id');
  });
});
`;
}
