import { Messages } from '../../../../tools/messages.js';
import { Console } from '../../../../tools/console.js';
export class DeleteSpecDependentController {
    messages;
    console;
    names;
    fatherNames;
    constructor(names, fatherNames) {
        this.messages = new Messages().execute();
        this.console = new Console();
        this.names = names;
        this.fatherNames = fatherNames;
    }
    execute() {
        if (!this.names || !this.fatherNames) {
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

describe('Delete${this.names.upperModuleName}Controller', () => {
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

  it('Should be able to delete a ${this.names.lowerModuleName}', async () => {
    const response = await request(app).delete('/${this.fatherNames.routeModuleName}/track/${this.names.routeModuleName}/12345');

    expect(response.status).toBe(200);
  });
});
`;
    }
}
