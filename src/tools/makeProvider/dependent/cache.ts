import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { createContainer } from '@templates/index/container';
import { createCacheIndex } from '@templates/providers/cacheIndex';
import { createCacheConfig } from '@templates/providers/config/cacheConfig';
import { createFakeRedis } from '@templates/providers/fakes/fakeCache';
import { createRedisCache } from '@templates/providers/implementations/RedisCache';
import { createICache } from '@templates/providers/models/ICache';
import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';

export class MakeDependentCacheProvider {
  private fatherNames: IModuleNamesDTO;
  private messages: typeof messages;

  constructor(fatherNames: IModuleNamesDTO) {
    this.fatherNames = fatherNames;
    this.messages = messages;
  }

  public async execute(): Promise<void> {
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
      appendFile('src/shared/container/index.ts', createContainer(), error => {
        if (error) throw error;
      });
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
      appendFile('src/config/cache.ts', createCacheConfig(), error => {
        if (error) throw error;
      });
    } else {
      truncate('src/config/cache.ts', error => {
        if (error) console.log(error);
      });
      appendFile('src/config/cache.ts', createCacheConfig(), error => {
        if (error) throw error;
      });
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`,
        createFakeRedis(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/fakes/FakeCacheProvider.ts`,
        createFakeRedis(),
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
        createRedisCache(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/implementations/RedisCacheProvider.ts`,
        createRedisCache(),
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
        createICache(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/models/ICacheProvider.ts`,
        createICache(),
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
        createCacheIndex(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/index.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CacheProvider/index.ts`,
        createCacheIndex(),
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
