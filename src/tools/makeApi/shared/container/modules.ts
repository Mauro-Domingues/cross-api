import { CreateBaseEntity } from '@templates/modules/entities/baseEntity';
import { CreateBaseMigration } from '@templates/modules/migrations/baseMigration';
import { CreateBaseRepository } from '@templates/modules/repositories/baseRepository';
import { CreateFakeBaseRepository } from '@templates/modules/repositories/fakes/fakeBaseRepository';
import { CreateIBaseRepository } from '@templates/modules/repositories/IBaseRepository';
import { CreateBaseSchema } from '@templates/modules/validators/createBaseSchema';
import { CreateBaseValidator } from '@templates/modules/validators/createBaseValidator';
import { FileManager } from '@tools/fileManager';

export class CreateModules {
  private readonly createFakeBaseRepository: CreateFakeBaseRepository;
  private readonly createIBaseRepository: CreateIBaseRepository;
  private readonly createBaseRepository: CreateBaseRepository;
  private readonly createBaseMigration: CreateBaseMigration;
  private readonly createBaseValidator: CreateBaseValidator;
  private readonly createBaseSchema: CreateBaseSchema;
  private readonly createBaseEntity: CreateBaseEntity;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createFakeBaseRepository = new CreateFakeBaseRepository();
    this.createIBaseRepository = new CreateIBaseRepository();
    this.createBaseRepository = new CreateBaseRepository();
    this.createBaseRepository = new CreateBaseRepository();
    this.createBaseMigration = new CreateBaseMigration();
    this.createBaseValidator = new CreateBaseValidator();
    this.createBaseSchema = new CreateBaseSchema();
    this.createBaseEntity = new CreateBaseEntity();
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
    const basePath = this.fileManager.resolvePath([
      'src',
      'shared',
      'container',
      'modules',
    ]);

    return this.fileManager.checkAndCreateMultiFile([
      [[basePath, 'entities', 'Base.ts'], this.createBaseEntity],
      [[basePath, 'migrations', 'BaseMigration.ts'], this.createBaseMigration],
      [
        [basePath, 'repositories', 'BaseRepository.ts'],
        this.createBaseRepository,
      ],
      [
        [basePath, 'repositories', 'IBaseRepository.ts'],
        this.createIBaseRepository,
      ],
      [
        [basePath, 'repositories', 'fakes', 'FakeBaseRepository.ts'],
        this.createFakeBaseRepository,
      ],
      [[basePath, 'validators', 'baseSchema.ts'], this.createBaseSchema],
      [[basePath, 'validators', 'baseValidator.ts'], this.createBaseValidator],
    ]);
  }
}
