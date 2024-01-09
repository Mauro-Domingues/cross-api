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

  public createDir(path: Array<string>): string | undefined {
    return mkdirSync(resolve(...path), { recursive: true });
  }

  public createFile(path: Array<string>, data: string): void {
    return appendFileSync(resolve(...path), data);
  }

  public removeDir(path: Array<string>): void {
    return rmSync(resolve(...path), { recursive: true, force: true });
  }

  public removeFile(path: Array<string>): void {
    return unlinkSync(resolve(...path));
  }

  public readFile(path: Array<string>): string {
    return readFileSync(resolve(...path), 'utf8');
  }

  public writeFile(path: Array<string>, data: string): void {
    return writeFileSync(resolve(...path), data, {
      encoding: 'utf8',
      flag: 'w',
    });
  }

  public truncateFile(path: Array<string>): void {
    return truncateSync(resolve(...path));
  }

  public checkAndCreateFile(
    path: Array<string>,
    instance: {
      execute(): string;
    },
  ): void {
    if (!this.checkIfExists(path)) {
      return this.createFile(path, instance.execute());
    }
    this.truncateFile(path);
    return this.createFile(path, instance.execute());
  }

  public checkAndCreateDir(path: Array<string>): void {
    if (!this.checkIfExists(path)) {
      this.createDir(path);
    }
  }
}
