export class CreateFakeCache {
  public execute(): string {
    return `import { ICacheProvider } ${'from'} '../models/ICacheProvider';

export class FakeCacheProvider implements ICacheProvider {
  private readonly cache: Map<string, string> = new Map<string, string>();

  public async save<T>(key: string, value: T): Promise<void> {
    this.cache.set(key, JSON.stringify(value));
  }

  public async recovery<T>(key: string): Promise<T | null> {
    const data = this.cache.get(key);

    if (!data) {
      return null;
    }

    const parsedData = JSON.parse(data) as T;

    return parsedData;
  }

  public async invalidate(key: string): Promise<void> {
    this.cache.delete(key);
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    const keys = Object.keys(this.cache).filter(key =>
      key.startsWith(\`\${prefix}:\`),
    );

    keys.forEach(key => {
      this.cache.delete(key);
    });
  }
}
`;
  }
}
