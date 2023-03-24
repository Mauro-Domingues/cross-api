"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSpecDependentController = void 0;
const messages_1 = require("@tools/messages");
class UpdateSpecDependentController {
    constructor(names, fatherNames) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
        this.fatherNames = fatherNames;
    }
    execute() {
        if (!this.names || !this.fatherNames) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        return `import request from 'supertest';
import { DataSource } from 'typeorm';
import createConnection from '@shared/typeorm';
import app from '@shared/app';

let connection: DataSource;

describe('Update${this.names.upperModuleName}Controller', () => {
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

  it('Should be able to update ${this.names.pluralLowerModuleName}', async () => {
    const response = await request(app).put('/${this.fatherNames.routeModuleName}/track/${this.names.routeModuleName}/12345').send({
      name: 'updated${this.names.upperModuleName}',
    });

    expect(response.status).toBe(200);
    expect(response.body.data.name).toEqual('updated${this.names.upperModuleName}');
  });
});
`;
    }
}
exports.UpdateSpecDependentController = UpdateSpecDependentController;
