import { CreateContainer } from '@templates/index/container.js';
import { CreateHashConfig } from '@templates/providers/config/hashConfig.js';
import { CreateFakeHash } from '@templates/providers/fakes/fakeHash.js';
import { CreateHashIndex } from '@templates/providers/hashIndex.js';
import { CreateHash } from '@templates/providers/implementations/BCrypt.js';
import { CreateIHash } from '@templates/providers/models/IHash.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { IModuleNamesDTO } from '@tools/names.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeDependentHashProvider {
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private fileManager: FileManager;
  private messages: IMessagesDTO;
  private console: Console;
  private createIHash: CreateIHash;
  private createHash: CreateHash;
  private createFakeHash: CreateFakeHash;
  private createHashConfig: CreateHashConfig;
  private createHashIndex: CreateHashIndex;
  private createContainer: CreateContainer;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.fatherNames = fatherNames;
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

  public async execute(): Promise<void> {
    if (!this.fatherNames) {
      this.console.one([
        this.messages.providerNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    if (!this.fileManager.checkIfExists(['src'])) {
      await this.fileManager.createDir(['src']);
    }
    if (!this.fileManager.checkIfExists(['src', 'config'])) {
      await this.fileManager.createDir(['src', 'config']);
    }
    if (!this.fileManager.checkIfExists(['src', 'modules'])) {
      await this.fileManager.createDir(['src', 'modules']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared'])) {
      await this.fileManager.createDir(['src', 'shared']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared', 'container'])) {
      await this.fileManager.createDir(['src', 'shared', 'container']);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        this.createContainer.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
      ]);
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
      await this.fileManager.createFile(
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
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'fakes',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'fakes',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'implementations',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'implementations',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'models',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'models',
      ]);
    }
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    await this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      `import './HashProvider';\n`,
    );
    if (!this.fileManager.checkIfExists(['src', 'config', 'hash.ts'])) {
      await this.fileManager.createFile(
        ['src', 'config', 'hash.ts'],
        this.createHashConfig.execute(),
      );
    } else {
      await this.fileManager.truncateFile(['src', 'config', 'hash.ts']);
      await this.fileManager.createFile(
        ['src', 'config', 'hash.ts'],
        this.createHashConfig.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'fakes',
        'FakeHashProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'HashProvider',
          'fakes',
          'FakeHashProvider.ts',
        ],
        this.createFakeHash.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'fakes',
        'FakeHashProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'HashProvider',
          'fakes',
          'FakeHashProvider.ts',
        ],
        this.createFakeHash.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'implementations',
        'BCryptHashProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'HashProvider',
          'implementations',
          'BCryptHashProvider.ts',
        ],
        this.createHash.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'implementations',
        'BCryptHashProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'HashProvider',
          'implementations',
          'BCryptHashProvider.ts',
        ],
        this.createHash.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'models',
        'IHashProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'HashProvider',
          'models',
          'IHashProvider.ts',
        ],
        this.createIHash.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'models',
        'IHashProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'HashProvider',
          'models',
          'IHashProvider.ts',
        ],
        this.createIHash.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'HashProvider',
          'index.ts',
        ],
        this.createHashIndex.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'HashProvider',
        'index.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'HashProvider',
          'index.ts',
        ],
        this.createHashIndex.execute(),
      );
    }
    return this.console.one([
      `- HashProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
