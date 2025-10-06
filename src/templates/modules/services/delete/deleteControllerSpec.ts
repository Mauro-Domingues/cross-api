import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
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
    return `import request ${'from'} 'supertest';
import { Connection, IConnection } ${'from'} '@shared/typeorm';
import { app } ${'from'} '@shared/app';
import { v4 as uuid } ${'from'} 'uuid';
import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.baseNames.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';

const id = uuid();
let connection: IConnection;

describe('Delete${this.names.upperModuleName}Controller', (): void => {
  beforeAll(async (): Promise<void> => {
    connection = new Connection();
    await connection.connect();
    await connection.mysql.runMigrations();

    await connection.mysql.manager.save(
      connection.mysql.manager.create(${this.names.upperModuleName}, {
        id,
        name: '${this.names.lowerModuleName}',
        description: 'This is a ${this.names.lowerModuleName}',
      }),
    );
  });

  afterAll(async (): Promise<void> => {
    await connection.mysql.dropDatabase();
    return connection.mysql.destroy();
  });

  it('Should be able to delete a ${
    this.names.lowerModuleName
  }', async (): Promise<void> => {
    const response = await request(app.server).delete(\`/${
      this.names.routeModuleName
    }/\${id}\`);

    expect(response.status).toBe(200);
  });
});
`;
  }
}
