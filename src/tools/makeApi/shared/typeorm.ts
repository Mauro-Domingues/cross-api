import { CreateConnection } from '@templates/api/connection';
import { CreateFakeDataSource } from '@templates/api/fakeDataSource';
import { CreateMysqlDataSource } from '@templates/api/mysqlDataSource';
import { CreateMigrationIndex } from '@templates/modules/migrations/migrationIndex';
import { FileManager } from '@tools/fileManager';

export class CreateTypeorm {
  private readonly createMysqlDataSource: CreateMysqlDataSource;
  private readonly createMigrationIndex: CreateMigrationIndex;
  private readonly createFakeDataSource: CreateFakeDataSource;
  private readonly createConnection: CreateConnection;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createMysqlDataSource = new CreateMysqlDataSource();
    this.createMigrationIndex = new CreateMigrationIndex();
    this.createFakeDataSource = new CreateFakeDataSource();
    this.createConnection = new CreateConnection();
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
    const basePath = this.fileManager.resolvePath(['src', 'shared', 'typeorm']);

    return this.fileManager.checkAndCreateMultiFile([
      [
        [basePath, 'dataSources', 'mysqlDataSource.ts'],
        this.createMysqlDataSource,
      ],
      [
        [basePath, 'dataSources', 'fakes', 'fakeDataSource.ts'],
        this.createFakeDataSource,
      ],
      [[basePath, 'runMigrations.ts'], this.createMigrationIndex],
      [[basePath, 'index.ts'], this.createConnection],
    ]);
  }
}
