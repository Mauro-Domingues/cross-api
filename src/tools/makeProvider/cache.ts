import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import type { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateCacheIndex } from '@templates/providers/cacheIndex';
import { CreateCacheConfig } from '@templates/providers/config/cacheConfig';
import { CreateICacheKeyDTO } from '@templates/providers/dtos/ICacheKeyDTO';
import { CreateFakeCache } from '@templates/providers/fakes/fakeCache';
import { CreateRedisCache } from '@templates/providers/implementations/RedisCache';
import { CreateICache } from '@templates/providers/models/ICache';
import { BaseProvider } from '@tools/makeProvider/base';

export class CreateCacheProvider extends BaseProvider {
  private readonly createICacheKeyDTO: CreateICacheKeyDTO;
  private readonly createCacheConfig: CreateCacheConfig;
  private readonly createCacheIndex: CreateCacheIndex;
  private readonly createRedisCache: CreateRedisCache;
  private readonly createFakeCache: CreateFakeCache;
  private readonly createICache: CreateICache;

  public constructor(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    super(fatherNames);
    this.createICacheKeyDTO = new CreateICacheKeyDTO();
    this.createCacheConfig = new CreateCacheConfig();
    this.createCacheIndex = new CreateCacheIndex();
    this.createRedisCache = new CreateRedisCache();
    this.createFakeCache = new CreateFakeCache();
    this.createICache = new CreateICache();
  }

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [this.basePath, 'CacheProvider', 'fakes'],
      [this.basePath, 'CacheProvider', 'implementations'],
      [this.basePath, 'CacheProvider', 'models'],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'cache.ts'], this.createCacheConfig];
  }

  protected createDtos(): Array<IMultiFileDTO> {
    return [
      [
        [this.basePath, 'CacheProvider', 'dtos', 'ICacheKeyDTO.ts'],
        this.createICacheKeyDTO,
      ],
    ];
  }

  protected createFake(): IMultiFileDTO {
    return [
      [this.basePath, 'CacheProvider', 'fakes', 'FakeCacheProvider.ts'],
      this.createFakeCache,
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
        [this.basePath, 'CacheProvider', 'implementations', 'RedisProvider.ts'],
        this.createRedisCache,
      ],
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
      [this.basePath, 'CacheProvider', 'models', 'ICacheProvider.ts'],
      this.createICache,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      [this.basePath, 'index.ts'],
      "import './CacheProvider';\n",
    );

    return [
      [this.basePath, 'CacheProvider', 'index.ts'],
      this.createCacheIndex,
    ];
  }
}
