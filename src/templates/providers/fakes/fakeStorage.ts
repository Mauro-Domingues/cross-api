export class CreateFakeStorage {
  public execute(): string {
    return `import { IStorageProvider } fr\om '../models/IStorageProvider';

export class FakeStorageProvider implements IStorageProvider {
  private readonly storage: Array<string> = [];

  public async saveFile(file: string): Promise<void> {
    this.storage.push(file);
  }

  public async deleteFile(file: string): Promise<void> {
    const findIndex = this.storage.findIndex(
      storageFile => storageFile === file,
    );

    if (findIndex !== -1) {
      this.storage.splice(findIndex, 1);
    }
  }
}
`;
  }
}
