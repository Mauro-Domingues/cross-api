import { CreateAuthConfig } from '@templates/providers/config/authConfig';
import { CreateCorsConfig } from '@templates/providers/config/corsConfig';
import { FileManager } from '@tools/fileManager';
import { CreateBaseEntity } from '@templates/modules/entities/baseEntity';
import { CreateBaseRepository } from '@templates/modules/repositories/baseRepository';
import { CreateBaseFakeRepository } from '@templates/modules/repositories/fakes/baseFakeRepository';
import { CreateIBaseRepository } from '@templates/modules/repositories/IBaseRepository';

export class MakeLastLayer {
  private readonly createBaseFakeRepository: CreateBaseFakeRepository;
  private readonly createIBaseRepository: CreateIBaseRepository;
  private readonly createBaseRepository: CreateBaseRepository;
  private readonly createCorsConfig: CreateCorsConfig;
  private readonly createAuthConfig: CreateAuthConfig;
  private readonly createBaseEntity: CreateBaseEntity;
  private readonly fileManager: FileManager;

  constructor() {
    this.createBaseFakeRepository = new CreateBaseFakeRepository();
    this.createIBaseRepository = new CreateIBaseRepository();
    this.createBaseRepository = new CreateBaseRepository();
    this.createBaseEntity = new CreateBaseEntity();
    this.createCorsConfig = new CreateCorsConfig();
    this.createAuthConfig = new CreateAuthConfig();
    this.fileManager = new FileManager();
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'auth.ts'],
      this.createAuthConfig,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'cors.ts'],
      this.createCorsConfig,
    );
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
    return this.fileManager.checkAndCreateFile(
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
  }
}
