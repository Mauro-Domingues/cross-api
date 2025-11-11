import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateSpecController {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'upperModuleName' | 'routeModuleName'
    >,
  ) {}

  public execute(): string {
    return `import request fr\om 'supertest';
  import { app } fr\om '@shared/app';
import type { IConnection } fr\om '@shared/typeorm';
import { Connection } fr\om '@shared/typeorm';

let connection: IConnection;

describe('Create${this.names.upperModuleName}Controller', (): void => {
  beforeAll(async (): Promise<void> => {
    connection = new Connection();
    await connection.connect();
    await connection.mysql.runMigrations();
  });

  afterAll(async (): Promise<void> => {
    await connection.mysql.dropDatabase();
    return connection.mysql.destroy();
  });

  it('Should be able to create a new ${this.names.lowerModuleName}', async (): Promise<void> => {
    const response = await request(app.server).post('/${this.names.routeModuleName}').send({
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
