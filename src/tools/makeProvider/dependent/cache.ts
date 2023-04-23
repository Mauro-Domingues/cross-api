import { CreateContainer } from '@templates/index/container.js';
import { CreateCacheIndex } from '@templates/providers/cacheIndex.js';
import { CreateCacheConfig } from '@templates/providers/config/cacheConfig.js';
import { CreateFakeRedis } from '@templates/providers/fakes/fakeCache.js';
import { CreateRedisCache } from '@templates/providers/implementations/RedisCache.js';
import { CreateICache } from '@templates/providers/models/ICache.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { IModuleNamesDTO } from '@tools/names.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeDependentCacheProvider {
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private messages: IMessagesDTO;
  private console: Console;
  private fileManager: FileManager;
  private createICache: CreateICache;
  private createRedisCache: CreateRedisCache;
  private createFakeRedis: CreateFakeRedis;
  private createCacheConfig: CreateCacheConfig;
  private createCacheIndex: CreateCacheIndex;
  private createContainer: CreateContainer;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.fatherNames = fatherNames;
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createICache = new CreateICache();
    this.createRedisCache = new CreateRedisCache();
    this.createFakeRedis = new CreateFakeRedis();
    this.createCacheConfig = new CreateCacheConfig();
    this.createCacheIndex = new CreateCacheIndex();
    this.createContainer = new CreateContainer();
  }

  public async execute(): Promise<void> {
    if (!this.fatherNames) {
      this.console.one([
        this.messages.providerNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    if (!this.fileManager.checkIfExists(['src'])) {
      await this.fileManager.createDir(['src']);
    }
    if (!this.fileManager.checkIfExists(['src', 'config'])) {
      await this.fileManager.createDir(['src', 'config']);
    }
    if (!this.fileManager.checkIfExists(['src', 'modules'])) {
      await this.fileManager.createDir(['src', 'modules']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared'])) {
      await this.fileManager.createDir(['src', 'shared']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared', 'container'])) {
      await this.fileManager.createDir(['src', 'shared', 'container']);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        this.createContainer.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ],
        '',
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'fakes',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'fakes',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'implementations',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'implementations',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'models',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'models',
      ]);
    }
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    await this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      `import './CacheProvider';\n`,
    );
    if (!this.fileManager.checkIfExists(['src', 'config', 'cache.ts'])) {
      await this.fileManager.createFile(
        ['src', 'config', 'cache.ts'],
        this.createCacheConfig.execute(),
      );
    } else {
      await this.fileManager.truncateFile(['src', 'config', 'cache.ts']);
      await this.fileManager.createFile(
        ['src', 'config', 'cache.ts'],
        this.createCacheConfig.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'fakes',
        'FakeCacheProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'fakes',
          'FakeCacheProvider.ts',
        ],
        this.createFakeRedis.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'fakes',
        'FakeCacheProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'fakes',
          'FakeCacheProvider.ts',
        ],
        this.createFakeRedis.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'implementations',
        'RedisCacheProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'implementations',
          'RedisCacheProvider.ts',
        ],
        this.createRedisCache.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'implementations',
        'RedisCacheProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'implementations',
          'RedisCacheProvider.ts',
        ],
        this.createRedisCache.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'models',
        'ICacheProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'models',
          'ICacheProvider.ts',
        ],
        this.createICache.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'models',
        'ICacheProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'models',
          'ICacheProvider.ts',
        ],
        this.createICache.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'index.ts',
        ],
        this.createCacheIndex.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'index.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'index.ts',
        ],
        this.createCacheIndex.execute(),
      );
    }
    return this.console.one([
      `- CacheProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
