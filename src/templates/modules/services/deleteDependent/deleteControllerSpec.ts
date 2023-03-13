import { IModuleNamesDTO } from 'index';

export class DeleteSpecDependentController {
  private names: Omit<
    IModuleNamesDTO,
    'pluralUpperModuleName' | 'pluralLowerModuleName'
  >;
  private fatherNames: Pick<IModuleNamesDTO, 'routeModuleName'>;

  constructor(names: IModuleNamesDTO, fatherNames: IModuleNamesDTO) {
    this.names = names;
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    return `import request from 'supertest';
import { DataSource } from 'typeorm';
import createConnection from '@shared/typeorm';
import app from '@shared/app';

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
