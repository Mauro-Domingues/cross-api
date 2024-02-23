import {
  existsSync,
  mkdirSync,
  writeFileSync,
  unlink,
  readFileSync,
  appendFile,
  appendFileSync,
  truncateSync,
  rm,
} from 'node:fs';
import { resolve } from 'node:path';

export class FileManager {
  public resolvePath(path: Array<string>): string {
    return resolve(...path);
  }

  public checkIfExistsSync(path: Array<string>): boolean {
    return existsSync(resolve(...path));
  }

  public createDirSync(path: Array<string>): string | undefined {
    return mkdirSync(resolve(...path), { recursive: true });
  }

  public createFile(path: Array<string>, data: string): void {
    return appendFile(
      resolve(...path),
      data,
      (error: NodeJS.ErrnoException | null): void => {
        if (error) throw error;
      },
    );
  }

  public createFileSync(path: Array<string>, data: string): void {
    return appendFileSync(resolve(...path), data);
  }

  public removeDir(path: Array<string>): void {
    return rm(
      resolve(...path),
      { recursive: true, force: true },
      (error: NodeJS.ErrnoException | null): void => {
        if (error) throw error;
      },
    );
  }

  public removeFile(path: Array<string>): void {
    return unlink(
      resolve(...path),
      (error: NodeJS.ErrnoException | null): void => {
        if (error) throw error;
      },
    );
  }

  public readFileSync(path: Array<string>): string {
    return readFileSync(resolve(...path), 'utf8');
  }

  public writeFileSync(path: Array<string>, data: string): void {
    return writeFileSync(resolve(...path), data, {
      encoding: 'utf8',
      flag: 'w',
    });
  }

  public truncateFileSync(path: Array<string>): void {
    return truncateSync(resolve(...path));
  }

  public checkAndCreateFile(
    path: Array<string>,
    instance: {
      execute(): string;
    },
  ): void {
    if (!this.checkIfExistsSync(path)) {
      return this.createFile(path, instance.execute());
    }
    this.truncateFileSync(path);
    return this.createFile(path, instance.execute());
  }

  public checkAndCreateDirSync(path: Array<string>): void {
    if (!this.checkIfExistsSync(path)) {
      this.createDirSync(path);
    }
  }

  public removeMultiDir(paths: Array<Array<string>>): void {
    return paths.forEach(path => this.removeDir(path));
  }

  public checkAndRemoveMultiFile(paths: Array<Array<string>>): void {
    return paths.forEach(file => {
      if (this.checkIfExistsSync(file)) {
        this.removeFile(file);
      }
    });
  }

  public checkAndCreateMultiFile(
    data: Array<
      [
        Array<string>,
        {
          execute(): string;
        },
      ]
    >,
  ): void {
    return data.forEach(fileData => this.checkAndCreateFile(...fileData));
  }

  public checkAndCreateMultiDirSync(paths: Array<Array<string>>): void {
    return paths.forEach(dir => this.checkAndCreateDirSync(dir));
  }
}
