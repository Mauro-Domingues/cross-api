"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showSpecDependentController;
function showSpecDependentController(lowerModuleName, upperModuleName, pluralLowerModuleName, pluralFatherLowerModuleName, dbModuleName) {
  return `import request from 'supertest';
import { DataSource } from 'typeorm';
import createConnection from '@shared/typeorm';
import app from '@shared/app';

let connection: DataSource;

describe('Show${upperModuleName}Controller', () => {
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

  it('Should be able to show ${pluralLowerModuleName}', async () => {
    const response = await request(app).get('/${pluralFatherLowerModuleName}/track/${pluralLowerModuleName}/12345');

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('id');
  });
});
`;
}