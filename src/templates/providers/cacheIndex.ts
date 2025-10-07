export class CreateCacheIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { cacheConfig } fr\om '@config/cache';
import { RedisCacheProvider } fr\om './implementations/RedisCacheProvider';
import { ICacheProvider } fr\om './models/ICacheProvider';

const providers: Record<typeof cacheConfig.driver, () => ICacheProvider> = {
  redis: () => container.resolve(RedisCacheProvider),
};

container.registerInstance<ICacheProvider>(
  'CacheProvider',
  providers[cacheConfig.driver](),
);
`;
  }
}
