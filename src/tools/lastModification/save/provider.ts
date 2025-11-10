import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import type { FileManager } from '@tools/fileManager';

export class CreateProvider {
  public constructor(
    private readonly fileManager: FileManager,
    private readonly basePath: string,
    private readonly providerName: string | undefined,
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
      | undefined,
  ) {}

  private constructProviderBase(): void {
    const basePath = this.fileManager.resolvePath([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    this.fileManager.checkAndCreateDirSync([basePath]);
    if (!this.fileManager.checkIfExistsSync([basePath, 'index.ts'])) {
      this.fileManager.createFileSync([basePath, 'index.ts'], '');
    }
  }

  private useProviderName(): void {
    const providerInjection = this.fileManager.readFileSync([
      'src',
      'shared',
      'container',
      'providers',
      'index.ts',
    ]);
    this.fileManager.truncateFileSync([
      this.basePath,
      'providers',
      'providerInjection.log',
    ]);
    this.fileManager.createFileSync(
      [this.basePath, 'providers', 'providerInjection.log'],
      providerInjection,
    );
  }

  private useFatherNames({
    fatherNames,
  }: {
    fatherNames: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'pluralLowerModuleName'
    >;
  }): void {
    this.fileManager.truncateFileSync([
      this.basePath,
      'providers',
      'providerInjection.log',
    ]);
    if (
      this.fileManager.checkIfExistsSync([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ])
    ) {
      const providerInjection = this.fileManager.readFileSync([
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ]);
      this.fileManager.createFileSync(
        [this.basePath, 'providers', 'providerInjection.log'],
        providerInjection,
      );
    } else {
      this.fileManager.createFileSync(
        [this.basePath, 'providers', 'providerInjection.log'],
        '',
      );
    }
  }

  public execute(): void {
    this.constructProviderBase();

    if (this.providerName && this.fatherNames) {
      this.useFatherNames({ fatherNames: this.fatherNames });
    } else if (this.providerName) {
      this.useProviderName();
    }
  }
}
