import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseRegister } from '@tools/lastModification/base';
import { CreateModule } from '@tools/lastModification/save/module';
import { CreateProvider } from '@tools/lastModification/save/provider';

export class CreateRegister extends BaseRegister {
  private readonly createProvider: CreateProvider;
  private readonly createModule: CreateModule;

  public constructor(
    private readonly command: Array<string> | undefined,
    private readonly providerName: string | undefined,
    private readonly names: IModuleNameDTO | undefined,
    fatherNames:
      | Pick<IModuleNameDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
      | undefined,
  ) {
    super();
    this.createProvider = new CreateProvider(
      this.fileManager,
      this.basePath,
      this.providerName,
      fatherNames,
    );
    this.createModule = new CreateModule(
      this.fileManager,
      this.basePath,
      this.names,
      fatherNames,
    );
  }

  public execute(): void {
    if (this.command && this.command[0] === 'make:provider') {
      this.createProvider.execute();
    } else if (this.command && this.command[0] === 'make:module') {
      this.createModule.execute();
    }

    if (
      this.fileManager.checkIfExistsSync([
        this.basePath,
        'commands',
        'commands.log',
      ])
    ) {
      this.fileManager.truncateFileSync([
        this.basePath,
        'commands',
        'commands.log',
      ]);
    } else {
      this.fileManager.checkAndCreateMultiDirSync([
        [this.basePath, 'commands'],
      ]);
    }

    return this.fileManager.createFileSync(
      [this.basePath, 'commands', 'commands.log'],
      String(this.command),
    );
  }
}
