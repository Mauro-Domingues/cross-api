import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { resolve } from 'path';
import { CreateCacheIndex } from '../../../templates/providers/cacheIndex.js';
import { CreateCacheConfig } from '../../../templates/providers/config/cacheConfig.js';
import { CreateFakeRedis } from '../../../templates/providers/fakes/fakeCache.js';
import { CreateRedisCache } from '../../../templates/providers/implementations/RedisCache.js';
import { CreateICache } from '../../../templates/providers/models/ICache.js';
import { Messages } from '../../messages.js';

export class MakeCacheProvider {
  messages;
  createICache;
  createRedisCache;
  createFakeRedis;
  createCacheConfig;
  createCacheIndex;
  constructor() {
    this.messages = new Messages().execute();
    this.createICache = new CreateICache();
    this.createRedisCache = new CreateRedisCache();
    this.createFakeRedis = new CreateFakeRedis();
    this.createCacheConfig = new CreateCacheConfig();
    this.createCacheIndex = new CreateCacheIndex();
  }
  async execute() {
    if (!existsSync(resolve('src'))) {
      mkdirSync(resolve('src'));
    }
    if (!existsSync(resolve('src', 'config'))) {
      mkdirSync(resolve('src', 'config'));
    }
    if (!existsSync(resolve('src', 'shared'))) {
      mkdirSync(resolve('src', 'shared'));
    }
    if (!existsSync(resolve('src', 'shared', 'container'))) {
      mkdirSync(resolve('src', 'shared', 'container'));
    }
    if (!existsSync(resolve('src', 'shared', 'container', 'providers'))) {
      mkdirSync(resolve('src', 'shared', 'container', 'providers'));
    }
    if (
      !existsSync(
        resolve('src', 'shared', 'container', 'providers', 'CacheProvider'),
      )
    ) {
      mkdirSync(
        resolve('src', 'shared', 'container', 'providers', 'CacheProvider'),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'fakes',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'fakes',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'implementations',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'implementations',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'models',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'models',
        ),
      );
    }
    appendFileSync(
      resolve('src', 'shared', 'container', 'providers', 'index.ts'),
      `import './CacheProvider';\n`,
    );
    if (!existsSync(resolve('src', 'config', 'cache.ts'))) {
      appendFileSync(
        resolve('src', 'config', 'cache.ts'),
        this.createCacheConfig.execute(),
      );
    } else {
      truncateSync(resolve('src', 'config', 'cache.ts'));
      appendFileSync(
        resolve('src', 'config', 'cache.ts'),
        this.createCacheConfig.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'fakes',
          'FakeCacheProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'fakes',
          'FakeCacheProvider.ts',
        ),
        this.createFakeRedis.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'fakes',
          'FakeCacheProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'fakes',
          'FakeCacheProvider.ts',
        ),
        this.createFakeRedis.execute(),
      );
    }
    if (!existsSync(resolve('src', 'config', 'cache.ts'))) {
      appendFileSync(
        resolve('src', 'config', 'cache.ts'),
        this.createCacheConfig.execute(),
      );
    } else {
      truncateSync(resolve('src', 'config', 'cache.ts'));
      appendFileSync(
        resolve('src', 'config', 'cache.ts'),
        this.createCacheConfig.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'implementations',
          'RedisCacheProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'implementations',
          'RedisCacheProvider.ts',
        ),
        this.createRedisCache.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'implementations',
          'RedisCacheProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'implementations',
          'RedisCacheProvider.ts',
        ),
        this.createRedisCache.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'models',
          'ICacheProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'models',
          'ICacheProvider.ts',
        ),
        this.createICache.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'models',
          'ICacheProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'models',
          'ICacheProvider.ts',
        ),
        this.createICache.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'index.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'index.ts',
        ),
        this.createCacheIndex.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'index.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CacheProvider',
          'index.ts',
        ),
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
