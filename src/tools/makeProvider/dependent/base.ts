import { CreateContainer } from '@templates/index/container';
import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class DependentBaseProvider {
  private readonly createContainer: CreateContainer;
  protected readonly fileManager: FileManager;
  protected readonly messages: IMessagesDTO;
  protected readonly console: Console;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.createContainer = new CreateContainer();
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
  }

  protected constructBase(): void {
    if (!this.fatherNames) {
      throw this.console.single({
        message: this.messages.providerNotFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'config'],
      ['src', 'shared', 'container'],
      ['src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'],
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
        this.createContainer.execute(),
      );
    }
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
    return this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
  }
}
