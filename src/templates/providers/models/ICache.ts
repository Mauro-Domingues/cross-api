export class CreateICache {
  public execute(): string {
    return `import type { IIntervalDTO } fr\u006Fm '@dtos/IIntervalDTO';
import type { ICacheKeyDTO } fr\u006Fm '../dtos/ICacheKeyDTO';

export interface ICacheProvider {
  save<T>(key: ICacheKeyDTO, value: T): Promise<void>;
  saveTemporary<T>(
    key: ICacheKeyDTO,
    value: T,
    ttl: IIntervalDTO,
  ): Promise<void>;
  recovery<T>(key: ICacheKeyDTO): Promise<T | null>;
  invalidate(key: ICacheKeyDTO): Promise<void>;
  invalidatePrefix(prefix: string): Promise<void>;
  close(): void;
}
`;
  }
}
