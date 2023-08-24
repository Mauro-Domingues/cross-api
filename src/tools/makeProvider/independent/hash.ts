import { CreateHashConfig } from '@templates/providers/config/hashConfig';
import { CreateFakeHash } from '@templates/providers/fakes/fakeHash';
import { CreateHashIndex } from '@templates/providers/hashIndex';
import { CreateHash } from '@templates/providers/implementations/BCrypt';
import { CreateIHash } from '@templates/providers/models/IHash';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeHashProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly fileManager: FileManager;
  private readonly createIHash: CreateIHash;
  private readonly createHash: CreateHash;
  private readonly createFakeHash: CreateFakeHash;
  private readonly createHashConfig: CreateHashConfig;
  private readonly createHashIndex: CreateHashIndex;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createIHash = new CreateIHash();
    this.createHash = new CreateHash();
    this.createFakeHash = new CreateFakeHash();
    this.createHashConfig = new CreateHashConfig();
    this.createHashIndex = new CreateHashIndex();
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'config']);
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'HashProvider',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'HashProvider',
      'fakes',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'HashProvider',
      'implementations',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'HashProvider',
      'models',
    ]);
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './HashProvider';\n`,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'hash.ts'],
      this.createHashConfig,
    );
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'providers', 'HashProvider', 'index.ts'],
      this.createHashIndex,
    );
    return this.console.one([
      `- HashProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
