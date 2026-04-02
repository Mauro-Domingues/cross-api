export class CreateFakeStorage {
  public execute(): string {
    return `import type { IStorageProvider } fr\u006Fm '../models/IStorageProvider';

export class FakeStorageProvider implements IStorageProvider {
  private readonly storage = new Set<string>();

  public async saveFile(file: string): Promise<void> {
    this.storage.add(file);
  }

  public async deleteFile(file: string): Promise<void> {
    this.storage.delete(file);
  }
}
`;
  }
}
