"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateICache = void 0;
class CreateICache {
    execute() {
        return `export default interface ICacheProvider {
  save(key: string, value: any): Promise<void>;
  recovery<T>(key: string): Promise<T | null>;
  invalidate(key: string): Promise<void>;
  invalidatePrefix(prefix: string): Promise<void>;
}
`;
    }
}
exports.CreateICache = CreateICache;
