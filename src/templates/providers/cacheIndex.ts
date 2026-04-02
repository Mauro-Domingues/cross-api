export class CreateCacheIndex {
  public execute(): string {
    return `import { container } fr\u006Fm 'tsyringe';
import { cacheConfig } fr\u006Fm '@config/cache';
import { RedisProvider } fr\u006Fm './implementations/RedisProvider';
import type { ICacheProvider } fr\u006Fm './models/ICacheProvider';

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
