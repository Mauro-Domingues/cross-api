import { CreateDomains } from '@templates/assets/domains';
import { FileManager } from '@tools/fileManager';

export class CreateAssets {
  private readonly createDomains: CreateDomains;
  private readonly fileManager: FileManager;

  public constructor() {
    this.fileManager = FileManager.getInstance();
    this.createDomains = new CreateDomains();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateFile(
      ['src', 'assets', 'domains.txt'],
      this.createDomains,
    );
  }
}
