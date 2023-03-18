import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateHashConfig } from '@templates/providers/config/hashConfig';
import { CreateFakeHash } from '@templates/providers/fakes/fakeHash';
import { CreateHashIndex } from '@templates/providers/hashIndex';
import { CreateHash } from '@templates/providers/implementations/BCrypt';
import { CreateIHash } from '@templates/providers/models/IHash';
import messages from '@tools/messages';

export class MakeHashProvider {
  private messages: typeof messages;
  private createIHash: CreateIHash;
  private createHash: CreateHash;
  private createFakeHash: CreateFakeHash;
  private createHashConfig: CreateHashConfig;
  private createHashIndex: CreateHashIndex;

  constructor() {
    this.messages = messages;
    this.createIHash = new CreateIHash();
    this.createHash = new CreateHash();
    this.createFakeHash = new CreateFakeHash();
    this.createHashConfig = new CreateHashConfig();
    this.createHashIndex = new CreateHashIndex();
  }

  public async execute(): Promise<void> {
    if (!existsSync('src')) {
      mkdirSync('src');
    }
    if (!existsSync('src/config')) {
      mkdirSync('src/config');
    }
    if (!existsSync('src/shared')) {
      mkdirSync('src/shared');
    }
    if (!existsSync('src/shared/container')) {
      mkdirSync('src/shared/container');
    }
    if (!existsSync('src/shared/container/providers')) {
      mkdirSync('src/shared/container/providers');
    }
    if (!existsSync('src/shared/container/providers/HashProvider')) {
      mkdirSync('src/shared/container/providers/HashProvider');
    }
    if (!existsSync('src/shared/container/providers/HashProvider/fakes')) {
      mkdirSync('src/shared/container/providers/HashProvider/fakes');
    }
    if (
      !existsSync('src/shared/container/providers/HashProvider/implementations')
    ) {
      mkdirSync('src/shared/container/providers/HashProvider/implementations');
    }
    if (!existsSync('src/shared/container/providers/HashProvider/models')) {
      mkdirSync('src/shared/container/providers/HashProvider/models');
    }
    appendFileSync(
      'src/shared/container/providers/index.ts',
      `\nimport './HashProvider';`,
    );
    if (!existsSync('src/config/hash.ts')) {
      appendFileSync('src/config/hash.ts', this.createHashConfig.execute());
    } else {
      truncateSync('src/config/hash.ts');
      appendFileSync('src/config/hash.ts', this.createHashConfig.execute());
    }
    if (
      !existsSync(
        'src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts',
      )
    ) {
      appendFileSync(
        'src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts',
        this.createFakeHash.execute(),
      );
    } else {
      truncateSync(
        'src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts',
      );
      appendFileSync(
        'src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts',
        this.createFakeHash.execute(),
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts',
      )
    ) {
      appendFileSync(
        'src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts',
        this.createHash.execute(),
      );
    } else {
      truncateSync(
        'src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts',
      );
      appendFileSync(
        'src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts',
        this.createHash.execute(),
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/HashProvider/models/IHashProvider.ts',
      )
    ) {
      appendFileSync(
        'src/shared/container/providers/HashProvider/models/IHashProvider.ts',
        this.createIHash.execute(),
      );
    } else {
      truncateSync(
        'src/shared/container/providers/HashProvider/models/IHashProvider.ts',
      );
      appendFileSync(
        'src/shared/container/providers/HashProvider/models/IHashProvider.ts',
        this.createIHash.execute(),
      );
    }
    if (!existsSync('src/shared/container/providers/HashProvider/index.ts')) {
      appendFileSync(
        'src/shared/container/providers/HashProvider/index.ts',
        this.createHashIndex.execute(),
      );
    } else {
      truncateSync('src/shared/container/providers/HashProvider/index.ts');
      appendFileSync(
        'src/shared/container/providers/HashProvider/index.ts',
        this.createHashIndex.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- HashProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
