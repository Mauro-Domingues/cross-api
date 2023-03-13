import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
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
    appendFile(
      'src/shared/container/providers/index.ts',
      `\nimport './CacheProvider';`,
      error => {
        if (error) throw error;
      },
    );
    if (!existsSync('src/config/cache.ts')) {
      appendFile(
        'src/config/cache.ts',
        this.createCacheConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/config/cache.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/config/cache.ts',
        this.createCacheConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
        this.createFakeRedis.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
        this.createFakeRedis.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (!existsSync('src/config/cache.ts')) {
      appendFile(
        'src/config/cache.ts',
        this.createCacheConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/config/cache.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/config/cache.ts',
        this.createCacheConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
        this.createRedisCache.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
        this.createRedisCache.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
        this.createICache.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
        this.createICache.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (!existsSync('src/shared/container/providers/CacheProvider/index.ts')) {
      appendFile(
        'src/shared/container/providers/CacheProvider/index.ts',
        this.createCacheIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/CacheProvider/index.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/CacheProvider/index.ts',
        this.createCacheIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- CacheProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
