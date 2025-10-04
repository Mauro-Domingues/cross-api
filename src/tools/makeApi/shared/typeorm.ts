import { CreateConnection } from '@templates/api/connection';
import { CreateFakeDataSource } from '@templates/api/fakeDataSource';
import { CreateMysqlDataSource } from '@templates/api/mysqlDataSource';
import { CreateMigrationIndex } from '@templates/modules/migrations/migrationIndex';
import { CreateSeedExample } from '@templates/modules/seeds/seedExample';
import { CreateSeedIndex } from '@templates/modules/seeds/seedIndex';
import { FileManager } from '@tools/fileManager';

export class CreateTypeorm {
  private readonly createMysqlDataSource: CreateMysqlDataSource;
  private readonly createMigrationIndex: CreateMigrationIndex;
  private readonly createFakeDataSource: CreateFakeDataSource;
  private readonly createSeedExample: CreateSeedExample;
  private readonly createConnection: CreateConnection;
  private readonly createSeedIndex: CreateSeedIndex;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createMysqlDataSource = new CreateMysqlDataSource();
    this.createMigrationIndex = new CreateMigrationIndex();
    this.createFakeDataSource = new CreateFakeDataSource();
    this.createSeedExample = new CreateSeedExample();
    this.createConnection = new CreateConnection();
    this.createSeedIndex = new CreateSeedIndex();
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
      [[basePath, 'seeds', 'example.ts'], this.createSeedExample],
      [[basePath, 'cli', 'migrations.ts'], this.createMigrationIndex],
      [[basePath, 'cli', 'seeds.ts'], this.createSeedIndex],
      [[basePath, 'index.ts'], this.createConnection],
    ]);
  }
}
