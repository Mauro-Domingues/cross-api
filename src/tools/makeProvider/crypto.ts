import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import type { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateCryptoConfig } from '@templates/providers/config/cryptoConfig';
import { CreateCryptoIndex } from '@templates/providers/cryptoIndex';
import { CreateIEncryptedDTO } from '@templates/providers/dtos/IEncryptedDTO';
import { CreateIJwtTokenDTO } from '@templates/providers/dtos/IJwtTokenDTO';
import { CreateIRefreshTokenDTO } from '@templates/providers/dtos/IRefreshTokenDTO';
import { CreateFakeEncryption } from '@templates/providers/fakes/fakeEncryption';
import { CreateCryptoEncryption } from '@templates/providers/implementations/CryptoEncryption';
import { CreateICrypto } from '@templates/providers/models/ICrypto';
import { BaseProvider } from '@tools/makeProvider/base';

export class CreateCryptoProvider extends BaseProvider {
  private readonly createIRefreshTokenDTO: CreateIRefreshTokenDTO;
  private readonly createCryptoEncryption: CreateCryptoEncryption;
  private readonly createFakeEncryption: CreateFakeEncryption;
  private readonly createIEncryptedDTO: CreateIEncryptedDTO;
  private readonly createIJwtTokenDTO: CreateIJwtTokenDTO;
  private readonly createCryptoConfig: CreateCryptoConfig;
  private readonly createCryptoIndex: CreateCryptoIndex;
  private readonly createICrypto: CreateICrypto;

  public constructor(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    super(fatherNames);
    this.createIRefreshTokenDTO = new CreateIRefreshTokenDTO();
    this.createCryptoEncryption = new CreateCryptoEncryption();
    this.createFakeEncryption = new CreateFakeEncryption();
    this.createIEncryptedDTO = new CreateIEncryptedDTO();
    this.createIJwtTokenDTO = new CreateIJwtTokenDTO();
    this.createCryptoConfig = new CreateCryptoConfig();
    this.createCryptoIndex = new CreateCryptoIndex();
    this.createICrypto = new CreateICrypto();
  }

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [this.basePath, 'CryptoProvider', 'fakes'],
      [this.basePath, 'CryptoProvider', 'dtos'],
      [this.basePath, 'CryptoProvider', 'implementations'],
      [this.basePath, 'CryptoProvider', 'models'],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'crypto.ts'], this.createCryptoConfig];
  }

  protected createDtos(): Array<IMultiFileDTO> {
    return [
      [
        [this.basePath, 'CryptoProvider', 'dtos', 'IEncryptedDTO.ts'],
        this.createIEncryptedDTO,
      ],
      [
        [this.basePath, 'CryptoProvider', 'dtos', 'IRefreshTokenDTO.ts'],
        this.createIRefreshTokenDTO,
      ],
      [
        [this.basePath, 'CryptoProvider', 'dtos', 'IJwtTokenDTO.ts'],
        this.createIJwtTokenDTO,
      ],
    ];
  }

  protected createFake(): IMultiFileDTO {
    return [
      [this.basePath, 'CryptoProvider', 'fakes', 'FakeEncryptionProvider.ts'],
      this.createFakeEncryption,
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
        [
          this.basePath,
          'CryptoProvider',
          'implementations',
          'CryptoProvider.ts',
        ],
        this.createCryptoEncryption,
      ],
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
      [this.basePath, 'CryptoProvider', 'models', 'ICryptoProvider.ts'],
      this.createICrypto,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      [this.basePath, 'index.ts'],
      "import './CryptoProvider';\n",
    );

    return [
      [this.basePath, 'CryptoProvider', 'index.ts'],
      this.createCryptoIndex,
    ];
  }
}
