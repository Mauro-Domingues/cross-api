import { CreateCryptoConfig } from '@templates/providers/config/cryptoConfig';
import { CreateCryptoIndex } from '@templates/providers/cryptoIndex';
import { CreateICryptoDTO } from '@templates/providers/dtos/ICryptoDTO';
import { CreateCrypto } from '@templates/providers/implementations/Crypto';
import { CreateICrypto } from '@templates/providers/models/ICrypto';
import { IModuleNamesDTO } from '@tools/names';
import { DependentBaseProvider } from './base';

export class MakeDependentCryptoProvider extends DependentBaseProvider {
  private readonly createCryptoConfig: CreateCryptoConfig;
  private readonly createCryptoIndex: CreateCryptoIndex;
  private readonly createICryptoDTO: CreateICryptoDTO;
  private readonly createICrypto: CreateICrypto;
  private readonly createCrypto: CreateCrypto;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    super(fatherNames);
    this.createCryptoConfig = new CreateCryptoConfig();
    this.createCryptoIndex = new CreateCryptoIndex();
    this.createICryptoDTO = new CreateICryptoDTO();
    this.createICrypto = new CreateICrypto();
    this.createCrypto = new CreateCrypto();
  }

  public execute(): void {
    if (!this.fatherNames) {
      throw this.console.single({
        message: this.messages.providerNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    this.constructBase();
    this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      `import './CryptoProvider';\n`,
    );
    this.fileManager.checkAndCreateMultiDirSync([
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'dtos',
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'implementations',
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'models',
      ],
    ]);
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'config', 'crypto.ts'], this.createCryptoConfig],
      [
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
      ],
      [
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
      ],
      [
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
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'CryptoProvider',
          'index.ts',
        ],
        this.createCryptoIndex,
      ],
    ]);
  }
}
