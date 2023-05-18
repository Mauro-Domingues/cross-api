export class CreateCacheIndex {
    execute() {
        return `import { container } from 'tsyringe';

import { RedisCacheProvider } from './implementations/RedisCacheProvider';
import { ICacheProviderDTO } from './models/ICacheProvider';

const providers = {
  redis: container.resolve(RedisCacheProvider),
};

container.registerInstance<ICacheProviderDTO>('CacheProvider', providers.redis);
`;
    }
}
