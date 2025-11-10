import {
  existsSync,
  mkdirSync,
  writeFileSync,
  unlink,
  readFileSync,
  appendFile,
  appendFileSync,
  truncateSync,
  readdirSync,
  rm,
} from 'node:fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';
import type { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import type { IFileManagerDTO } from '@interfaces/ISingletonDTO';

export class FileManager {
  private static instance: IFileManagerDTO;
  private readonly root: string;

  private constructor() {
    this.root = cwd();
  }

  public static getInstance(): IFileManagerDTO {
    if (!FileManager.instance) {
      FileManager.instance = new FileManager();
    }
    return FileManager.instance;
  }

  public resolvePath(path: Array<string>): string {
    return resolve(this.root, ...path);
  }

  public checkIfExistsSync(path: Array<string>): boolean {
    return existsSync(this.resolvePath(path));
  }

  public filterPathSync(
    path: Array<string>,
    fileName: string,
  ): Array<Array<string>> {
    const files = readdirSync(this.resolvePath(path));

    return files
      .filter(file => new RegExp(`^\\d+-${fileName}\\.ts$`).exec(file) !== null)
      .map(filtredFile => path.concat([filtredFile]));
  }

  public createDirSync(path: Array<string>): string | undefined {
    return mkdirSync(this.resolvePath(path), { recursive: true });
  }

  public createFile(path: Array<string>, data: string): void {
    return appendFile(
      this.resolvePath(path),
      data,
      (error: NodeJS.ErrnoException | null): void => {
        if (error) throw error;
      },
    );
  }

  public createFileSync(path: Array<string>, data: string): void {
    return appendFileSync(this.resolvePath(path), data);
  }

  public removeDir(path: Array<string>): void {
    return rm(
      this.resolvePath(path),
      { recursive: true, force: true },
      (error: NodeJS.ErrnoException | null): void => {
        if (error) throw error;
      },
    );
  }

  public removeFile(path: Array<string>): void {
    return unlink(
      this.resolvePath(path),
      (error: NodeJS.ErrnoException | null): void => {
        if (error) throw error;
      },
    );
  }

  public readFileSync(path: Array<string>): string {
    return readFileSync(this.resolvePath(path), 'utf8');
  }

  public writeFileSync(path: Array<string>, data: string): void {
    return writeFileSync(this.resolvePath(path), data, {
      encoding: 'utf8',
      flag: 'w',
    });
  }

  public truncateFileSync(path: Array<string>): void {
    return truncateSync(this.resolvePath(path));
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

  public checkAndCreateMultiFile(data: Array<IMultiFileDTO>): void {
    return data.forEach(fileData => this.checkAndCreateFile(...fileData));
  }

  public checkAndCreateMultiDirSync(paths: Array<Array<string>>): void {
    return paths.forEach(dir => this.checkAndCreateDirSync(dir));
  }
}
