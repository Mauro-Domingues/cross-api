import { CreateCacheIndex } from '@templates/providers/cacheIndex';
import { CreateCacheConfig } from '@templates/providers/config/cacheConfig';
import { CreateFakeCache } from '@templates/providers/fakes/fakeCache';
import { CreateRedisCache } from '@templates/providers/implementations/RedisCache';
import { CreateICache } from '@templates/providers/models/ICache';
import { IModuleNamesDTO } from '@tools/names';
import { DependentBaseProvider } from './base';

export class MakeDependentCacheProvider extends DependentBaseProvider {
  private readonly createCacheConfig: CreateCacheConfig;
  private readonly createCacheIndex: CreateCacheIndex;
  private readonly createRedisCache: CreateRedisCache;
  private readonly createFakeCache: CreateFakeCache;
  private readonly createICache: CreateICache;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    super(fatherNames);
    this.createCacheConfig = new CreateCacheConfig();
    this.createCacheIndex = new CreateCacheIndex();
    this.createRedisCache = new CreateRedisCache();
    this.createFakeCache = new CreateFakeCache();
    this.createICache = new CreateICache();
  }

  public execute(): void {
    if (!this.fatherNames) {
      throw this.console.single({
        message: this.messages.providerNotFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    this.constructBase();
    this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      `import './CacheProvider';\n`,
    );
    this.fileManager.checkAndCreateMultiDirSync([
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'fakes',
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'implementations',
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'models',
      ],
    ]);
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'config', 'cache.ts'], this.createCacheConfig],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'fakes',
          'FakeCacheProvider.ts',
        ],
        this.createFakeCache,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'implementations',
          'RedisCacheProvider.ts',
        ],
        this.createRedisCache,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'models',
          'ICacheProvider.ts',
        ],
        this.createICache,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'index.ts',
        ],
        this.createCacheIndex,
      ],
    ]);
  }
}
