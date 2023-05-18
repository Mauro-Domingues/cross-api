import { Messages } from '../../../../tools/messages.js';
import { Console } from '../../../../tools/console.js';
export class UpdateSpecController {
    messages;
    console;
    names;
    constructor(names) {
        this.messages = new Messages().execute();
        this.console = new Console();
        this.names = names;
    }
    execute() {
        if (!this.names) {
            this.console.one([
                this.messages.moduleNotFound,
                'red',
                true,
                false,
                false,
            ]);
            throw new Error();
        }
        return `import request from 'supertest';
import { DataSource } from 'typeorm';
import { createConnection } from '@shared/typeorm';
import { app } from '@shared/app';

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
    const response = await request(app).put('/${this.names.routeModuleName}/12345').send({
      name: 'updated${this.names.upperModuleName}',
    });

    expect(response.status).toBe(200);
    expect(response.body.data.name).toEqual('updated${this.names.upperModuleName}');
  });
});
`;
    }
}
