export class CreateICache {
  public execute(): string {
    return `export interface ICacheProviderDTO {
  save<T>(key: string, value: T): Promise<void>;
  recovery<T>(key: string): Promise<T | null>;
  invalidate(key: string): Promise<void>;
  invalidatePrefix(prefix: string): Promise<void>;
}
`;
  }
}
