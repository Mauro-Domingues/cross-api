import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateContainer } from '@templates/index/container';
import { CreateRoutes } from '@templates/index/routes';
import { CreateModuleDTO } from '@templates/modules/dtos/moduleDTO';
import { CreateEntity } from '@templates/modules/entities/entity';
import { CreateInjection } from '@templates/modules/inject/injection';
import { CreateFakeRepository } from '@templates/modules/repositories/fakes/fakeRepository';
import { CreateIRepository } from '@templates/modules/repositories/IRepository';
import { CreateRepository } from '@templates/modules/repositories/repository';
import { CreateIndependentRoute } from '@templates/modules/routes/independentRoutes';
import { CreateIndexRoute } from '@templates/modules/routes/indexRouter';
import { Concat } from '@tools/concat';
import { CustomError } from '@tools/customError';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class MakeInfra {
  private readonly createIndependentRoute: CreateIndependentRoute;
  private readonly createFakeRepository: CreateFakeRepository;
  private readonly createIRepository: CreateIRepository;
  private readonly createIndexRoute: CreateIndexRoute;
  private readonly createRepository: CreateRepository;
  private readonly createInjection: CreateInjection;
  private readonly createModuleDTO: CreateModuleDTO;
  private readonly createContainer: CreateContainer;
  private readonly createRoutes: CreateRoutes;
  private readonly createEntity: CreateEntity;
  private readonly fileManager: FileManager;
  private readonly messages: IMessageDTO;
  private readonly concat: Concat;

  public constructor(private readonly names: IModuleNameDTO | undefined) {
    this.createIndependentRoute = new CreateIndependentRoute(this.names);
    this.createFakeRepository = new CreateFakeRepository(this.names);
    this.createIRepository = new CreateIRepository(this.names);
    this.createIndexRoute = new CreateIndexRoute(this.names);
    this.createRepository = new CreateRepository(this.names);
    this.createInjection = new CreateInjection(this.names);
    this.createModuleDTO = new CreateModuleDTO(this.names);
    this.createEntity = new CreateEntity(this.names);
    this.messages = Messages.getInstance().execute();
    this.createContainer = new CreateContainer();
    this.fileManager = FileManager.getInstance();
    this.createRoutes = new CreateRoutes();
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    if (!this.names) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    if (
      !this.fileManager.checkIfExistsSync([
        'src',
        'shared',
        'container',
        'index.ts',
      ])
    ) {
      this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        this.createContainer.execute(),
      );
    }
    if (!this.fileManager.checkIfExistsSync(['src', 'routes', 'index.ts'])) {
      this.fileManager.createFile(
        ['src', 'routes', 'index.ts'],
        this.createRoutes.execute(),
      );
    }
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      this.createInjection.execute(),
    );
    this.fileManager.createFile(
      ['src', 'routes', 'index.ts'],
      this.createIndexRoute.execute(),
    );
    return this.fileManager.checkAndCreateMultiFile([
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'dtos',
          this.concat.execute('I', this.names.upperModuleName, 'DTO.ts'),
        ],
        this.createModuleDTO,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'entities',
          this.concat.execute(this.names.upperModuleName, '.ts'),
        ],
        this.createEntity,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          this.concat.execute(
            this.names.pluralUpperModuleName,
            'Repository.ts',
          ),
        ],
        this.createRepository,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          this.concat.execute(
            'I',
            this.names.pluralUpperModuleName,
            'Repository.ts',
          ),
        ],
        this.createIRepository,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          'fakes',
          this.concat.execute(
            'Fake',
            this.names.pluralUpperModuleName,
            'Repository.ts',
          ),
        ],
        this.createFakeRepository,
      ],
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
