"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowSpecController = void 0;
var _messages = require("../../../../../dist/tools/messages");
class ShowSpecController {
  constructor(names) {
    this.messages = void 0;
    this.names = void 0;
    this.messages = new _messages.Messages().execute();
    this.names = names;
  }
  execute() {
    if (!this.names) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    return `import request from 'supertest';
import { DataSource } from 'typeorm';
import { createConnection } from '@shared/typeorm';
import { app } from '@shared/app';

let connection: DataSource;

describe('Show${this.names.upperModuleName}Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    return connection.query(
      \`INSERT INTO ${this.names.dbModuleName}(id, name, description) values('12345', '${this.names.lowerModuleName}', 'This is a ${this.names.lowerModuleName}')\`,
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    return connection.destroy();
  });

  it('Should be able to show ${this.names.pluralLowerModuleName}', async () => {
    const response = await request(app).get('/${this.names.routeModuleName}/12345');

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('id');
  });
});
`;
  }
}
exports.ShowSpecController = ShowSpecController;