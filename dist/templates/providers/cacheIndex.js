"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCacheIndex = createCacheIndex;
function createCacheIndex() {
  return `import { container } from 'tsyringe';

import RedisCacheProvider from './implementations/RedisCacheProvider';
import ICacheProvider from './models/ICacheProvider';

const providers = {
  redis: container.resolve(RedisCacheProvider),
};

container.registerInstance<ICacheProvider>('CacheProvider', providers.redis);
`;
}