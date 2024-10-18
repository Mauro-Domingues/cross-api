import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateContainerIndex } from '@templates/index/container';
import { CreateInjection } from '@templates/modules/inject/injection';
import { FileManager } from '@tools/fileManager';

export class CreateModuleInjection {
  private readonly createContainerIndex: CreateContainerIndex;
  private readonly createInjection: CreateInjection;
  private readonly fileManager: FileManager;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'pluralUpperModuleName' | 'pluralLowerModuleName' | 'lowerModuleName'
    >,
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    this.createContainerIndex = new CreateContainerIndex();
    this.createInjection = new CreateInjection(this.names, this.fatherNames);
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
      this.createInjection.execute(),
    );
  }
}
