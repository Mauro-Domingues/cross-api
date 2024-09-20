import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseRegister } from '@tools/lastModification/base';
import { CreateModule } from '@tools/lastModification/save/module';
import { CreateProvider } from '@tools/lastModification/save/provider';

export class CreateRegister extends BaseRegister {
  private readonly createProvider: CreateProvider;
  private readonly createModule: CreateModule;

  public constructor(
    private readonly comand: Array<string> | undefined,
    private readonly providerName: string | undefined,
    private readonly names: IModuleNameDTO | undefined,
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
      | undefined,
  ) {
    super();
    this.createProvider = new CreateProvider(
      this.fileManager,
      this.basePath,
      this.providerName,
      this.fatherNames,
    );
    this.createModule = new CreateModule(
      this.fileManager,
      this.basePath,
      this.names,
      this.fatherNames,
    );
  }

  public execute(): void {
    if (this.comand && this.comand[0] === 'make:provider') {
      this.createProvider.execute();
    } else if (this.comand && this.comand[0] === 'make:module') {
      this.createModule.execute();
    }

    if (
      this.fileManager.checkIfExistsSync([
        this.basePath,
        'comands',
        'comands.log',
      ])
    ) {
      this.fileManager.truncateFileSync([
        this.basePath,
        'comands',
        'comands.log',
      ]);
    } else {
      this.fileManager.checkAndCreateMultiDirSync([[this.basePath, 'comands']]);
    }

    return this.fileManager.createFileSync(
      [this.basePath, 'comands', 'comands.log'],
      String(this.comand),
    );
  }
}
