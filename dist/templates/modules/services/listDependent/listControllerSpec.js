"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listSpecDependentController;
function listSpecDependentController(lowerModuleName, upperModuleName, pluralLowerModuleName, pluralFatherLowerModuleName, dbModuleName) {
  return `import request from 'supertest';
import { DataSource } from 'typeorm';
import createConnection from '@shared/typeorm';
import app from '@shared/app';

let connection: DataSource;

describe('List${upperModuleName}Controller', () => {
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

  it('Should be able to list ${pluralLowerModuleName}', async () => {
    const response = await request(app).get('/${pluralFatherLowerModuleName}/track/${pluralLowerModuleName}');

    expect(response.status).toBe(200);
    expect(response.body.data.list[0]).toHaveProperty('id');
  });
});
`;
}