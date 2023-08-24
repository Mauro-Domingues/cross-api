import { CreateContainer } from '@templates/index/container';
import { CreateCryptoConfig } from '@templates/providers/config/cryptoConfig';
import { CreateCryptoIndex } from '@templates/providers/cryptoIndex';
import { CreateICryptoDTO } from '@templates/providers/dtos/ICryptoDTO';
import { CreateCrypto } from '@templates/providers/implementations/Crypto';
import { CreateICrypto } from '@templates/providers/models/ICrypto';
import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeDependentCryptoProvider {
  private readonly fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly createICrypto: CreateICrypto;
  private readonly createICryptoDTO: CreateICryptoDTO;
  private readonly createCrypto: CreateCrypto;
  private readonly createCryptoConfig: CreateCryptoConfig;
  private readonly createCryptoIndex: CreateCryptoIndex;
  private readonly createContainer: CreateContainer;

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

    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'config']);
    await this.fileManager.checkAndCreateDir(['src', 'modules']);
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'CryptoProvider',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'CryptoProvider',
      'dtos',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'CryptoProvider',
      'implementations',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'CryptoProvider',
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
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'crypto.ts'],
      this.createCryptoConfig,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'dtos',
        'ICryptoDTO.ts',
      ],
      this.createICryptoDTO,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'implementations',
        'CryptoProvider.ts',
      ],
      this.createCrypto,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'models',
        'ICryptoProvider.ts',
      ],
      this.createICrypto,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'index.ts',
      ],
      this.createCryptoIndex,
    );
    return this.console.one([
      `- CryptoProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
