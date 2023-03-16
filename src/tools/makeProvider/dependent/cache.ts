import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { CreateContainer } from '@templates/index/container';
import { CreateCacheIndex } from '@templates/providers/cacheIndex';
import { CreateCacheConfig } from '@templates/providers/config/cacheConfig';
import { CreateFakeRedis } from '@templates/providers/fakes/fakeCache';
import { CreateRedisCache } from '@templates/providers/implementations/RedisCache';
import { CreateICache } from '@templates/providers/models/ICache';
import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';

export class MakeDependentCacheProvider {
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private messages: typeof messages;
  private createICache: CreateICache;
  private createRedisCache: CreateRedisCache;
  private createFakeRedis: CreateFakeRedis;
  private createCacheConfig: CreateCacheConfig;
  private createCacheIndex: CreateCacheIndex;
  private createContainer: CreateContainer;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.fatherNames = fatherNames;
    this.messages = messages;
    this.createICache = new CreateICache();
    this.createRedisCache = new CreateRedisCache();
    this.createFakeRedis = new CreateFakeRedis();
    this.createCacheConfig = new CreateCacheConfig();
    this.createCacheIndex = new CreateCacheIndex();
    this.createContainer = new CreateContainer();
  }

  public async execute(): Promise<void> {
    if (!this.fatherNames) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.providerNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    if (!existsSync('src')) {
      mkdirSync('src');
    }
    if (!existsSync('src/config')) {
      mkdirSync('src/config');
    }
    if (!existsSync('src/modules')) {
      mkdirSync('src/modules');
    }
    if (!existsSync('src/shared')) {
      mkdirSync('src/shared');
    }
    if (!existsSync('src/shared/container')) {
      mkdirSync('src/shared/container');
    }
    if (!existsSync('src/shared/container/index.ts')) {
      appendFile(
        'src/shared/container/index.ts',
        this.createContainer.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (!existsSync(`src/modules/${this.fatherNames.pluralLowerModuleName}`)) {
      mkdirSync(`src/modules/${this.fatherNames.pluralLowerModuleName}`);
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
        '',
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models`,
      );
    }
    appendFile(
      `src/shared/container/index.ts`,
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
      error => {
        if (error) throw error;
      },
    );
    appendFile(
      `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
      `\nimport './CacheProvider';`,
      error => {
        if (error) throw error;
      },
    );
    if (!existsSync('src/config/cache.ts')) {
      appendFile(
        'src/config/cache.ts',
        this.createCacheConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/config/cache.ts', error => {
        if (error) throw error;
      });
      appendFile(
        'src/config/cache.ts',
        this.createCacheConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`,
        this.createFakeRedis.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`,
        this.createFakeRedis.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`,
        this.createRedisCache.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`,
        this.createRedisCache.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`,
        this.createICache.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`,
        this.createICache.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/index.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/index.ts`,
        this.createCacheIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/index.ts`,
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/index.ts`,
        this.createCacheIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- CacheProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
