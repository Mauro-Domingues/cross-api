export class CreateFakeStorage {
  public execute(): string {
    return `import { IStorageProviderDTO } from '../models/IStorageProvider';

export class FakeStorageProvider implements IStorageProviderDTO {
  private storage: string[] = [];

  public async saveFile(file: string): Promise<string> {
    this.storage.push(file);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const findIndex = this.storage.findIndex(
      storageFile => storageFile === file,
    );

    this.storage.splice(findIndex, 1);
  }
}
`;
  }
}
