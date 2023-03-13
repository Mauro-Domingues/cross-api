import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
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
    appendFile(
      'src/shared/container/providers/index.ts',
      `\nimport './HashProvider';`,
      error => {
        if (error) throw error;
      },
    );
    if (!existsSync('src/config/hash.ts')) {
      appendFile(
        'src/config/hash.ts',
        this.createHashConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/config/hash.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/config/hash.ts',
        this.createHashConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts',
        this.createFakeHash.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts',
        this.createFakeHash.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts',
        this.createHash.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts',
        this.createHash.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/HashProvider/models/IHashProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/HashProvider/models/IHashProvider.ts',
        this.createIHash.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/HashProvider/models/IHashProvider.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/HashProvider/models/IHashProvider.ts',
        this.createIHash.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (!existsSync('src/shared/container/providers/HashProvider/index.ts')) {
      appendFile(
        'src/shared/container/providers/HashProvider/index.ts',
        this.createHashIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/HashProvider/index.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/HashProvider/index.ts',
        this.createHashIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- HashProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
