"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSpecController = updateSpecController;
function updateSpecController(names) {
  return `import request from 'supertest';
import { DataSource } from 'typeorm';
import createConnection from '@shared/typeorm';
import app from '@shared/app';

let connection: DataSource;

describe('Update${names.upperModuleName}Controller', () => {
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

  it('Should be able to update ${names.pluralLowerModuleName}', async () => {
    const response = await request(app).put('/${names.routeModuleName}/12345').send({
      name: 'updated${names.upperModuleName}',
    });

    expect(response.status).toBe(200);
    expect(response.body.data.name).toEqual('updated${names.upperModuleName}');
  });
});
`;
}