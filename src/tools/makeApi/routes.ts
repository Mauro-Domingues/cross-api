import { CreateGuardIndex } from '@templates/index/guard';
import { CreateHealthRouter } from '@templates/index/healthRouter';
import { CreateRouteIndex } from '@templates/index/routes';
import { FileManager } from '@tools/fileManager';

export class CreateRoutes {
  private readonly createHealthRouter: CreateHealthRouter;
  private readonly createRouteIndex: CreateRouteIndex;
  private readonly createGuardIndex: CreateGuardIndex;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createHealthRouter = new CreateHealthRouter();
    this.createRouteIndex = new CreateRouteIndex();
    this.createGuardIndex = new CreateGuardIndex();
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'routes', 'guardRouter.ts'], this.createGuardIndex],
      [['src', 'routes', 'healthRouter.ts'], this.createHealthRouter],
      [['src', 'routes', 'index.ts'], this.createRouteIndex],
    ]);
  }
}
