import { CreateConnection } from '@templates/api/connection';
import { CreateFakeDataSource } from '@templates/api/fakeDataSource';
import { CreateMysqlDataSource } from '@templates/api/mysqlDataSource';
import { FileManager } from '@tools/fileManager';

export class CreateTypeorm {
  private readonly createMysqlDataSource: CreateMysqlDataSource;
  private readonly createFakeDataSource: CreateFakeDataSource;
  private readonly createConnection: CreateConnection;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createMysqlDataSource = new CreateMysqlDataSource();
    this.createFakeDataSource = new CreateFakeDataSource();
    this.createConnection = new CreateConnection();
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [
        ['src', 'shared', 'typeorm', 'dataSources', 'mysqlDataSource.ts'],
        this.createMysqlDataSource,
      ],
      [
        [
          'src',
          'shared',
          'typeorm',
          'dataSources',
          'fakes',
          'fakeDataSource.ts',
        ],
        this.createFakeDataSource,
      ],
      [['src', 'shared', 'typeorm', 'index.ts'], this.createConnection],
    ]);
  }
}
