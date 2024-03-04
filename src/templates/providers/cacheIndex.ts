export class CreateCacheIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';

import { cacheConfig } ${'from'} '@config/cache';
import { RedisCacheProvider } ${'from'} './implementations/RedisCacheProvider';
import { ICacheProviderDTO } ${'from'} './models/ICacheProvider';

const providers: Record<typeof cacheConfig.driver, () => ICacheProviderDTO> = {
  redis: () => container.resolve(RedisCacheProvider),
};

container.registerInstance<ICacheProviderDTO>(
  'CacheProvider',
  providers[cacheConfig.driver](),
);
`;
  }
}
