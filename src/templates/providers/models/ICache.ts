export class CreateICache {
  public execute(): string {
    return `export default interface ICacheProvider {
  save(key: string, value: any): Promise<void>;
  recovery<T>(key: string): Promise<T | null>;
  invalidate(key: string): Promise<void>;
  invalidatePrefix(prefix: string): Promise<void>;
}
`;
  }
}
