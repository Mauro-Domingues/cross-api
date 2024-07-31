export class CreateFakeCache {
  public execute(): string {
    return `import { ICacheProvider } ${'from'} '../models/ICacheProvider';

export class FakeCacheProvider implements ICacheProvider {
  private readonly cache: Record<string, string> = {};

  public async save<T>(key: string, value: T): Promise<void> {
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
`;
  }
}
