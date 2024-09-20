import { CreateBaseEntity } from '@templates/modules/entities/baseEntity';
import { CreateBaseRepository } from '@templates/modules/repositories/baseRepository';
import { CreateFakeBaseRepository } from '@templates/modules/repositories/fakes/fakeBaseRepository';
import { CreateIBaseRepository } from '@templates/modules/repositories/IBaseRepository';
import { FileManager } from '@tools/fileManager';

export class CreateModules {
  private readonly createFakeBaseRepository: CreateFakeBaseRepository;
  private readonly createIBaseRepository: CreateIBaseRepository;
  private readonly createBaseRepository: CreateBaseRepository;
  private readonly createBaseEntity: CreateBaseEntity;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createFakeBaseRepository = new CreateFakeBaseRepository();
    this.createIBaseRepository = new CreateIBaseRepository();
    this.createBaseRepository = new CreateBaseRepository();
    this.createBaseEntity = new CreateBaseEntity();
    this.fileManager = FileManager.getInstance();
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
        this.createFakeBaseRepository,
      ],
    ]);
  }
}
