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
  private messages: IMessagesDTO;
  private createBaseEntity: CreateBaseEntity;
  private createBaseRepository: CreateBaseRepository;
  private createIBaseRepository: CreateIBaseRepository;
  private createBaseFakeRepository: CreateBaseFakeRepository;
  private fileManager: FileManager;
  private console: Console;
  private createCorsConfig: CreateCorsConfig;
  private createAuthConfig: CreateAuthConfig;

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
    if (!this.fileManager.checkIfExists(['src', 'config', 'auth.ts'])) {
      await this.fileManager.createFile(
        ['src', 'config', 'auth.ts'],
        this.createAuthConfig.execute(),
      );
    } else {
      await this.fileManager.truncateFile(['src', 'config', 'auth.ts']);
      await this.fileManager.createFile(
        ['src', 'config', 'auth.ts'],
        this.createAuthConfig.execute(),
      );
    }
    this.console.one([
      `- auth.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!this.fileManager.checkIfExists(['src', 'config', 'cors.ts'])) {
      await this.fileManager.createFile(
        ['src', 'config', 'cors.ts'],
        this.createCorsConfig.execute(),
      );
    } else {
      await this.fileManager.truncateFile(['src', 'config', 'cors.ts']);
      await this.fileManager.createFile(
        ['src', 'config', 'cors.ts'],
        this.createCorsConfig.execute(),
      );
    }
    this.console.one([
      `- cors.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'modules',
        'entities',
        'Base.ts',
      ])
    ) {
      await this.fileManager.createFile(
        ['src', 'shared', 'container', 'modules', 'entities', 'Base.ts'],
        this.createBaseEntity.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'modules',
        'entities',
        'Base.ts',
      ]);
      await this.fileManager.createFile(
        ['src', 'shared', 'container', 'modules', 'entities', 'Base.ts'],
        this.createBaseEntity.execute(),
      );
    }
    this.console.one([
      `- baseEntity.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'modules',
        'repositories',
        'BaseRepository.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'modules',
          'repositories',
          'BaseRepository.ts',
        ],
        this.createBaseRepository.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'modules',
        'repositories',
        'BaseRepository.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'modules',
          'repositories',
          'BaseRepository.ts',
        ],
        this.createBaseRepository.execute(),
      );
    }
    this.console.one([
      `- baseRepository.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'modules',
        'repositories',
        'IBaseRepository.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'modules',
          'repositories',
          'IBaseRepository.ts',
        ],
        this.createIBaseRepository.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'modules',
        'repositories',
        'IBaseRepository.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'modules',
          'repositories',
          'IBaseRepository.ts',
        ],
        this.createIBaseRepository.execute(),
      );
    }
    this.console.one([
      `- IBaseRepository.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'modules',
        'repositories',
        'fakes',
        'FakeBaseRepository.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'modules',
          'repositories',
          'fakes',
          'FakeBaseRepository.ts',
        ],
        this.createBaseFakeRepository.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'modules',
        'repositories',
        'fakes',
        'FakeBaseRepository.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'modules',
          'repositories',
          'fakes',
          'FakeBaseRepository.ts',
        ],
        this.createBaseFakeRepository.execute(),
      );
    }
    return this.console.one([
      `- fakeBaseRepository.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
