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
    return this.fileManager.checkAndCreateMultiFile([
      [['src', '@types', 'express.d.ts'], this.createExpressNamespace],
      [['src', '@types', 'env.d.ts'], this.createEnvNamespace],
      [['src', '@types', 'keys.d.ts'], this.createKeys],
    ]);
  }
}
