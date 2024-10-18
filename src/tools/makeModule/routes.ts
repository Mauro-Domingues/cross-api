import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateFullRoute } from '@templates/modules/routes/fullRoute';
import { CreateIndexRoute } from '@templates/modules/routes/indexRouter';
import { CreateRoute } from '@templates/modules/routes/route';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateRoutes {
  private readonly createIndexRoute: CreateIndexRoute;
  private readonly createFullRoute: CreateFullRoute;
  private readonly createRoute: CreateRoute;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Omit<
      IModuleNameDTO,
      'dbModuleName' | 'pluralUpperModuleName'
    >,
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    this.createIndexRoute = new CreateIndexRoute(this.names, this.fatherNames);
    this.createFullRoute = new CreateFullRoute(this.names, this.fatherNames);
    this.createRoute = new CreateRoute(this.names, this.fatherNames);
    this.fileManager = FileManager.getInstance();
    this.concat = Concat.getInstance();
  }

  private get routerPath(): string {
    return this.fileManager.resolvePath([
      'src',
      'routes',
      this.concat.execute(
        this.fatherNames?.lowerModuleName ?? this.names.lowerModuleName,
        'Router.ts',
      ),
    ]);
  }

  public execute(): void {
    if (this.fileManager.checkIfExistsSync([this.routerPath])) {
      this.fileManager.createFile(
        ['src', 'routes', 'index.ts'],
        this.createIndexRoute.execute(),
      );

      return this.fileManager.createFile(
        [this.routerPath],
        this.createRoute.execute(),
      );
    }
    return this.fileManager.createFile(
      [this.routerPath],
      this.createFullRoute.execute(),
    );
  }
}
