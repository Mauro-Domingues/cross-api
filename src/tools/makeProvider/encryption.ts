import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import type { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateEncryptionConfig } from '@templates/providers/config/encryptionConfig';
import { CreateIEncryptedDTO } from '@templates/providers/dtos/IEncryptedDTO';
import { CreateIJwtTokenDTO } from '@templates/providers/dtos/IJwtTokenDTO';
import { CreateIRefreshTokenDTO } from '@templates/providers/dtos/IRefreshTokenDTO';
import { CreateEncryptionIndex } from '@templates/providers/encryptionIndex';
import { CreateFakeEncryption } from '@templates/providers/fakes/fakeEncryption';
import { CreateCryptoEncryption } from '@templates/providers/implementations/CryptoEncryption';
import { CreateIEncryption } from '@templates/providers/models/IEncryption';
import { BaseProvider } from '@tools/makeProvider/base';

export class CreateEncryptionProvider extends BaseProvider {
  private readonly createIRefreshTokenDTO: CreateIRefreshTokenDTO;
  private readonly createCryptoEncryption: CreateCryptoEncryption;
  private readonly createEncryptionConfig: CreateEncryptionConfig;
  private readonly createEncryptionIndex: CreateEncryptionIndex;
  private readonly createFakeEncryption: CreateFakeEncryption;
  private readonly createIEncryptedDTO: CreateIEncryptedDTO;
  private readonly createIJwtTokenDTO: CreateIJwtTokenDTO;
  private readonly createIEncryption: CreateIEncryption;

  public constructor(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    super(fatherNames);
    this.createIRefreshTokenDTO = new CreateIRefreshTokenDTO();
    this.createCryptoEncryption = new CreateCryptoEncryption();
    this.createEncryptionConfig = new CreateEncryptionConfig();
    this.createEncryptionIndex = new CreateEncryptionIndex();
    this.createFakeEncryption = new CreateFakeEncryption();
    this.createIEncryptedDTO = new CreateIEncryptedDTO();
    this.createIJwtTokenDTO = new CreateIJwtTokenDTO();
    this.createIEncryption = new CreateIEncryption();
  }

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [this.basePath, 'EncryptionProvider', 'fakes'],
      [this.basePath, 'EncryptionProvider', 'dtos'],
      [this.basePath, 'EncryptionProvider', 'implementations'],
      [this.basePath, 'EncryptionProvider', 'models'],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'encryption.ts'], this.createEncryptionConfig];
  }

  protected createDtos(): Array<IMultiFileDTO> {
    return [
      [
        [this.basePath, 'EncryptionProvider', 'dtos', 'IEncryptedDTO.ts'],
        this.createIEncryptedDTO,
      ],
      [
        [this.basePath, 'EncryptionProvider', 'dtos', 'IRefreshTokenDTO.ts'],
        this.createIRefreshTokenDTO,
      ],
      [
        [this.basePath, 'EncryptionProvider', 'dtos', 'IJwtTokenDTO.ts'],
        this.createIJwtTokenDTO,
      ],
    ];
  }

  protected createFake(): IMultiFileDTO {
    return [
      [
        this.basePath,
        'EncryptionProvider',
        'fakes',
        'FakeEncryptionProvider.ts',
      ],
      this.createFakeEncryption,
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
        [
          this.basePath,
          'EncryptionProvider',
          'implementations',
          'CryptoProvider.ts',
        ],
        this.createCryptoEncryption,
      ],
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
      [this.basePath, 'EncryptionProvider', 'models', 'IEncryptionProvider.ts'],
      this.createIEncryption,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      [this.basePath, 'index.ts'],
      "import './EncryptionProvider';\n",
    );

    return [
      [this.basePath, 'EncryptionProvider', 'index.ts'],
      this.createEncryptionIndex,
    ];
  }
}
