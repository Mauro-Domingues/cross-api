"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSpecController = deleteSpecController;
function deleteSpecController(names) {
  return `import request from 'supertest';
import { DataSource } from 'typeorm';
import createConnection from '@shared/typeorm';
import app from '@shared/app';

let connection: DataSource;

describe('Delete${names.upperModuleName}Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    return connection.query(
      \`INSERT INTO ${names.dbModuleName}(id, name, description) values('12345', '${names.lowerModuleName}', 'This is a ${names.lowerModuleName}')\`,
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    return connection.destroy();
  });

  it('Should be able to delete a ${names.lowerModuleName}', async () => {
    const response = await request(app).delete('/${names.routeModuleName}/12345');

    expect(response.status).toBe(200);
  });
});
`;
}