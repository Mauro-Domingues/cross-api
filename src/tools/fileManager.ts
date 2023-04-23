import {
  existsSync,
  mkdirSync,
  rmSync,
  writeFileSync,
  unlinkSync,
  readFileSync,
  appendFileSync,
  truncateSync,
} from 'fs';
import { resolve } from 'path';

export class FileManager {
  public resolvePath(path: string[]): string {
    return resolve(...path);
  }

  public checkIfExists(path: string[]): boolean {
    return existsSync(resolve(...path));
  }

  public async createDir(path: string[]): Promise<void> {
    return mkdirSync(resolve(...path));
  }

  public async createFile(path: string[], data: string): Promise<void> {
    return appendFileSync(resolve(...path), data);
  }

  public async removeDir(path: string[]): Promise<void> {
    return rmSync(resolve(...path), { recursive: true, force: true });
  }

  public async removeFile(path: string[]): Promise<void> {
    return unlinkSync(resolve(...path));
  }

  public async readFile(path: string[]): Promise<string> {
    return readFileSync(resolve(...path), 'ascii');
  }

  public async writeFile(path: string[], data: string): Promise<void> {
    return writeFileSync(resolve(...path), data, {
      encoding: 'utf8',
      flag: 'w',
    });
  }

  public async truncateFile(path: string[]): Promise<void> {
    return truncateSync(resolve(...path));
  }
}
