import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class DeleteSpecController extends BaseTemplateModule {
  public constructor(
    private readonly names: Omit<
      IModuleNameDTO,
      'pluralUpperModuleName' | 'dbModuleName'
    >,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import request fr\u006Fm 'supertest';
import { v4 as uuid } fr\u006Fm 'uuid';
import { ${this.names.upperModuleName} } fr\u006Fm '@modules/${this.baseNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { app } fr\u006Fm '@shared/app';
import type { IConnection } fr\u006Fm '@shared/typeorm';
import { Connection } fr\u006Fm '@shared/typeorm';

const id = uuid();
let connection: IConnection;

describe('Delete${this.names.upperModuleName}Controller', (): void => {
  beforeAll(async (): Promise<void> => {
    connection = new Connection();
    await connection.connect();
    await connection.mysql.runMigrations();

    await connection.mysql
      .createQueryBuilder()
      .insert()
      .into(${this.names.upperModuleName})
      .values({
        id,
        name: '${this.names.lowerModuleName}',
        description: 'This is a ${this.names.lowerModuleName}',
      })
      .execute();
  });

  afterAll(async (): Promise<void> => {
    await connection.mysql.dropDatabase();
    return connection.mysql.destroy();
  });

  it('Should be able to delete a ${this.names.lowerModuleName}', async (): Promise<void> => {
    const response = await request(app.server).delete(\`/${this.names.routeModuleName}/\${id}\`);

    expect(response.status).toBe(204);
  });
});
`;
  }
}
