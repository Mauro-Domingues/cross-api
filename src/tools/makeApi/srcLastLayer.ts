import { CreateFakeDataSource } from '@templates/api/fakeDataSource';
import { CreateMysqlDataSource } from '@templates/api/mysqlDataSource';
import { CreateBaseEntity } from '@templates/modules/entities/baseEntity';
import { CreateBaseRepository } from '@templates/modules/repositories/baseRepository';
import { CreateBaseFakeRepository } from '@templates/modules/repositories/fakes/baseFakeRepository';
import { CreateIBaseRepository } from '@templates/modules/repositories/IBaseRepository';
import { FileManager } from '@tools/fileManager';

export class MakeLastLayer {
  private readonly createBaseFakeRepository: CreateBaseFakeRepository;
  private readonly createMysqlDataSource: CreateMysqlDataSource;
  private readonly createIBaseRepository: CreateIBaseRepository;
  private readonly createFakeDataSource: CreateFakeDataSource;
  private readonly createBaseRepository: CreateBaseRepository;
  private readonly createBaseEntity: CreateBaseEntity;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createBaseFakeRepository = new CreateBaseFakeRepository();
    this.createMysqlDataSource = new CreateMysqlDataSource();
    this.createIBaseRepository = new CreateIBaseRepository();
    this.createFakeDataSource = new CreateFakeDataSource();
    this.createBaseRepository = new CreateBaseRepository();
    this.createBaseEntity = new CreateBaseEntity();
    this.fileManager = new FileManager();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [
        ['src', 'shared', 'container', 'modules', 'entities', 'Base.ts'],
        this.createBaseEntity,
      ],
      [
        [
          'src',
          'shared',
          'container',
          'modules',
          'repositories',
          'BaseRepository.ts',
        ],
        this.createBaseRepository,
      ],
      [
        [
          'src',
          'shared',
          'container',
          'modules',
          'repositories',
          'IBaseRepository.ts',
        ],
        this.createIBaseRepository,
      ],
      [
        [
          'src',
          'shared',
          'container',
          'modules',
          'repositories',
          'fakes',
          'FakeBaseRepository.ts',
        ],
        this.createBaseFakeRepository,
      ],
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
    ]);
  }
}
