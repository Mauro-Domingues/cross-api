import { CreateHashConfig } from '@templates/providers/config/hashConfig';
import { CreateFakeHash } from '@templates/providers/fakes/fakeHash';
import { CreateHashIndex } from '@templates/providers/hashIndex';
import { CreateHash } from '@templates/providers/implementations/BCrypt';
import { CreateIHash } from '@templates/providers/models/IHash';
import { BaseProvider } from './base';

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

  public execute(): void {
    this.constructBase();
    this.fileManager.checkAndCreateManyDirs([
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
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './HashProvider';\n`,
    );
    return this.fileManager.checkAndCreateManyFiles([
      [['src', 'config', 'hash.ts'], this.createHashConfig],
      [
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
      ],
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
      [
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
      ],
      [
        ['src', 'shared', 'container', 'providers', 'HashProvider', 'index.ts'],
        this.createHashIndex,
      ],
    ]);
  }
}
