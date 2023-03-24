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
var _messages = require("../../../../dist/tools/messages");
var _path = require("path");
class MakeCacheProvider {
  constructor() {
    this.messages = void 0;
    this.createICache = void 0;
    this.createRedisCache = void 0;
    this.createFakeRedis = void 0;
    this.createCacheConfig = void 0;
    this.createCacheIndex = void 0;
    this.messages = new _messages.Messages().execute();
    this.createICache = new _ICache.CreateICache();
    this.createRedisCache = new _RedisCache.CreateRedisCache();
    this.createFakeRedis = new _fakeCache.CreateFakeRedis();
    this.createCacheConfig = new _cacheConfig.CreateCacheConfig();
    this.createCacheIndex = new _cacheIndex.CreateCacheIndex();
  }
  async execute() {
    if (!(0, _fs.existsSync)((0, _path.resolve)('src'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'config'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'config'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'fakes'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'fakes'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'implementations'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'implementations'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'models'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'models'));
    }
    (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'index.ts'), `import './CacheProvider';\n`);
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'config', 'cache.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'cache.ts'), this.createCacheConfig.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'config', 'cache.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'cache.ts'), this.createCacheConfig.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'fakes', 'FakeCacheProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'fakes', 'FakeCacheProvider.ts'), this.createFakeRedis.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'fakes', 'FakeCacheProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'fakes', 'FakeCacheProvider.ts'), this.createFakeRedis.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'config', 'cache.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'cache.ts'), this.createCacheConfig.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'config', 'cache.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'cache.ts'), this.createCacheConfig.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'implementations', 'RedisCacheProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'implementations', 'RedisCacheProvider.ts'), this.createRedisCache.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'implementations', 'RedisCacheProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'implementations', 'RedisCacheProvider.ts'), this.createRedisCache.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'models', 'ICacheProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'models', 'ICacheProvider.ts'), this.createICache.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'models', 'ICacheProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'models', 'ICacheProvider.ts'), this.createICache.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'index.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'index.ts'), this.createCacheIndex.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'index.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'index.ts'), this.createCacheIndex.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- CacheProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeCacheProvider = MakeCacheProvider;