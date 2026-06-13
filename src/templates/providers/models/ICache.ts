export class CreateICache {
  public execute(): string {
    return `import type { IIntervalDTO } fr\u006Fm '@dtos/IIntervalDTO';

export interface ICacheProvider {
  save<T>(key: string, value: T): Promise<void>;
  saveTemporary<T>(key: string, value: T, ttl: IIntervalDTO): Promise<void>;
  recovery<T>(key: string): Promise<T | null>;
  invalidate(key: string): Promise<void>;
  invalidatePrefix(prefix: string): Promise<void>;
  close(): void;
}
`;
  }
}
