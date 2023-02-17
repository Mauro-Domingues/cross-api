"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCacheProvider = makeCacheProvider;
var _fs = require("fs");
var _cacheIndex = require("../../../../dist/templates/providers/cacheIndex");
var _cacheConfig = require("../../../../dist/templates/providers/config/cacheConfig");
var _fakeCache = require("../../../../dist/templates/providers/fakes/fakeCache");
var _RedisCache = require("../../../../dist/templates/providers/implementations/RedisCache");
var _ICache = require("../../../../dist/templates/providers/models/ICache");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeCacheProvider() {
  if (!(0, _fs.existsSync)('src')) {
    (0, _fs.mkdirSync)('src');
  }
  if (!(0, _fs.existsSync)('src/config')) {
    (0, _fs.mkdirSync)('src/config');
  }
  if (!(0, _fs.existsSync)('src/shared')) {
    (0, _fs.mkdirSync)('src/shared');
  }
  if (!(0, _fs.existsSync)('src/shared/container')) {
    (0, _fs.mkdirSync)('src/shared/container');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers')) {
    (0, _fs.mkdirSync)('src/shared/container/providers');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CacheProvider')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/CacheProvider');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CacheProvider/fakes')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/CacheProvider/fakes');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CacheProvider/implementations')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/CacheProvider/implementations');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CacheProvider/models')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/CacheProvider/models');
  }
  (0, _fs.appendFile)('src/shared/container/providers/index.ts', `\nimport './CacheProvider';`, error => {
    if (error) throw error;
  });
  if (!(0, _fs.existsSync)('src/config/cache.ts')) {
    (0, _fs.appendFile)('src/config/cache.ts', (0, _cacheConfig.createCacheConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/config/cache.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/config/cache.ts', (0, _cacheConfig.createCacheConfig)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts', (0, _fakeCache.createFakeRedis)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts', (0, _fakeCache.createFakeRedis)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/config/cache.ts')) {
    (0, _fs.appendFile)('src/config/cache.ts', (0, _cacheConfig.createCacheConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/config/cache.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/config/cache.ts', (0, _cacheConfig.createCacheConfig)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts', (0, _RedisCache.createRedisCache)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts', (0, _RedisCache.createRedisCache)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CacheProvider/models/ICacheProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/CacheProvider/models/ICacheProvider.ts', (0, _ICache.createICache)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/CacheProvider/models/ICacheProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/CacheProvider/models/ICacheProvider.ts', (0, _ICache.createICache)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CacheProvider/index.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/CacheProvider/index.ts', (0, _cacheIndex.createCacheIndex)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/CacheProvider/index.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/CacheProvider/index.ts', (0, _cacheIndex.createCacheIndex)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- CacheProvider ${_messages.default.created}`, '\x1b[0m');
}