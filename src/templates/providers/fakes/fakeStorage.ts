export class CreateFakeStorage {
  public execute(): string {
    return `import { IStorageProvider } ${'from'} '../models/IStorageProvider';

export class FakeStorageProvider implements IStorageProvider {
  private readonly storage: Array<string> = [];

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
