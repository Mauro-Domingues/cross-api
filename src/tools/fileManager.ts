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
  public resolvePath(path: Array<string>): string {
    return resolve(...path);
  }

  public checkIfExists(path: Array<string>): boolean {
    return existsSync(resolve(...path));
  }

  public async createDir(path: Array<string>): Promise<void> {
    return mkdirSync(resolve(...path));
  }

  public async createFile(path: Array<string>, data: string): Promise<void> {
    return appendFileSync(resolve(...path), data);
  }

  public async removeDir(path: Array<string>): Promise<void> {
    return rmSync(resolve(...path), { recursive: true, force: true });
  }

  public async removeFile(path: Array<string>): Promise<void> {
    return unlinkSync(resolve(...path));
  }

  public async readFile(path: Array<string>): Promise<string> {
    return readFileSync(resolve(...path), 'ascii');
  }

  public async writeFile(path: Array<string>, data: string): Promise<void> {
    return writeFileSync(resolve(...path), data, {
      encoding: 'utf8',
      flag: 'w',
    });
  }

  public async truncateFile(path: Array<string>): Promise<void> {
    return truncateSync(resolve(...path));
  }

  public async checkAndCreateFile(
    path: Array<string>,
    instance: {
      execute(): string;
    },
  ): Promise<void> {
    if (!this.checkIfExists(path)) {
      await this.createFile(path, instance.execute());
    }
    await this.truncateFile(path);
    await this.createFile(path, instance.execute());
  }

  public async checkAndCreateDir(path: Array<string>): Promise<void> {
    if (!this.checkIfExists(path)) {
      await this.createDir(path);
    }
  }
}
