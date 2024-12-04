import { CreateEnvNamespace } from '@templates/types/envNamespace';
import { CreateExpressNamespace } from '@templates/types/expressNamespace';
import { CreateKeys } from '@templates/types/keys';
import { FileManager } from '@tools/fileManager';

export class CreateTypes {
  private readonly createExpressNamespace: CreateExpressNamespace;
  private readonly createEnvNamespace: CreateEnvNamespace;
  private readonly fileManager: FileManager;
  private readonly createKeys: CreateKeys;

  public constructor() {
    this.createExpressNamespace = new CreateExpressNamespace();
    this.createEnvNamespace = new CreateEnvNamespace();
    this.fileManager = FileManager.getInstance();
    this.createKeys = new CreateKeys();
  }

  public execute(): void {
    const basePath = this.fileManager.resolvePath(['src', '@types']);

    return this.fileManager.checkAndCreateMultiFile([
      [[basePath, 'express.d.ts'], this.createExpressNamespace],
      [[basePath, 'env.d.ts'], this.createEnvNamespace],
      [[basePath, 'keys.d.ts'], this.createKeys],
    ]);
  }
}
