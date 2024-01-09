import { CreateCryptoConfig } from '@templates/providers/config/cryptoConfig';
import { CreateCryptoIndex } from '@templates/providers/cryptoIndex';
import { CreateICryptoDTO } from '@templates/providers/dtos/ICryptoDTO';
import { CreateCrypto } from '@templates/providers/implementations/Crypto';
import { CreateICrypto } from '@templates/providers/models/ICrypto';
import { BaseProvider } from './base';

export class MakeCryptoProvider extends BaseProvider {
  private readonly createCryptoConfig: CreateCryptoConfig;
  private readonly createCryptoIndex: CreateCryptoIndex;
  private readonly createICryptoDTO: CreateICryptoDTO;
  private readonly createICrypto: CreateICrypto;
  private readonly createCrypto: CreateCrypto;

  public constructor() {
    super();
    this.createCryptoConfig = new CreateCryptoConfig();
    this.createCryptoIndex = new CreateCryptoIndex();
    this.createICryptoDTO = new CreateICryptoDTO();
    this.createICrypto = new CreateICrypto();
    this.createCrypto = new CreateCrypto();
  }

  public execute(): void {
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CryptoProvider',
      'dtos',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CryptoProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'CryptoProvider',
      'models',
    ]);
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './CryptoProvider';\n`,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'crypto.ts'],
      this.createCryptoConfig,
    );
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    return this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'providers', 'CryptoProvider', 'index.ts'],
      this.createCryptoIndex,
    );
  }
}
