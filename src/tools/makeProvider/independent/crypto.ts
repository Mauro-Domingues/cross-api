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
    this.constructBase();
    this.fileManager.checkAndCreateManyDirs([
      ['src', 'shared', 'container', 'providers', 'CryptoProvider', 'dtos'],
      [
        'src',
        'shared',
        'container',
        'providers',
        'CryptoProvider',
        'implementations',
      ],
      ['src', 'shared', 'container', 'providers', 'CryptoProvider', 'models'],
    ]);
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './CryptoProvider';\n`,
    );
    return this.fileManager.checkAndCreateManyFiles([
      [['src', 'config', 'crypto.ts'], this.createCryptoConfig],
      [
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
      ],
      [
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
      ],
      [
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
      ],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'index.ts',
        ],
        this.createCryptoIndex,
      ],
    ]);
  }
}
