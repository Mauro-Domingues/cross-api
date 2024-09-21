import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateRouteIndex } from '@templates/index/routes';
import { CreateDependentRoute } from '@templates/modules/routes/dependentRoutes';
import { CreateFullDependentRoute } from '@templates/modules/routes/fullDependentRoutes';
import { CreateIndexDependentRoute } from '@templates/modules/routes/indexDependentRouter';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateDependentRoutes {
  private readonly createIndexDependentRoute: CreateIndexDependentRoute;
  private readonly createFullDependentRoute: CreateFullDependentRoute;
  private readonly createDependentRoute: CreateDependentRoute;
  private readonly createRouteIndex: CreateRouteIndex;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'upperModuleName' | 'routeModuleName'
    >,
    private readonly fatherNames: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'pluralLowerModuleName'
    >,
  ) {
    this.createIndexDependentRoute = new CreateIndexDependentRoute(
      this.fatherNames,
    );
    this.createFullDependentRoute = new CreateFullDependentRoute(
      this.names,
      this.fatherNames,
    );
    this.createDependentRoute = new CreateDependentRoute(
      this.names,
      this.fatherNames,
    );
    this.createRouteIndex = new CreateRouteIndex();
    this.fileManager = FileManager.getInstance();
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    if (!this.fileManager.checkIfExistsSync(['src', 'routes', 'index.ts'])) {
      this.fileManager.createFile(
        ['src', 'routes', 'index.ts'],
        this.createRouteIndex.execute(),
      );
    }

    if (
      !this.fileManager.checkIfExistsSync([
        'src',
        'routes',
        this.concat.execute(this.fatherNames.lowerModuleName, 'Router.ts'),
      ])
    ) {
      this.fileManager.createFile(
        [
          'src',
          'routes',
          this.concat.execute(this.fatherNames.lowerModuleName, 'Router.ts'),
        ],
        this.createFullDependentRoute.execute(),
      );
      this.fileManager.createFile(
        ['src', 'routes', 'index.ts'],
        this.createIndexDependentRoute.execute(),
      );
    } else {
      this.fileManager.createFile(
        [
          'src',
          'routes',
          this.concat.execute(this.fatherNames.lowerModuleName, 'Router.ts'),
        ],
        this.createDependentRoute.execute(),
      );
    }
  }
}
