import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class ListSpecDependentController {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly names:
      | Omit<IModuleNamesDTO, 'pluralUpperModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
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

    return `import request ${'from'} 'supertest';
import { DataSource } ${'from'} 'typeorm';
import { createConnection } ${'from'} '@shared/typeorm';
import { app } ${'from'} '@shared/app';

let connection: DataSource;

describe('List${this.names.upperModuleName}Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    return connection.query(
      \`INSERT INTO ${
        this.names.dbModuleName
      }(id, name, description) values('12345', '${
      this.names.lowerModuleName
    }', 'This is a ${this.names.lowerModuleName}')\`,
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    return connection.destroy();
  });

  it('Should be able to list ${this.names.pluralLowerModuleName}', async () => {
    const response = await request(app).get('/${this.names.routeModuleName}');

    expect(response.status).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
  });
});
`;
  }
}
