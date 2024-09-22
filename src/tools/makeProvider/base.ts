import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateContainerIndex } from '@templates/index/container';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export abstract class BaseProvider {
  private readonly createContainerIndex: CreateContainerIndex;
  protected readonly fileManager: FileManager;
  protected readonly basePath: Array<string>;
  protected readonly messages: IMessageDTO;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.createContainerIndex = new CreateContainerIndex();
    this.messages = Messages.getInstance().execute();
    this.fileManager = FileManager.getInstance();
    if (this.fatherNames) {
      this.basePath = [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
      ];
    } else {
      this.basePath = ['src', 'shared', 'container', 'providers'];
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

  private createBaseInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'config'],
      ['src', 'shared', 'container'],
      this.basePath,
    ]);
  }

  private createBaseIndex(): void {
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

  private createBaseDependentIndex(): void {
    if (this.fatherNames) {
      if (
        !this.fileManager.checkIfExistsSync([
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ])
      ) {
        this.fileManager.createFile(
          [
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'index.ts',
          ],
          '',
        );
      }
      this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
      );
    }
  }

  public execute(): void {
    this.createBaseInfra();
    this.createInfra();

    this.createBaseIndex();
    if (this.fatherNames) {
      this.createBaseDependentIndex();
    }

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
