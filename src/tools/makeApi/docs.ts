import { CreateSwagger } from '@templates/docs/swagger';
import { FileManager } from '@tools/fileManager';

export class CreateDocs {
  private readonly createSwagger: CreateSwagger;
  private readonly fileManager: FileManager;

  public constructor() {
    this.fileManager = FileManager.getInstance();
    this.createSwagger = new CreateSwagger();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateFile(
      ['src', 'swagger.json'],
      this.createSwagger,
    );
  }
}
