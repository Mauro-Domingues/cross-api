import fs from 'fs';
import createCacheIndex from '../../../templates/providers/cacheIndex';
import createCacheConfig from '../../../templates/providers/config/cacheConfig';
import createFakeRedis from '../../../templates/providers/fakes/fakeCache';
import createRedisCache from '../../../templates/providers/implementations/RedisCache';
import createICache from '../../../templates/providers/models/ICache';
import messages from '../../messages';

export default async function makeCacheProvider(): Promise<void> {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/config')) {
    fs.mkdirSync('src/config');
  }
  if (!fs.existsSync('src/shared')) {
    fs.mkdirSync('src/shared');
  }
  if (!fs.existsSync('src/shared/container')) {
    fs.mkdirSync('src/shared/container');
  }
  if (!fs.existsSync('src/shared/container/providers')) {
    fs.mkdirSync('src/shared/container/providers');
  }
  if (!fs.existsSync('src/shared/container/providers/CacheProvider')) {
    fs.mkdirSync('src/shared/container/providers/CacheProvider');
  }
  if (!fs.existsSync('src/shared/container/providers/CacheProvider/fakes')) {
    fs.mkdirSync('src/shared/container/providers/CacheProvider/fakes');
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/CacheProvider/implementations',
    )
  ) {
    fs.mkdirSync(
      'src/shared/container/providers/CacheProvider/implementations',
    );
  }
  if (!fs.existsSync('src/shared/container/providers/CacheProvider/models')) {
    fs.mkdirSync('src/shared/container/providers/CacheProvider/models');
  }
  fs.appendFile(
    'src/shared/container/providers/index.ts',
    `import './CacheProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (!fs.existsSync('src/config/cache.ts')) {
    fs.appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/cache.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
    });
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
      createFakeRedis(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts',
      createFakeRedis(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (!fs.existsSync('src/config/cache.ts')) {
    fs.appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/cache.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
    });
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
      createRedisCache(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts',
      createRedisCache(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
      createICache(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/CacheProvider/models/ICacheProvider.ts',
      createICache(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (!fs.existsSync('src/shared/container/providers/CacheProvider/index.ts')) {
    fs.appendFile(
      'src/shared/container/providers/CacheProvider/index.ts',
      createCacheIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/CacheProvider/index.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
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
