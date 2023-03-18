import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateContainer } from '@templates/index/container';
import { CreateCryptoConfig } from '@templates/providers/config/cryptoConfig';
import { CreateCryptoIndex } from '@templates/providers/cryptoIndex';
import { CreateICryptoDTO } from '@templates/providers/dtos/ICryptoDTO';
import { CreateCrypto } from '@templates/providers/implementations/Crypto';
import { CreateICrypto } from '@templates/providers/models/ICrypto';
import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';

export class MakeDependentCryptoProvider {
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private messages: typeof messages;
  private createICrypto: CreateICrypto;
  private createICryptoDTO: CreateICryptoDTO;
  private createCrypto: CreateCrypto;
  private createCryptoConfig: CreateCryptoConfig;
  private createCryptoIndex: CreateCryptoIndex;
  private createContainer: CreateContainer;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.fatherNames = fatherNames;
    this.messages = messages;
    this.createICrypto = new CreateICrypto();
    this.createICryptoDTO = new CreateICryptoDTO();
    this.createCrypto = new CreateCrypto();
    this.createCryptoConfig = new CreateCryptoConfig();
    this.createCryptoIndex = new CreateCryptoIndex();
    this.createContainer = new CreateContainer();
  }

  public async execute(): Promise<void> {
    if (!this.fatherNames) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.providerNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    if (!existsSync('src')) {
      mkdirSync('src');
    }
    if (!existsSync('src/config')) {
      mkdirSync('src/config');
    }
    if (!existsSync('src/modules')) {
      mkdirSync('src/modules');
    }
    if (!existsSync('src/shared')) {
      mkdirSync('src/shared');
    }
    if (!existsSync('src/shared/container')) {
      mkdirSync('src/shared/container');
    }
    if (!existsSync('src/shared/container/index.ts')) {
      appendFileSync(
        'src/shared/container/index.ts',
        this.createContainer.execute(),
      );
    }
    if (!existsSync(`src/modules/${this.fatherNames.pluralLowerModuleName}`)) {
      mkdirSync(`src/modules/${this.fatherNames.pluralLowerModuleName}`);
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
        '',
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/dtos`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/dtos`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/implementations`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/implementations`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/models`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/models`,
      );
    }
    appendFileSync(
      `src/shared/container/index.ts`,
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    appendFileSync(
      `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
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
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/dtos/ICryptoDTO.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/dtos/ICryptoDTO.ts`,
        this.createICryptoDTO.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/dtos/ICryptoDTO.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/dtos/ICryptoDTO.ts`,
        this.createICryptoDTO.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/implementations/CryptoProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/implementations/CryptoProvider.ts`,
        this.createCrypto.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/implementations/CryptoProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/implementations/CryptoProvider.ts`,
        this.createCrypto.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/models/ICryptoProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/models/ICryptoProvider.ts`,
        this.createICrypto.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/models/ICryptoProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/models/ICryptoProvider.ts`,
        this.createICrypto.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/index.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/index.ts`,
        this.createCryptoIndex.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/index.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/index.ts`,
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
