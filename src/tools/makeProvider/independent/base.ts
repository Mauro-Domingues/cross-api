import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateContainerIndex } from '@templates/index/container';
import { FileManager } from '@tools/fileManager';

export abstract class BaseProvider {
  private readonly createContainerIndex: CreateContainerIndex;
  protected readonly fileManager: FileManager;

  public constructor() {
    this.createContainerIndex = new CreateContainerIndex();
    this.fileManager = FileManager.getInstance();
  }

  private constructBase(): void {
    this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'config'],
      ['src', 'shared', 'container', 'providers'],
    ]);
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
        this.createContainerIndex.execute(),
      );
    }
  }

  protected abstract createInfra(): void;

  protected abstract createConfig(): IMultiFileDTO;

  protected abstract createJobs?(): Array<IMultiFileDTO>;

  protected abstract createDtos?(): Array<IMultiFileDTO>;

  protected abstract createFake(): IMultiFileDTO;

  protected abstract createImplementations(): Array<IMultiFileDTO>;

  protected abstract createModel(): IMultiFileDTO;

  protected abstract createInjection(): IMultiFileDTO;

  public execute(): void {
    this.constructBase();
    this.createInfra();

    return this.fileManager.checkAndCreateMultiFile([
      this.createConfig(),
      ...(this.createJobs ? this.createJobs() : []),
      ...(this.createDtos ? this.createDtos() : []),
      this.createFake(),
      ...this.createImplementations(),
      this.createModel(),
      this.createInjection(),
    ]);
  }
}
