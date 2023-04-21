import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateContainer } from '@templates/index/container';
import { CreateCacheIndex } from '@templates/providers/cacheIndex';
import { CreateCacheConfig } from '@templates/providers/config/cacheConfig';
import { CreateFakeRedis } from '@templates/providers/fakes/fakeCache';
import { CreateRedisCache } from '@templates/providers/implementations/RedisCache';
import { CreateICache } from '@templates/providers/models/ICache';
import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { resolve } from 'path';
import { Console } from '@tools/console';

export class MakeDependentCacheProvider {
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private messages: IMessagesDTO;
  private console: Console;
  private createICache: CreateICache;
  private createRedisCache: CreateRedisCache;
  private createFakeRedis: CreateFakeRedis;
  private createCacheConfig: CreateCacheConfig;
  private createCacheIndex: CreateCacheIndex;
  private createContainer: CreateContainer;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.fatherNames = fatherNames;
    this.messages = new Messages().execute();
    this.console = new Console();
    this.createICache = new CreateICache();
    this.createRedisCache = new CreateRedisCache();
    this.createFakeRedis = new CreateFakeRedis();
    this.createCacheConfig = new CreateCacheConfig();
    this.createCacheIndex = new CreateCacheIndex();
    this.createContainer = new CreateContainer();
  }

  public async execute(): Promise<void> {
    if (!this.fatherNames) {
      this.console.one([
        this.messages.providerNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    if (!existsSync(resolve('src'))) {
      mkdirSync(resolve('src'));
    }
    if (!existsSync(resolve('src', 'config'))) {
      mkdirSync(resolve('src', 'config'));
    }
    if (!existsSync(resolve('src', 'modules'))) {
      mkdirSync(resolve('src', 'modules'));
    }
    if (!existsSync(resolve('src', 'shared'))) {
      mkdirSync(resolve('src', 'shared'));
    }
    if (!existsSync(resolve('src', 'shared', 'container'))) {
      mkdirSync(resolve('src', 'shared', 'container'));
    }
    if (!existsSync(resolve('src', 'shared', 'container', 'index.ts'))) {
      appendFileSync(
        resolve('src', 'shared', 'container', 'index.ts'),
        this.createContainer.execute(),
      );
    }
    if (
      !existsSync(
        resolve('src', 'modules', this.fatherNames.pluralLowerModuleName),
      )
    ) {
      mkdirSync(
        resolve('src', 'modules', this.fatherNames.pluralLowerModuleName),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ),
        '',
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'fakes',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'implementations',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'models',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'models',
        ),
      );
    }
    appendFileSync(
      resolve('src', 'shared', 'container', 'index.ts'),
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    appendFileSync(
      resolve(
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ),
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'fakes',
          'FakeCacheProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'fakes',
          'FakeCacheProvider.ts',
        ),
        this.createFakeRedis.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'implementations',
          'RedisCacheProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'models',
          'ICacheProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'index.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'index.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'index.ts',
        ),
        this.createCacheIndex.execute(),
      );
    }
    this.console.one([
      `- CacheProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
