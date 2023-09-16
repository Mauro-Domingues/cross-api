import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateSpecDependentController {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly names:
      | Pick<
          IModuleNamesDTO,
          'lowerModuleName' | 'upperModuleName' | 'routeModuleName'
        >
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

describe('Create${this.names.upperModuleName}Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    return connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    return connection.destroy();
  });

  it('Should be able to create a new ${
    this.names.lowerModuleName
  }', async () => {
    const response = await request(app).post('/${
      this.names.routeModuleName
    }').send({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    expect(response.status).toBe(201);
    expect(response.body.data).toHaveProperty('id');
  });
});
`;
  }
}
