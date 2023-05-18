import { CreateCacheIndex } from '../../../templates/providers/cacheIndex.js';
import { CreateCacheConfig } from '../../../templates/providers/config/cacheConfig.js';
import { CreateFakeRedis } from '../../../templates/providers/fakes/fakeCache.js';
import { CreateRedisCache } from '../../../templates/providers/implementations/RedisCache.js';
import { CreateICache } from '../../../templates/providers/models/ICache.js';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';
import { FileManager } from '../../fileManager.js';
export class MakeCacheProvider {
    messages;
    console;
    createICache;
    fileManager;
    createRedisCache;
    createFakeRedis;
    createCacheConfig;
    createCacheIndex;
    constructor() {
        this.messages = new Messages().execute();
        this.fileManager = new FileManager();
        this.console = new Console();
        this.createICache = new CreateICache();
        this.createRedisCache = new CreateRedisCache();
        this.createFakeRedis = new CreateFakeRedis();
        this.createCacheConfig = new CreateCacheConfig();
        this.createCacheIndex = new CreateCacheIndex();
    }
    async execute() {
        if (!this.fileManager.checkIfExists(['src'])) {
            await this.fileManager.createDir(['src']);
        }
        if (!this.fileManager.checkIfExists(['src', 'config'])) {
            await this.fileManager.createDir(['src', 'config']);
        }
        if (!this.fileManager.checkIfExists(['src', 'shared'])) {
            await this.fileManager.createDir(['src', 'shared']);
        }
        if (!this.fileManager.checkIfExists(['src', 'shared', 'container'])) {
            await this.fileManager.createDir(['src', 'shared', 'container']);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'CacheProvider',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'CacheProvider',
            'fakes',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'fakes',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'CacheProvider',
            'implementations',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'implementations',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'CacheProvider',
            'models',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'models',
            ]);
        }
        await this.fileManager.createFile(['src', 'shared', 'container', 'providers', 'index.ts'], `import './CacheProvider';\n`);
        if (!this.fileManager.checkIfExists(['src', 'config', 'cache.ts'])) {
            await this.fileManager.createFile(['src', 'config', 'cache.ts'], this.createCacheConfig.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'config', 'cache.ts']);
            await this.fileManager.createFile(['src', 'config', 'cache.ts'], this.createCacheConfig.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'CacheProvider',
            'fakes',
            'FakeCacheProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'fakes',
                'FakeCacheProvider.ts',
            ], this.createFakeRedis.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'fakes',
                'FakeCacheProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'fakes',
                'FakeCacheProvider.ts',
            ], this.createFakeRedis.execute());
        }
        if (!this.fileManager.checkIfExists(['src', 'config', 'cache.ts'])) {
            await this.fileManager.createFile(['src', 'config', 'cache.ts'], this.createCacheConfig.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'config', 'cache.ts']);
            await this.fileManager.createFile(['src', 'config', 'cache.ts'], this.createCacheConfig.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'CacheProvider',
            'implementations',
            'RedisCacheProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'implementations',
                'RedisCacheProvider.ts',
            ], this.createRedisCache.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'implementations',
                'RedisCacheProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'implementations',
                'RedisCacheProvider.ts',
            ], this.createRedisCache.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'CacheProvider',
            'models',
            'ICacheProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'models',
                'ICacheProvider.ts',
            ], this.createICache.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'models',
                'ICacheProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'models',
                'ICacheProvider.ts',
            ], this.createICache.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'CacheProvider',
            'index.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'index.ts',
            ], this.createCacheIndex.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'index.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'CacheProvider',
                'index.ts',
            ], this.createCacheIndex.execute());
        }
        return this.console.one([
            `- CacheProvider ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
    }
}
