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
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'HashProvider',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'HashProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'HashProvider',
      'models',
    ]);
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './HashProvider';\n`,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'hash.ts'],
      this.createHashConfig,
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'providers', 'HashProvider', 'index.ts'],
      this.createHashIndex,
    );
  }
}
