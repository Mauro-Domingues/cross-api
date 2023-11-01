export class CreateCacheIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';

import { cacheConfig } ${'from'} '@config/cache';
import { RedisCacheProvider } ${'from'} './implementations/RedisCacheProvider';
import { ICacheProviderDTO } ${'from'} './models/ICacheProvider';

const providers = {
  redis: container.resolve(RedisCacheProvider),
};

container.registerInstance<ICacheProviderDTO>(
  'CacheProvider',
  providers[cacheConfig.driver],
);
`;
  }
}
