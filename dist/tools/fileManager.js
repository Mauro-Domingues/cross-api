import { existsSync, mkdirSync, rmSync, writeFileSync, unlinkSync, readFileSync, appendFileSync, truncateSync, } from 'fs';
import { resolve } from 'path';
export class FileManager {
    resolvePath(path) {
        return resolve(...path);
    }
    checkIfExists(path) {
        return existsSync(resolve(...path));
    }
    async createDir(path) {
        return mkdirSync(resolve(...path));
    }
    async createFile(path, data) {
        return appendFileSync(resolve(...path), data);
    }
    async removeDir(path) {
        return rmSync(resolve(...path), { recursive: true, force: true });
    }
    async removeFile(path) {
        return unlinkSync(resolve(...path));
    }
    async readFile(path) {
        return readFileSync(resolve(...path), 'ascii');
    }
    async writeFile(path, data) {
        return writeFileSync(resolve(...path), data, {
            encoding: 'utf8',
            flag: 'w',
        });
    }
    async truncateFile(path) {
        return truncateSync(resolve(...path));
    }
}
