import { CreateCryptoConfig } from '@templates/providers/config/cryptoConfig.js';
import { CreateCryptoIndex } from '@templates/providers/cryptoIndex.js';
import { CreateICryptoDTO } from '@templates/providers/dtos/ICryptoDTO.js';
import { CreateCrypto } from '@templates/providers/implementations/Crypto.js';
import { CreateICrypto } from '@templates/providers/models/ICrypto.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeCryptoProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly fileManager: FileManager;
  private readonly createICrypto: CreateICrypto;
  private readonly createICryptoDTO: CreateICryptoDTO;
  private readonly createCrypto: CreateCrypto;
  private readonly createCryptoConfig: CreateCryptoConfig;
  private readonly createCryptoIndex: CreateCryptoIndex;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createICrypto = new CreateICrypto();
    this.createICryptoDTO = new CreateICryptoDTO();
    this.createCrypto = new CreateCrypto();
    this.createCryptoConfig = new CreateCryptoConfig();
    this.createCryptoIndex = new CreateCryptoIndex();
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'config']);
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CryptoProvider',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CryptoProvider',
      'dtos',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CryptoProvider',
      'implementations',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CryptoProvider',
      'models',
    ]);
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './CryptoProvider';\n`,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'crypto.ts'],
      this.createCryptoConfig,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
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
        'shared',
        'container',
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
        'shared',
        'container',
        'providers',
        'CryptoProvider',
        'models',
        'ICryptoProvider.ts',
      ],
      this.createICrypto,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'providers', 'CryptoProvider', 'index.ts'],
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
