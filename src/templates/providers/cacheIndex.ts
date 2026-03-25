export class CreateCacheIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { cacheConfig } fr\om '@config/cache';
import { RedisProvider } fr\om './implementations/RedisProvider';
import type { ICacheProvider } fr\om './models/ICacheProvider';

const providers: Record<typeof cacheConfig.driver, () => ICacheProvider> = {
  redis: () => container.resolve(RedisProvider),
};

container.registerInstance<ICacheProvider>(
  'CacheProvider',
  providers[cacheConfig.driver](),
);
`;
  }
}
