import { CreateContainer } from '@templates/index/container';
import { CreateHashConfig } from '@templates/providers/config/hashConfig';
import { CreateFakeHash } from '@templates/providers/fakes/fakeHash';
import { CreateHashIndex } from '@templates/providers/hashIndex';
import { CreateHash } from '@templates/providers/implementations/BCrypt';
import { CreateIHash } from '@templates/providers/models/IHash';
import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeDependentHashProvider {
  private readonly createHashConfig: CreateHashConfig;
  private readonly createHashIndex: CreateHashIndex;
  private readonly createContainer: CreateContainer;
  private readonly createFakeHash: CreateFakeHash;
  private readonly createIHash: CreateIHash;
  private readonly fileManager: FileManager;
  private readonly createHash: CreateHash;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createIHash = new CreateIHash();
    this.createHash = new CreateHash();
    this.createFakeHash = new CreateFakeHash();
    this.createHashConfig = new CreateHashConfig();
    this.createHashIndex = new CreateHashIndex();
    this.createContainer = new CreateContainer();
  }

  public execute(): void {
    if (!this.fatherNames) {
      throw this.console.one([
        this.messages.providerNotFound,
        'red',
        true,
        false,
        false,
      ]);
    }

    this.fileManager.checkAndCreateDir(['src']);
    this.fileManager.checkAndCreateDir(['src', 'config']);
    this.fileManager.checkAndCreateDir(['src', 'modules']);
    this.fileManager.checkAndCreateDir(['src', 'shared']);
    this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'HashProvider',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'HashProvider',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'HashProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'HashProvider',
      'models',
    ]);
    if (
      !this.fileManager.checkIfExists([
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
      !this.fileManager.checkIfExists([
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
    this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      `import './HashProvider';\n`,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'hash.ts'],
      this.createHashConfig,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'fakes',
        'FakeHashProvider.ts',
      ],
      this.createFakeHash,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'implementations',
        'BCryptHashProvider.ts',
      ],
      this.createHash,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'models',
        'IHashProvider.ts',
      ],
      this.createIHash,
    );
    return this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'index.ts',
      ],
      this.createHashIndex,
    );
  }
}
