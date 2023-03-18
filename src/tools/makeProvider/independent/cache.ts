import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateCacheIndex } from '@templates/providers/cacheIndex';
import { CreateCacheConfig } from '@templates/providers/config/cacheConfig';
import { CreateFakeRedis } from '@templates/providers/fakes/fakeCache';
import { CreateRedisCache } from '@templates/providers/implementations/RedisCache';
import { CreateICache } from '@templates/providers/models/ICache';
import messages from '@tools/messages';

export class MakeCacheProvider {
  private messages: typeof messages;
  private createICache: CreateICache;
  private createRedisCache: CreateRedisCache;
  private createFakeRedis: CreateFakeRedis;
  private createCacheConfig: CreateCacheConfig;
  private createCacheIndex: CreateCacheIndex;

  constructor() {
    this.messages = messages;
    this.createICache = new CreateICache();
    this.createRedisCache = new CreateRedisCache();
    this.createFakeRedis = new CreateFakeRedis();
    this.createCacheConfig = new CreateCacheConfig();
    this.createCacheIndex = new CreateCacheIndex();
  }

  public async execute(): Promise<void> {
    if (!existsSync('src')) {
      mkdirSync('src');
    }
    if (!existsSync('src/config')) {
      mkdirSync('src/config');
    }
    if (!existsSync('src/shared')) {
      mkdirSync('src/shared');
    }
    if (!existsSync('src/shared/container')) {
      mkdirSync('src/shared/container');
    }
    if (!existsSync('src/shared/container/providers')) {
      mkdirSync('src/shared/container/providers');
    }
    if (!existsSync('src/shared/container/providers/CacheProvider')) {
      mkdirSync('src/shared/container/providers/CacheProvider');
    }
    if (!existsSync('src/shared/container/providers/CacheProvider/fakes')) {
      mkdirSync('src/shared/container/providers/CacheProvider/fakes');
    }
    if (
      !existsSync(
        'src/shared/container/providers/CacheProvider/implementations',
      )
    ) {
      mkdirSync('src/shared/container/providers/CacheProvider/implementations');
    }
    if (!existsSync('src/shared/container/providers/CacheProvider/models')) {
      mkdirSync('src/shared/container/providers/CacheProvider/models');
    }
    appendFileSync(
      'src/shared/container/providers/index.ts',
      `\nimport './CacheProvider';`,
    );
    if (!existsSync('src/config/cache.ts')) {
      appendFileSync('src/config/cache.ts', this.createCacheConfig.execute());
    } else {
      truncateSync('src/config/cache.ts');
      appendFileSync('src/config/cache.ts', this.createCacheConfig.execute());
    }
    if (
      !existsSync(
        'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
      )
    ) {
      appendFileSync(
        'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
        this.createFakeRedis.execute(),
      );
    } else {
      truncateSync(
        'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
      );
      appendFileSync(
        'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
        this.createFakeRedis.execute(),
      );
    }
    if (!existsSync('src/config/cache.ts')) {
      appendFileSync('src/config/cache.ts', this.createCacheConfig.execute());
    } else {
      truncateSync('src/config/cache.ts');
      appendFileSync('src/config/cache.ts', this.createCacheConfig.execute());
    }
    if (
      !existsSync(
        'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
      )
    ) {
      appendFileSync(
        'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
        this.createRedisCache.execute(),
      );
    } else {
      truncateSync(
        'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
      );
      appendFileSync(
        'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
        this.createRedisCache.execute(),
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
      )
    ) {
      appendFileSync(
        'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
        this.createICache.execute(),
      );
    } else {
      truncateSync(
        'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
      );
      appendFileSync(
        'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
        this.createICache.execute(),
      );
    }
    if (!existsSync('src/shared/container/providers/CacheProvider/index.ts')) {
      appendFileSync(
        'src/shared/container/providers/CacheProvider/index.ts',
        this.createCacheIndex.execute(),
      );
    } else {
      truncateSync('src/shared/container/providers/CacheProvider/index.ts');
      appendFileSync(
        'src/shared/container/providers/CacheProvider/index.ts',
        this.createCacheIndex.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- CacheProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
