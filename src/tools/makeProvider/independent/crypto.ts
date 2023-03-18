import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateCryptoConfig } from '@templates/providers/config/cryptoConfig';
import { CreateCryptoIndex } from '@templates/providers/cryptoIndex';
import { CreateICryptoDTO } from '@templates/providers/dtos/ICryptoDTO';
import { CreateCrypto } from '@templates/providers/implementations/Crypto';
import { CreateICrypto } from '@templates/providers/models/ICrypto';
import messages from '@tools/messages';

export class MakeCryptoProvider {
  private messages: typeof messages;
  private createICrypto: CreateICrypto;
  private createICryptoDTO: CreateICryptoDTO;
  private createCrypto: CreateCrypto;
  private createCryptoConfig: CreateCryptoConfig;
  private createCryptoIndex: CreateCryptoIndex;

  constructor() {
    this.messages = messages;
    this.createICrypto = new CreateICrypto();
    this.createICryptoDTO = new CreateICryptoDTO();
    this.createCrypto = new CreateCrypto();
    this.createCryptoConfig = new CreateCryptoConfig();
    this.createCryptoIndex = new CreateCryptoIndex();
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
    if (!existsSync('src/shared/container/providers/CryptoProvider')) {
      mkdirSync('src/shared/container/providers/CryptoProvider');
    }
    if (!existsSync('src/shared/container/providers/CryptoProvider/dtos')) {
      mkdirSync('src/shared/container/providers/CryptoProvider/dtos');
    }
    if (
      !existsSync(
        'src/shared/container/providers/CryptoProvider/implementations',
      )
    ) {
      mkdirSync(
        'src/shared/container/providers/CryptoProvider/implementations',
      );
    }
    if (!existsSync('src/shared/container/providers/CryptoProvider/models')) {
      mkdirSync('src/shared/container/providers/CryptoProvider/models');
    }
    appendFileSync(
      'src/shared/container/providers/index.ts',
      `\nimport './CryptoProvider';`,
    );
    if (!existsSync('src/config/crypto.ts')) {
      appendFileSync('src/config/crypto.ts', this.createCryptoConfig.execute());
    } else {
      truncateSync('src/config/crypto.ts');
      appendFileSync('src/config/crypto.ts', this.createCryptoConfig.execute());
    }
    if (
      !existsSync(
        'src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts',
      )
    ) {
      appendFileSync(
        'src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts',
        this.createICryptoDTO.execute(),
      );
    } else {
      truncateSync(
        'src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts',
      );
      appendFileSync(
        'src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts',
        this.createICryptoDTO.execute(),
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts',
      )
    ) {
      appendFileSync(
        'src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts',
        this.createCrypto.execute(),
      );
    } else {
      truncateSync(
        'src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts',
      );
      appendFileSync(
        'src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts',
        this.createCrypto.execute(),
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts',
      )
    ) {
      appendFileSync(
        'src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts',
        this.createICrypto.execute(),
      );
    } else {
      truncateSync(
        'src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts',
      );
      appendFileSync(
        'src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts',
        this.createICrypto.execute(),
      );
    }
    if (!existsSync('src/shared/container/providers/CryptoProvider/index.ts')) {
      appendFileSync(
        'src/shared/container/providers/CryptoProvider/index.ts',
        this.createCryptoIndex.execute(),
      );
    } else {
      truncateSync('src/shared/container/providers/CryptoProvider/index.ts');
      appendFileSync(
        'src/shared/container/providers/CryptoProvider/index.ts',
        this.createCryptoIndex.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- CryptoProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
