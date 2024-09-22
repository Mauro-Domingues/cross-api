import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateCacheIndex } from '@templates/providers/cacheIndex';
import { CreateCacheConfig } from '@templates/providers/config/cacheConfig';
import { CreateFakeCache } from '@templates/providers/fakes/fakeCache';
import { CreateRedisCache } from '@templates/providers/implementations/RedisCache';
import { CreateICache } from '@templates/providers/models/ICache';
import { DependentBaseProvider } from '@tools/makeProvider/dependent/base';

export class MakeDependentCacheProvider extends DependentBaseProvider {
  private readonly createCacheConfig: CreateCacheConfig;
  private readonly createCacheIndex: CreateCacheIndex;
  private readonly createRedisCache: CreateRedisCache;
  private readonly createFakeCache: CreateFakeCache;
  private readonly createICache: CreateICache;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    super(fatherNames);
    this.createCacheConfig = new CreateCacheConfig();
    this.createCacheIndex = new CreateCacheIndex();
    this.createRedisCache = new CreateRedisCache();
    this.createFakeCache = new CreateFakeCache();
    this.createICache = new CreateICache();
  }

  protected declare createDtos: () => Array<IMultiFileDTO>;

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'fakes',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'implementations',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'models',
      ],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'cache.ts'], this.createCacheConfig];
  }

  protected createFake(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'fakes',
        'FakeCacheProvider.ts',
      ],
      this.createFakeCache,
    ];
  }

  protected createImplementations(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): Array<IMultiFileDTO> {
    return [
      [
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          'CacheProvider',
          'implementations',
          'RedisCacheProvider.ts',
        ],
        this.createRedisCache,
      ],
    ];
  }

  protected createModel(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'models',
        'ICacheProvider.ts',
      ],
      this.createICache,
    ];
  }

  protected createInjection(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    this.fileManager.createFile(
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      "import './CacheProvider';\n",
    );

    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'CacheProvider',
        'index.ts',
      ],
      this.createCacheIndex,
    ];
  }
}
