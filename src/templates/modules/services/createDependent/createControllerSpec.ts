import { IModuleNamesDTO } from '@tools/names';
import messages from '@tools/messages';

export class CreateSpecDependentController {
  private messages: typeof messages;
  private names:
    | Pick<
        IModuleNamesDTO,
        'lowerModuleName' | 'upperModuleName' | 'routeModuleName'
      >
    | undefined;
  private fatherNames: Pick<IModuleNamesDTO, 'routeModuleName'> | undefined;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = messages;
    this.names = names;
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    if (!this.names || !this.fatherNames) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
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
    const response = await request(app).post('/${this.fatherNames.routeModuleName}/track/${this.names.routeModuleName}').send({
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
