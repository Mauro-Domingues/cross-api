import { CreateCacheIndex } from '@templates/providers/cacheIndex';
import { CreateCacheConfig } from '@templates/providers/config/cacheConfig';
import { CreateFakeRedis } from '@templates/providers/fakes/fakeCache';
import { CreateRedisCache } from '@templates/providers/implementations/RedisCache';
import { CreateICache } from '@templates/providers/models/ICache';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeCacheProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly createICache: CreateICache;
  private readonly fileManager: FileManager;
  private readonly createRedisCache: CreateRedisCache;
  private readonly createFakeRedis: CreateFakeRedis;
  private readonly createCacheConfig: CreateCacheConfig;
  private readonly createCacheIndex: CreateCacheIndex;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createICache = new CreateICache();
    this.createRedisCache = new CreateRedisCache();
    this.createFakeRedis = new CreateFakeRedis();
    this.createCacheConfig = new CreateCacheConfig();
    this.createCacheIndex = new CreateCacheIndex();
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'config']);
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CacheProvider',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CacheProvider',
      'fakes',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CacheProvider',
      'implementations',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CacheProvider',
      'models',
    ]);
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './CacheProvider';\n`,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'cache.ts'],
      this.createCacheConfig,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'CacheProvider',
        'fakes',
        'FakeCacheProvider.ts',
      ],
      this.createFakeRedis,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'cache.ts'],
      this.createCacheConfig,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'CacheProvider',
        'implementations',
        'RedisCacheProvider.ts',
      ],
      this.createRedisCache,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'CacheProvider',
        'models',
        'ICacheProvider.ts',
      ],
      this.createICache,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'providers', 'CacheProvider', 'index.ts'],
      this.createCacheIndex,
    );
    return this.console.one([
      `- CacheProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
