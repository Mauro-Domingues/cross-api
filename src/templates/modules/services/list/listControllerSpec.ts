import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class ListSpecController {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Omit<IModuleNamesDTO, 'pluralUpperModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    return `import request ${'from'} 'supertest';
import { MysqlDataSource } ${'from'} '@shared/typeorm/dataSources/mysqlDataSource';
import { Connection } ${'from'} '@shared/typeorm';
import { app } ${'from'} '@shared/app';

describe('List${this.names.upperModuleName}Controller', (): void => {
  beforeAll(async (): Promise<void> => {
    Connection.mysql = await MysqlDataSource(Connection.client).initialize();
    await Connection.mysql.runMigrations();

    return Connection.mysql.query(
      'INSERT INTO ${
        this.names.dbModuleName
      } (id, name, description) values (?, ?, ?);',
      ['12345', ${this.names.lowerModuleName}, 'This is a ${
      this.names.lowerModuleName
    }'],
    );
  });

  afterAll(async (): Promise<void> => {
    await Connection.mysql.dropDatabase();
    return Connection.mysql.destroy();
  });

  it('Should be able to list ${
    this.names.pluralLowerModuleName
  }', async (): Promise<void> => {
    const response = await request(app.server).get('/${
      this.names.routeModuleName
    }');

    expect(response.status).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
  });
});
`;
  }
}
