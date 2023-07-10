import { IMessagesDTO, Messages } from '@tools/messages.js';
import { CreateAuthConfig } from '@templates/providers/config/authConfig.js';
import { CreateCorsConfig } from '@templates/providers/config/corsConfig.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';
import { CreateBaseEntity } from '@templates/modules/entities/baseEntity.js';
import { CreateBaseRepository } from '@templates/modules/repositories/baseRepository.js';
import { CreateBaseFakeRepository } from '@templates/modules/repositories/fakes/baseFakeRepository.js';
import { CreateIBaseRepository } from '@templates/modules/repositories/IBaseRepository.js';

export class MakeLastLayer {
  private readonly messages: IMessagesDTO;
  private readonly createBaseEntity: CreateBaseEntity;
  private readonly createBaseRepository: CreateBaseRepository;
  private readonly createIBaseRepository: CreateIBaseRepository;
  private readonly createBaseFakeRepository: CreateBaseFakeRepository;
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly createCorsConfig: CreateCorsConfig;
  private readonly createAuthConfig: CreateAuthConfig;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.createBaseEntity = new CreateBaseEntity();
    this.createBaseRepository = new CreateBaseRepository();
    this.createIBaseRepository = new CreateIBaseRepository();
    this.createBaseFakeRepository = new CreateBaseFakeRepository();
    this.console = new Console();
    this.createCorsConfig = new CreateCorsConfig();
    this.createAuthConfig = new CreateAuthConfig();
  }

  public async execute(): Promise<void> {
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'auth.ts'],
      this.createAuthConfig,
    );
    this.console.one([
      `- auth.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'cors.ts'],
      this.createCorsConfig,
    );
    this.console.one([
      `- cors.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'modules', 'entities', 'Base.ts'],
      this.createBaseEntity,
    );
    this.console.one([
      `- baseEntity.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    this.fileManager.checkAndCreateFile(
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
    this.console.one([
      `- baseRepository.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    this.fileManager.checkAndCreateFile(
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
    this.console.one([
      `- IBaseRepository.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    this.fileManager.checkAndCreateFile(
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
    return this.console.one([
      `- fakeBaseRepository.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
