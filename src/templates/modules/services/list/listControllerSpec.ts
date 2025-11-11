import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class ListSpecController extends BaseTemplateModule {
  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'pluralUpperModuleName'>,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import request fr\om 'supertest';
import { v4 as uuid } fr\om 'uuid';
import { ${this.names.upperModuleName} } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { app } fr\om '@shared/app';
import type { IConnection } fr\om '@shared/typeorm';
import { Connection } fr\om '@shared/typeorm';

let connection: IConnection;

describe('List${this.names.upperModuleName}Controller', (): void => {
  beforeAll(async (): Promise<void> => {
    connection = new Connection();
    await connection.connect();
    await connection.mysql.runMigrations();

    await connection.mysql
      .createQueryBuilder()
      .insert()
      .into(${this.names.upperModuleName})
      .values({
        id: uuid(),
        name: '${this.names.lowerModuleName}',
        description: 'This is a ${this.names.lowerModuleName}',
      })
      .execute();
  });

  afterAll(async (): Promise<void> => {
    await connection.mysql.dropDatabase();
    return connection.mysql.destroy();
  });

  it('Should be able to list all ${this.names.pluralLowerModuleName}', async (): Promise<void> => {
    const response = await request(app.server).get('/${this.names.routeModuleName}');

    expect(response.status).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
  });
});
`;
  }
}
