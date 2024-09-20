import { CreateAppError } from '@templates/errors/appError';
import { FileManager } from '@tools/fileManager';

export class CreateErrors {
  private readonly createAppError: CreateAppError;
  private readonly fileManager: FileManager;

  public constructor() {
    this.fileManager = FileManager.getInstance();
    this.createAppError = new CreateAppError();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'errors', 'AppError.ts'],
      this.createAppError,
    );
  }
}
