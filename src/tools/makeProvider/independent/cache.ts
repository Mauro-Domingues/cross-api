import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { createCacheIndex } from '@templates/providers/cacheIndex';
import { createCacheConfig } from '@templates/providers/config/cacheConfig';
import { createFakeRedis } from '@templates/providers/fakes/fakeCache';
import { createRedisCache } from '@templates/providers/implementations/RedisCache';
import { createICache } from '@templates/providers/models/ICache';
import messages from '@tools/messages';

export async function makeCacheProvider(): Promise<void> {
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
    !existsSync('src/shared/container/providers/CacheProvider/implementations')
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
    appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/config/cache.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
    });
  }
  if (
    !existsSync(
      'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
      createFakeRedis(),
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
      createFakeRedis(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (!existsSync('src/config/cache.ts')) {
    appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/config/cache.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
    });
  }
  if (
    !existsSync(
      'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
      createRedisCache(),
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
      createRedisCache(),
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
      createICache(),
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
      createICache(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (!existsSync('src/shared/container/providers/CacheProvider/index.ts')) {
    appendFile(
      'src/shared/container/providers/CacheProvider/index.ts',
      createCacheIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate('src/shared/container/providers/CacheProvider/index.ts', error => {
      if (error) console.log(error);
    });
    appendFile(
      'src/shared/container/providers/CacheProvider/index.ts',
      createCacheIndex(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- CacheProvider ${messages.created}`,
    '\x1b[0m',
  );
}
