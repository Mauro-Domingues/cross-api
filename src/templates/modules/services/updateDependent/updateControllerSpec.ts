import { IModuleNamesDTO } from '@tools/names';

export class UpdateSpecDependentController {
  private names: Omit<IModuleNamesDTO, 'pluralUpperModuleName'>;
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
