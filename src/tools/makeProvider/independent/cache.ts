import { CreateCacheIndex } from '@templates/providers/cacheIndex';
import { CreateCacheConfig } from '@templates/providers/config/cacheConfig';
import { CreateFakeCache } from '@templates/providers/fakes/fakeCache';
import { CreateRedisCache } from '@templates/providers/implementations/RedisCache';
import { CreateICache } from '@templates/providers/models/ICache';
import { BaseProvider } from './base';

export class MakeCacheProvider extends BaseProvider {
  private readonly createCacheConfig: CreateCacheConfig;
  private readonly createRedisCache: CreateRedisCache;
  private readonly createCacheIndex: CreateCacheIndex;
  private readonly createFakeCache: CreateFakeCache;
  private readonly createICache: CreateICache;

  public constructor() {
    super();
    this.createCacheConfig = new CreateCacheConfig();
    this.createCacheIndex = new CreateCacheIndex();
    this.createRedisCache = new CreateRedisCache();
    this.createFakeCache = new CreateFakeCache();
    this.createICache = new CreateICache();
  }

  public execute(): void {
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CacheProvider',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CacheProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CacheProvider',
      'models',
    ]);
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './CacheProvider';\n`,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'cache.ts'],
      this.createCacheConfig,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'CacheProvider',
        'fakes',
        'FakeCacheProvider.ts',
      ],
      this.createFakeCache,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'cache.ts'],
      this.createCacheConfig,
    );
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    return this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'providers', 'CacheProvider', 'index.ts'],
      this.createCacheIndex,
    );
  }
}
