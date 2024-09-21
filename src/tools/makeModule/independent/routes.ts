import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateRouteIndex } from '@templates/index/routes';
import { CreateIndependentRoute } from '@templates/modules/routes/independentRoutes';
import { CreateIndexRoute } from '@templates/modules/routes/indexRouter';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateRoutes {
  private readonly createIndependentRoute: CreateIndependentRoute;
  private readonly createIndexRoute: CreateIndexRoute;
  private readonly createRouteIndex: CreateRouteIndex;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Omit<
      IModuleNameDTO,
      'dbModuleName' | 'pluralUpperModuleName'
    >,
  ) {
    this.createIndependentRoute = new CreateIndependentRoute(this.names);
    this.createIndexRoute = new CreateIndexRoute(this.names);
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

    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'routes', 'index.ts'], this.createIndexRoute],
      [
        [
          'src',
          'routes',
          this.concat.execute(this.names.lowerModuleName, 'Router.ts'),
        ],
        this.createIndependentRoute,
      ],
    ]);
  }
}
