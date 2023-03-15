"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSpecController = void 0;
var _messages = _interopRequireDefault(require("../../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CreateSpecController {
  constructor(names) {
    this.messages = void 0;
    this.names = void 0;
    this.messages = _messages.default;
    this.names = names;
  }
  execute() {
    if (!this.names) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    return `import request from 'supertest';
import { DataSource } from 'typeorm';
import createConnection from '@shared/typeorm';
import app from '@shared/app';

let connection: DataSource;

describe('Create${this.names.upperModuleName}Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    return connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    return connection.destroy();
  });

  it('Should be able to create a new ${this.names.lowerModuleName}', async () => {
    const response = await request(app).post('/${this.names.routeModuleName}').send({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('id');
  });
});
`;
  }
}
exports.CreateSpecController = CreateSpecController;