import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateContainerIndex } from '@templates/index/container';
import { CreateDependentInjection } from '@templates/modules/inject/dependentInjection';
import { FileManager } from '@tools/fileManager';

export class CreateDependentModuleInjection {
  private readonly createDependentInjection: CreateDependentInjection;
  private readonly createContainerIndex: CreateContainerIndex;
  private readonly fileManager: FileManager;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'pluralUpperModuleName' | 'pluralLowerModuleName'
    >,
    private readonly fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ) {
    this.createDependentInjection = new CreateDependentInjection(
      this.names,
      this.fatherNames,
    );
    this.createContainerIndex = new CreateContainerIndex();
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
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

    return this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      this.createDependentInjection.execute(),
    );
  }
}
