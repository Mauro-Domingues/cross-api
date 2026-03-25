import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import type { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateHashConfig } from '@templates/providers/config/hashConfig';
import { CreateFakeHash } from '@templates/providers/fakes/fakeHash';
import { CreateHashIndex } from '@templates/providers/hashIndex';
import { CreateBcryptHash } from '@templates/providers/implementations/BcryptHash';
import { CreateIHash } from '@templates/providers/models/IHash';
import { BaseProvider } from '@tools/makeProvider/base';

export class CreateHashProvider extends BaseProvider {
  private readonly createHashConfig: CreateHashConfig;
  private readonly createBcrypthash: CreateBcryptHash;
  private readonly createHashIndex: CreateHashIndex;
  private readonly createFakeHash: CreateFakeHash;
  private readonly createIHash: CreateIHash;

  public constructor(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    super(fatherNames);
    this.createHashConfig = new CreateHashConfig();
    this.createBcrypthash = new CreateBcryptHash();
    this.createHashIndex = new CreateHashIndex();
    this.createFakeHash = new CreateFakeHash();
    this.createIHash = new CreateIHash();
  }

  protected declare createDtos: () => Array<IMultiFileDTO>;

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [this.basePath, 'HashProvider', 'fakes'],
      [this.basePath, 'HashProvider', 'implementations'],
      [this.basePath, 'HashProvider', 'models'],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'hash.ts'], this.createHashConfig];
  }

  protected createFake(): IMultiFileDTO {
    return [
      [this.basePath, 'HashProvider', 'fakes', 'FakeHashProvider.ts'],
      this.createFakeHash,
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
        [this.basePath, 'HashProvider', 'implementations', 'BcryptProvider.ts'],
        this.createBcrypthash,
      ],
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
      [this.basePath, 'HashProvider', 'models', 'IHashProvider.ts'],
      this.createIHash,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      [this.basePath, 'index.ts'],
      "import './HashProvider';\n",
    );

    return [[this.basePath, 'HashProvider', 'index.ts'], this.createHashIndex];
  }
}
