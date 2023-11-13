import { CreateHashConfig } from '@templates/providers/config/hashConfig';
import { CreateFakeHash } from '@templates/providers/fakes/fakeHash';
import { CreateHashIndex } from '@templates/providers/hashIndex';
import { CreateHash } from '@templates/providers/implementations/BCrypt';
import { CreateIHash } from '@templates/providers/models/IHash';
import { FileManager } from '@tools/fileManager';

export class MakeHashProvider {
  private readonly createHashConfig: CreateHashConfig;
  private readonly createHashIndex: CreateHashIndex;
  private readonly createFakeHash: CreateFakeHash;
  private readonly createIHash: CreateIHash;
  private readonly fileManager: FileManager;
  private readonly createHash: CreateHash;

  public constructor() {
    this.createHashConfig = new CreateHashConfig();
    this.createHashIndex = new CreateHashIndex();
    this.createFakeHash = new CreateFakeHash();
    this.createIHash = new CreateIHash();
    this.fileManager = new FileManager();
    this.createHash = new CreateHash();
  }

  public execute(): void {
    this.fileManager.checkAndCreateDir(['src']);
    this.fileManager.checkAndCreateDir(['src', 'config']);
    this.fileManager.checkAndCreateDir(['src', 'shared']);
    this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    this.fileManager.checkAndCreateDir(['src']);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'HashProvider',
    ]);
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
