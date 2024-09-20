import { CreateContainerIndex } from '@templates/index/container';
import { FileManager } from '@tools/fileManager';
import { CreateModules } from '@tools/makeApi/shared/container/modules';
import { CreateProviders } from '@tools/makeApi/shared/container/providers';

export class CreateContainer {
  private readonly createContainerIndex: CreateContainerIndex;
  private readonly createProviders: CreateProviders;
  private readonly createModules: CreateModules;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createContainerIndex = new CreateContainerIndex();
    this.createProviders = new CreateProviders();
    this.fileManager = FileManager.getInstance();
    this.createModules = new CreateModules();
  }

  public execute(): void {
    this.createModules.execute();
    this.createProviders.execute();
    return this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'index.ts'],
      this.createContainerIndex,
    );
  }
}
