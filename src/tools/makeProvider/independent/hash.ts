import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateHashConfig } from '@templates/providers/config/hashConfig';
import { CreateFakeHash } from '@templates/providers/fakes/fakeHash';
import { CreateHashIndex } from '@templates/providers/hashIndex';
import { CreateHash } from '@templates/providers/implementations/BCrypt';
import { CreateIHash } from '@templates/providers/models/IHash';
import { IMessagesDTO, Messages } from '@tools/messages';
import { resolve } from 'path';

export class MakeHashProvider {
  private messages: IMessagesDTO;
  private createIHash: CreateIHash;
  private createHash: CreateHash;
  private createFakeHash: CreateFakeHash;
  private createHashConfig: CreateHashConfig;
  private createHashIndex: CreateHashIndex;

  constructor() {
    this.messages = new Messages().execute();
    this.createIHash = new CreateIHash();
    this.createHash = new CreateHash();
    this.createFakeHash = new CreateFakeHash();
    this.createHashConfig = new CreateHashConfig();
    this.createHashIndex = new CreateHashIndex();
  }

  public async execute(): Promise<void> {
    if (!existsSync(resolve('src'))) {
      mkdirSync(resolve('src'));
    }
    if (!existsSync(resolve('src', 'config'))) {
      mkdirSync(resolve('src', 'config'));
    }
    if (!existsSync(resolve('src', 'shared'))) {
      mkdirSync(resolve('src', 'shared'));
    }
    if (!existsSync(resolve('src', 'shared', 'container'))) {
      mkdirSync(resolve('src', 'shared', 'container'));
    }
    if (!existsSync(resolve('src', 'shared', 'container', 'providers'))) {
      mkdirSync(resolve('src', 'shared', 'container', 'providers'));
    }
    if (
      !existsSync(
        resolve('src', 'shared', 'container', 'providers', 'HashProvider'),
      )
    ) {
      mkdirSync(
        resolve('src', 'shared', 'container', 'providers', 'HashProvider'),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'fakes',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'fakes',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'implementations',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'implementations',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'models',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'models',
        ),
      );
    }
    appendFileSync(
      resolve('src', 'shared', 'container', 'providers', 'index.ts'),
      `import './HashProvider';\n`,
    );
    if (!existsSync(resolve('src', 'config', 'hash.ts'))) {
      appendFileSync(
        resolve('src', 'config', 'hash.ts'),
        this.createHashConfig.execute(),
      );
    } else {
      truncateSync(resolve('src', 'config', 'hash.ts'));
      appendFileSync(
        resolve('src', 'config', 'hash.ts'),
        this.createHashConfig.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'fakes',
          'FakeHashProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'fakes',
          'FakeHashProvider.ts',
        ),
        this.createFakeHash.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'fakes',
          'FakeHashProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'fakes',
          'FakeHashProvider.ts',
        ),
        this.createFakeHash.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'implementations',
          'BCryptHashProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'implementations',
          'BCryptHashProvider.ts',
        ),
        this.createHash.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'implementations',
          'BCryptHashProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'implementations',
          'BCryptHashProvider.ts',
        ),
        this.createHash.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'models',
          'IHashProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'models',
          'IHashProvider.ts',
        ),
        this.createIHash.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'models',
          'IHashProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'models',
          'IHashProvider.ts',
        ),
        this.createIHash.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'index.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'index.ts',
        ),
        this.createHashIndex.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'index.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'HashProvider',
          'index.ts',
        ),
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
