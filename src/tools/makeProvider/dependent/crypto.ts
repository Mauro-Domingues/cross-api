import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateCryptoConfig } from '@templates/providers/config/cryptoConfig';
import { CreateCryptoIndex } from '@templates/providers/cryptoIndex';
import { CreateICryptoDTO } from '@templates/providers/dtos/ICryptoDTO';
import { CreateFakeCrypto } from '@templates/providers/fakes/fakeCrypto';
import { CreateCrypto } from '@templates/providers/implementations/Crypto';
import { CreateICrypto } from '@templates/providers/models/ICrypto';
import { DependentBaseProvider } from '@tools/makeProvider/dependent/base';

export class MakeDependentCryptoProvider extends DependentBaseProvider {
  private readonly createCryptoConfig: CreateCryptoConfig;
  private readonly createCryptoIndex: CreateCryptoIndex;
  private readonly createFakeCrypto: CreateFakeCrypto;
  private readonly createICryptoDTO: CreateICryptoDTO;
  private readonly createICrypto: CreateICrypto;
  private readonly createCrypto: CreateCrypto;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    super(fatherNames);
    this.createCryptoConfig = new CreateCryptoConfig();
    this.createCryptoIndex = new CreateCryptoIndex();
    this.createFakeCrypto = new CreateFakeCrypto();
    this.createICryptoDTO = new CreateICryptoDTO();
    this.createICrypto = new CreateICrypto();
    this.createCrypto = new CreateCrypto();
  }

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'fakes',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'dtos',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'implementations',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'models',
      ],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'crypto.ts'], this.createCryptoConfig];
  }

  protected createDtos(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): Array<IMultiFileDTO> {
    return [
      [
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          'CryptoProvider',
          'dtos',
          'ICryptoDTO.ts',
        ],
        this.createICryptoDTO,
      ],
    ];
  }

  protected createFake(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'fakes',
        'FakeCryptoProvider.ts',
      ],
      this.createFakeCrypto,
    ];
  }

  protected createImplementations(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): Array<IMultiFileDTO> {
    return [
      [
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          'CryptoProvider',
          'implementations',
          'CryptoProvider.ts',
        ],
        this.createCrypto,
      ],
    ];
  }

  protected createModel(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'models',
        'ICryptoProvider.ts',
      ],
      this.createICrypto,
    ];
  }

  protected createInjection(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    this.fileManager.createFile(
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      "import './CryptoProvider';\n",
    );

    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'CryptoProvider',
        'index.ts',
      ],
      this.createCryptoIndex,
    ];
  }
}
