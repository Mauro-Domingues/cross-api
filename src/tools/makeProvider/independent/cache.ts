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
    this.constructBase();
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './CacheProvider';\n`,
    );
    this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'shared', 'container', 'providers', 'CacheProvider', 'fakes'],
      [
        'src',
        'shared',
        'container',
        'providers',
        'CacheProvider',
        'implementations',
      ],
      ['src', 'shared', 'container', 'providers', 'CacheProvider', 'models'],
    ]);
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'config', 'cache.ts'], this.createCacheConfig],
      [
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
      ],
      [['src', 'config', 'cache.ts'], this.createCacheConfig],
      [
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
      ],
      [
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
      ],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'index.ts',
        ],
        this.createCacheIndex,
      ],
    ]);
  }
}
