export class CreateCacheIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';
import { cacheConfig } ${'from'} '@config/cache';
import { RedisCacheProvider } ${'from'} './implementations/RedisCacheProvider';
import { ICacheProvider } ${'from'} './models/ICacheProvider';

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
