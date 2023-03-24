"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeCacheProvider = void 0;
const fs_1 = require("fs");
const cacheIndex_1 = require("@templates/providers/cacheIndex");
const cacheConfig_1 = require("@templates/providers/config/cacheConfig");
const fakeCache_1 = require("@templates/providers/fakes/fakeCache");
const RedisCache_1 = require("@templates/providers/implementations/RedisCache");
const ICache_1 = require("@templates/providers/models/ICache");
const messages_1 = require("@tools/messages");
const path_1 = require("path");
class MakeCacheProvider {
    constructor() {
        this.messages = new messages_1.Messages().execute();
        this.createICache = new ICache_1.CreateICache();
        this.createRedisCache = new RedisCache_1.CreateRedisCache();
        this.createFakeRedis = new fakeCache_1.CreateFakeRedis();
        this.createCacheConfig = new cacheConfig_1.CreateCacheConfig();
        this.createCacheIndex = new cacheIndex_1.CreateCacheIndex();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'config'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'fakes'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'fakes'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'implementations'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'implementations'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'models'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'models'));
            }
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'index.ts'), `import './CacheProvider';\n`);
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config', 'cache.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'cache.ts'), this.createCacheConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'config', 'cache.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'cache.ts'), this.createCacheConfig.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'fakes', 'FakeCacheProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'fakes', 'FakeCacheProvider.ts'), this.createFakeRedis.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'fakes', 'FakeCacheProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'fakes', 'FakeCacheProvider.ts'), this.createFakeRedis.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config', 'cache.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'cache.ts'), this.createCacheConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'config', 'cache.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'cache.ts'), this.createCacheConfig.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'implementations', 'RedisCacheProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'implementations', 'RedisCacheProvider.ts'), this.createRedisCache.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'implementations', 'RedisCacheProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'implementations', 'RedisCacheProvider.ts'), this.createRedisCache.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'models', 'ICacheProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'models', 'ICacheProvider.ts'), this.createICache.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'models', 'ICacheProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'models', 'ICacheProvider.ts'), this.createICache.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'index.ts'), this.createCacheIndex.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'index.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CacheProvider', 'index.ts'), this.createCacheIndex.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- CacheProvider ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeCacheProvider = MakeCacheProvider;
