import fs from 'fs';

import createFakeRedis from '../templates/providers/fakes/fakeCache';
import createRedisCache from '../templates/providers/implementations/redisCache';
import createICache from '../templates/providers/models/ICache';
import messages from './messages';

async function makeProvider(providerName: string) {
  switch (providerName) {
    case 'cache':
      fs.appendFile(
        'src/shared/container/providers/index.ts',
        `import './StorageProvider';`,
        error => {
          if (error) throw error;
        },
      );
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
      if (
        !fs.existsSync(
          'src/shared/container/providers/CacheProvider/impementations/RedisCacheProvider.ts',
        )
      ) {
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/impementations/RedisCacheProvider.ts',
          createRedisCache(),
          error => {
            if (error) throw error;
          },
        );
      } else {
        fs.truncate(
          'src/shared/container/providers/CacheProvider/impementations/RedisCacheProvider.ts',
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          'src/shared/container/providers/CacheProvider/impementations/RedisCacheProvider.ts',
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
      console.log(`StorageProvider ${messages.created}`);
      break;
    default:
      break;
  }
}

export default makeProvider;
