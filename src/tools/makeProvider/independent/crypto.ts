import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateCryptoConfig } from '@templates/providers/config/cryptoConfig';
import { CreateCryptoIndex } from '@templates/providers/cryptoIndex';
import { CreateICryptoDTO } from '@templates/providers/dtos/ICryptoDTO';
import { CreateCrypto } from '@templates/providers/implementations/Crypto';
import { CreateICrypto } from '@templates/providers/models/ICrypto';
import { IMessagesDTO, Messages } from '@tools/messages';
import { resolve } from 'path';
import { Console } from '@tools/console';

export class MakeCryptoProvider {
  private messages: IMessagesDTO;
  private console: Console;
  private createICrypto: CreateICrypto;
  private createICryptoDTO: CreateICryptoDTO;
  private createCrypto: CreateCrypto;
  private createCryptoConfig: CreateCryptoConfig;
  private createCryptoIndex: CreateCryptoIndex;

  constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.createICrypto = new CreateICrypto();
    this.createICryptoDTO = new CreateICryptoDTO();
    this.createCrypto = new CreateCrypto();
    this.createCryptoConfig = new CreateCryptoConfig();
    this.createCryptoIndex = new CreateCryptoIndex();
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
        resolve('src', 'shared', 'container', 'providers', 'CryptoProvider'),
      )
    ) {
      mkdirSync(
        resolve('src', 'shared', 'container', 'providers', 'CryptoProvider'),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'dtos',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'dtos',
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
          'CryptoProvider',
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
          'CryptoProvider',
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
          'CryptoProvider',
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
          'CryptoProvider',
          'models',
        ),
      );
    }
    appendFileSync(
      resolve('src', 'shared', 'container', 'providers', 'index.ts'),
      `import './CryptoProvider';\n`,
    );
    if (!existsSync(resolve('src', 'config', 'crypto.ts'))) {
      appendFileSync(
        resolve('src', 'config', 'crypto.ts'),
        this.createCryptoConfig.execute(),
      );
    } else {
      truncateSync(resolve('src', 'config', 'crypto.ts'));
      appendFileSync(
        resolve('src', 'config', 'crypto.ts'),
        this.createCryptoConfig.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'dtos',
          'ICryptoDTO.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'dtos',
          'ICryptoDTO.ts',
        ),
        this.createICryptoDTO.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'dtos',
          'ICryptoDTO.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'dtos',
          'ICryptoDTO.ts',
        ),
        this.createICryptoDTO.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'implementations',
          'CryptoProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'implementations',
          'CryptoProvider.ts',
        ),
        this.createCrypto.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'implementations',
          'CryptoProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'implementations',
          'CryptoProvider.ts',
        ),
        this.createCrypto.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'models',
          'ICryptoProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'models',
          'ICryptoProvider.ts',
        ),
        this.createICrypto.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'models',
          'ICryptoProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'models',
          'ICryptoProvider.ts',
        ),
        this.createICrypto.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
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
          'CryptoProvider',
          'index.ts',
        ),
        this.createCryptoIndex.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'index.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'CryptoProvider',
          'index.ts',
        ),
        this.createCryptoIndex.execute(),
      );
    }
    this.console.one([
      `- CryptoProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
