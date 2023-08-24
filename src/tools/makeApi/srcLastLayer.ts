import { IMessagesDTO, Messages } from '@tools/messages';
import { CreateAuthConfig } from '@templates/providers/config/authConfig';
import { CreateCorsConfig } from '@templates/providers/config/corsConfig';
import { FileManager } from '@tools/fileManager';
import { CreateBaseEntity } from '@templates/modules/entities/baseEntity';
import { CreateBaseRepository } from '@templates/modules/repositories/baseRepository';
import { CreateBaseFakeRepository } from '@templates/modules/repositories/fakes/baseFakeRepository';
import { CreateIBaseRepository } from '@templates/modules/repositories/IBaseRepository';

export class MakeLastLayer {
  private readonly messages: IMessagesDTO;
  private readonly createBaseEntity: CreateBaseEntity;
  private readonly createBaseRepository: CreateBaseRepository;
  private readonly createIBaseRepository: CreateIBaseRepository;
  private readonly createBaseFakeRepository: CreateBaseFakeRepository;
  private readonly fileManager: FileManager;
  private readonly createCorsConfig: CreateCorsConfig;
  private readonly createAuthConfig: CreateAuthConfig;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.createBaseEntity = new CreateBaseEntity();
    this.createBaseRepository = new CreateBaseRepository();
    this.createIBaseRepository = new CreateIBaseRepository();
    this.createBaseFakeRepository = new CreateBaseFakeRepository();
    this.createCorsConfig = new CreateCorsConfig();
    this.createAuthConfig = new CreateAuthConfig();
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
