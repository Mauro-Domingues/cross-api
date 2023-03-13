export class CreateCacheIndex {
  public execute(): string {
    return `import { container } from 'tsyringe';

import RedisCacheProvider from './implementations/RedisCacheProvider';
import ICacheProvider from './models/ICacheProvider';

const providers = {
  redis: container.resolve(RedisCacheProvider),
};

container.registerInstance<ICacheProvider>('CacheProvider', providers.redis);
`;
  }
}
