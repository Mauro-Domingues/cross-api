import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { resolve } from 'path';
import { CreateHashConfig } from '../../../templates/providers/config/hashConfig.js';
import { CreateFakeHash } from '../../../templates/providers/fakes/fakeHash.js';
import { CreateHashIndex } from '../../../templates/providers/hashIndex.js';
import { CreateHash } from '../../../templates/providers/implementations/BCrypt.js';
import { CreateIHash } from '../../../templates/providers/models/IHash.js';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';

export class MakeHashProvider {
  messages;
  console;
  createIHash;
  createHash;
  createFakeHash;
  createHashConfig;
  createHashIndex;
  constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.createIHash = new CreateIHash();
    this.createHash = new CreateHash();
    this.createFakeHash = new CreateFakeHash();
    this.createHashConfig = new CreateHashConfig();
    this.createHashIndex = new CreateHashIndex();
  }
  async execute() {
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
    this.console.one([
      `- HashProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
