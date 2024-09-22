import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateHashConfig } from '@templates/providers/config/hashConfig';
import { CreateFakeHash } from '@templates/providers/fakes/fakeHash';
import { CreateHashIndex } from '@templates/providers/hashIndex';
import { CreateHash } from '@templates/providers/implementations/BCrypt';
import { CreateIHash } from '@templates/providers/models/IHash';
import { BaseProvider } from '@tools/makeProvider/independent/base';

export class MakeHashProvider extends BaseProvider {
  private readonly createHashConfig: CreateHashConfig;
  private readonly createHashIndex: CreateHashIndex;
  private readonly createFakeHash: CreateFakeHash;
  private readonly createIHash: CreateIHash;
  private readonly createHash: CreateHash;

  public constructor() {
    super();
    this.createHashConfig = new CreateHashConfig();
    this.createHashIndex = new CreateHashIndex();
    this.createFakeHash = new CreateFakeHash();
    this.createIHash = new CreateIHash();
    this.createHash = new CreateHash();
  }

  protected declare createDtos: () => Array<IMultiFileDTO>;

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'shared', 'container', 'providers', 'HashProvider', 'fakes'],
      [
        'src',
        'shared',
        'container',
        'providers',
        'HashProvider',
        'implementations',
      ],
      ['src', 'shared', 'container', 'providers', 'HashProvider', 'models'],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'hash.ts'], this.createHashConfig];
  }

  protected createFake(): IMultiFileDTO {
    return [
      [
        'src',
        'shared',
        'container',
        'providers',
        'HashProvider',
        'fakes',
        'FakeHashProvider.ts',
      ],
      this.createFakeHash,
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'implementations',
          'BCryptHashProvider.ts',
        ],
        this.createHash,
      ],
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
      [
        'src',
        'shared',
        'container',
        'providers',
        'HashProvider',
        'models',
        'IHashProvider.ts',
      ],
      this.createIHash,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      "import './HashProvider';\n",
    );

    return [
      ['src', 'shared', 'container', 'providers', 'HashProvider', 'index.ts'],
      this.createHashIndex,
    ];
  }
}
