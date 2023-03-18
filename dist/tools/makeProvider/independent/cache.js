"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeCacheProvider = void 0;
var _fs = require("fs");
var _cacheIndex = require("../../../../dist/templates/providers/cacheIndex");
var _cacheConfig = require("../../../../dist/templates/providers/config/cacheConfig");
var _fakeCache = require("../../../../dist/templates/providers/fakes/fakeCache");
var _RedisCache = require("../../../../dist/templates/providers/implementations/RedisCache");
var _ICache = require("../../../../dist/templates/providers/models/ICache");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeCacheProvider {
  constructor() {
    this.messages = void 0;
    this.createICache = void 0;
    this.createRedisCache = void 0;
    this.createFakeRedis = void 0;
    this.createCacheConfig = void 0;
    this.createCacheIndex = void 0;
    this.messages = _messages.default;
    this.createICache = new _ICache.CreateICache();
    this.createRedisCache = new _RedisCache.CreateRedisCache();
    this.createFakeRedis = new _fakeCache.CreateFakeRedis();
    this.createCacheConfig = new _cacheConfig.CreateCacheConfig();
    this.createCacheIndex = new _cacheIndex.CreateCacheIndex();
  }
  async execute() {
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
    (0, _fs.appendFileSync)('src/shared/container/providers/index.ts', `\nimport './CacheProvider';`);
    if (!(0, _fs.existsSync)('src/config/cache.ts')) {
      (0, _fs.appendFileSync)('src/config/cache.ts', this.createCacheConfig.execute());
    } else {
      (0, _fs.truncateSync)('src/config/cache.ts');
      (0, _fs.appendFileSync)('src/config/cache.ts', this.createCacheConfig.execute());
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts')) {
      (0, _fs.appendFileSync)('src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts', this.createFakeRedis.execute());
    } else {
      (0, _fs.truncateSync)('src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts');
      (0, _fs.appendFileSync)('src/shared/container/providers/CacheProvider/fakes/FakeCacheProvider.ts', this.createFakeRedis.execute());
    }
    if (!(0, _fs.existsSync)('src/config/cache.ts')) {
      (0, _fs.appendFileSync)('src/config/cache.ts', this.createCacheConfig.execute());
    } else {
      (0, _fs.truncateSync)('src/config/cache.ts');
      (0, _fs.appendFileSync)('src/config/cache.ts', this.createCacheConfig.execute());
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts')) {
      (0, _fs.appendFileSync)('src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts', this.createRedisCache.execute());
    } else {
      (0, _fs.truncateSync)('src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts');
      (0, _fs.appendFileSync)('src/shared/container/providers/CacheProvider/implementations/RedisCacheProvider.ts', this.createRedisCache.execute());
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/CacheProvider/models/ICacheProvider.ts')) {
      (0, _fs.appendFileSync)('src/shared/container/providers/CacheProvider/models/ICacheProvider.ts', this.createICache.execute());
    } else {
      (0, _fs.truncateSync)('src/shared/container/providers/CacheProvider/models/ICacheProvider.ts');
      (0, _fs.appendFileSync)('src/shared/container/providers/CacheProvider/models/ICacheProvider.ts', this.createICache.execute());
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/CacheProvider/index.ts')) {
      (0, _fs.appendFileSync)('src/shared/container/providers/CacheProvider/index.ts', this.createCacheIndex.execute());
    } else {
      (0, _fs.truncateSync)('src/shared/container/providers/CacheProvider/index.ts');
      (0, _fs.appendFileSync)('src/shared/container/providers/CacheProvider/index.ts', this.createCacheIndex.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- CacheProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeCacheProvider = MakeCacheProvider;