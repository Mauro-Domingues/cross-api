import { CreateContainer } from '@templates/index/container.js';
import { CreateCryptoConfig } from '@templates/providers/config/cryptoConfig.js';
import { CreateCryptoIndex } from '@templates/providers/cryptoIndex.js';
import { CreateICryptoDTO } from '@templates/providers/dtos/ICryptoDTO.js';
import { CreateCrypto } from '@templates/providers/implementations/Crypto.js';
import { CreateICrypto } from '@templates/providers/models/ICrypto.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { IModuleNamesDTO } from '@tools/names.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeDependentCryptoProvider {
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private messages: IMessagesDTO;
  private fileManager: FileManager;
  private console: Console;
  private createICrypto: CreateICrypto;
  private createICryptoDTO: CreateICryptoDTO;
  private createCrypto: CreateCrypto;
  private createCryptoConfig: CreateCryptoConfig;
  private createCryptoIndex: CreateCryptoIndex;
  private createContainer: CreateContainer;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.fatherNames = fatherNames;
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createICrypto = new CreateICrypto();
    this.createICryptoDTO = new CreateICryptoDTO();
    this.createCrypto = new CreateCrypto();
    this.createCryptoConfig = new CreateCryptoConfig();
    this.createCryptoIndex = new CreateCryptoIndex();
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
        'CryptoProvider',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'dtos',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'dtos',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'implementations',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'implementations',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'models',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
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
      `import './CryptoProvider';\n`,
    );
    if (!this.fileManager.checkIfExists(['src', 'config', 'crypto.ts'])) {
      await this.fileManager.createFile(
        ['src', 'config', 'crypto.ts'],
        this.createCryptoConfig.execute(),
      );
    } else {
      await this.fileManager.truncateFile(['src', 'config', 'crypto.ts']);
      await this.fileManager.createFile(
        ['src', 'config', 'crypto.ts'],
        this.createCryptoConfig.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'dtos',
        'ICryptoDTO.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CryptoProvider',
          'dtos',
          'ICryptoDTO.ts',
        ],
        this.createICryptoDTO.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'dtos',
        'ICryptoDTO.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CryptoProvider',
          'dtos',
          'ICryptoDTO.ts',
        ],
        this.createICryptoDTO.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'implementations',
        'CryptoProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CryptoProvider',
          'implementations',
          'CryptoProvider.ts',
        ],
        this.createCrypto.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'implementations',
        'CryptoProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CryptoProvider',
          'implementations',
          'CryptoProvider.ts',
        ],
        this.createCrypto.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'models',
        'ICryptoProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CryptoProvider',
          'models',
          'ICryptoProvider.ts',
        ],
        this.createICrypto.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'models',
        'ICryptoProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CryptoProvider',
          'models',
          'ICryptoProvider.ts',
        ],
        this.createICrypto.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CryptoProvider',
          'index.ts',
        ],
        this.createCryptoIndex.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'index.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CryptoProvider',
          'index.ts',
        ],
        this.createCryptoIndex.execute(),
      );
    }
    return this.console.one([
      `- CryptoProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
