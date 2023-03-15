"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeDependentCacheProvider = void 0;
var _fs = require("fs");
var _container = require("../../../../dist/templates/index/container");
var _cacheIndex = require("../../../../dist/templates/providers/cacheIndex");
var _cacheConfig = require("../../../../dist/templates/providers/config/cacheConfig");
var _fakeCache = require("../../../../dist/templates/providers/fakes/fakeCache");
var _RedisCache = require("../../../../dist/templates/providers/implementations/RedisCache");
var _ICache = require("../../../../dist/templates/providers/models/ICache");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeDependentCacheProvider {
  constructor(fatherNames) {
    this.fatherNames = void 0;
    this.messages = void 0;
    this.createICache = void 0;
    this.createRedisCache = void 0;
    this.createFakeRedis = void 0;
    this.createCacheConfig = void 0;
    this.createCacheIndex = void 0;
    this.createContainer = void 0;
    this.fatherNames = fatherNames;
    this.messages = _messages.default;
    this.createICache = new _ICache.CreateICache();
    this.createRedisCache = new _RedisCache.CreateRedisCache();
    this.createFakeRedis = new _fakeCache.CreateFakeRedis();
    this.createCacheConfig = new _cacheConfig.CreateCacheConfig();
    this.createCacheIndex = new _cacheIndex.CreateCacheIndex();
    this.createContainer = new _container.CreateContainer();
  }
  async execute() {
    if (!this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
      throw new Error();
    }
    if (!(0, _fs.existsSync)('src')) {
      (0, _fs.mkdirSync)('src');
    }
    if (!(0, _fs.existsSync)('src/config')) {
      (0, _fs.mkdirSync)('src/config');
    }
    if (!(0, _fs.existsSync)('src/modules')) {
      (0, _fs.mkdirSync)('src/modules');
    }
    if (!(0, _fs.existsSync)('src/shared')) {
      (0, _fs.mkdirSync)('src/shared');
    }
    if (!(0, _fs.existsSync)('src/shared/container')) {
      (0, _fs.mkdirSync)('src/shared/container');
    }
    if (!(0, _fs.existsSync)('src/shared/container/index.ts')) {
      (0, _fs.appendFile)('src/shared/container/index.ts', this.createContainer.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`, '', error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models`);
    }
    (0, _fs.appendFile)(`src/shared/container/index.ts`, `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`, error => {
      if (error) throw error;
    });
    (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`, `\nimport './CacheProvider';`, error => {
      if (error) throw error;
    });
    if (!(0, _fs.existsSync)('src/config/cache.ts')) {
      (0, _fs.appendFile)('src/config/cache.ts', this.createCacheConfig.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/config/cache.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/config/cache.ts', this.createCacheConfig.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`, this.createFakeRedis.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`, this.createFakeRedis.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`, this.createRedisCache.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`, this.createRedisCache.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`, this.createICache.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`, this.createICache.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/index.ts`)) {
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/index.ts`, this.createCacheIndex.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/index.ts`, error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/index.ts`, this.createCacheIndex.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- CacheProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeDependentCacheProvider = MakeDependentCacheProvider;