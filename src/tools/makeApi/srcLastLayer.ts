import { FileManager } from '@tools/fileManager';
import { CreateBaseEntity } from '@templates/modules/entities/baseEntity';
import { CreateBaseRepository } from '@templates/modules/repositories/baseRepository';
import { CreateBaseFakeRepository } from '@templates/modules/repositories/fakes/baseFakeRepository';
import { CreateIBaseRepository } from '@templates/modules/repositories/IBaseRepository';
import { CreateMysqlDataSource } from '@templates/api/mysqlDataSource';
import { CreateFakeDataSource } from '@templates/api/fakeDataSource';

export class MakeLastLayer {
  private readonly createBaseFakeRepository: CreateBaseFakeRepository;
  private readonly createMysqlDataSource: CreateMysqlDataSource;
  private readonly createIBaseRepository: CreateIBaseRepository;
  private readonly createFakeDataSource: CreateFakeDataSource;
  private readonly createBaseRepository: CreateBaseRepository;
  private readonly createBaseEntity: CreateBaseEntity;
  private readonly fileManager: FileManager;

  constructor() {
    this.createBaseFakeRepository = new CreateBaseFakeRepository();
    this.createMysqlDataSource = new CreateMysqlDataSource();
    this.createIBaseRepository = new CreateIBaseRepository();
    this.createFakeDataSource = new CreateFakeDataSource();
    this.createBaseRepository = new CreateBaseRepository();
    this.createBaseEntity = new CreateBaseEntity();
    this.fileManager = new FileManager();
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'modules', 'entities', 'Base.ts'],
      this.createBaseEntity,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'modules',
        'repositories',
        'BaseRepository.ts',
      ],
      this.createBaseRepository,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'modules',
        'repositories',
        'IBaseRepository.ts',
      ],
      this.createIBaseRepository,
    );
    await this.fileManager.checkAndCreateFile(
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
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'typeorm', 'dataSources', 'mysqlDataSource.ts'],
      this.createMysqlDataSource,
    );
    return this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'typeorm', 'dataSources', 'fakes', 'fakeDataSource.ts'],
      this.createFakeDataSource,
    );
  }
}
