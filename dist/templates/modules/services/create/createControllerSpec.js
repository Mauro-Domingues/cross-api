"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSpecController;
function createSpecController(lowerModuleName, upperModuleName, pluralLowerModuleName) {
  return `import request from 'supertest';
import { DataSource } from 'typeorm';
import createConnection from '@shared/typeorm';
import app from '@shared/app';

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