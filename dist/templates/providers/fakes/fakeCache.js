"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFakeRedis = void 0;
class CreateFakeRedis {
    execute() {
        return `import ICacheProvider from '../models/ICacheProvider';

interface ICacheData {
  [key: string]: string;
}

class FakeCacheProvider implements ICacheProvider {
  private cache: ICacheData = {};

  public async save(key: string, value: string): Promise<void> {
    this.cache[key] = JSON.stringify(value);
  }

  public async recovery<T>(key: string): Promise<T | null> {
    const data = this.cache[key];

    if (!data) {
      return null;
    }

    const parsedData = JSON.parse(data) as T;

    return parsedData;
  }

  public async invalidate(key: string): Promise<void> {
    delete this.cache[key];
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    const keys = Object.keys(this.cache).filter(key =>
      key.startsWith(\`\${prefix}:\`),
    );

    keys.forEach(key => {
      delete this.cache[key];
    });
  }
}

export default FakeCacheProvider;
`;
    }
}
exports.CreateFakeRedis = CreateFakeRedis;
