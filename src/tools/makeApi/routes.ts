import { CreateGuardIndex } from '@templates/index/guard';
import { CreateRouteIndex } from '@templates/index/routes';
import { FileManager } from '@tools/fileManager';

export class CreateRoutes {
  private readonly createRouteIndex: CreateRouteIndex;
  private readonly createGuardIndex: CreateGuardIndex;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createRouteIndex = new CreateRouteIndex();
    this.createGuardIndex = new CreateGuardIndex();
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'routes', 'guardRouter.ts'], this.createGuardIndex],
      [['src', 'routes', 'index.ts'], this.createRouteIndex],
    ]);
  }
}
