import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { createContainer } from '@templates/index/container';
import { createCryptoConfig } from '@templates/providers/config/cryptoConfig';
import { createCryptoIndex } from '@templates/providers/cryptoIndex';
import { createICryptoDTO } from '@templates/providers/dtos/ICryptoDTO';
import { createCrypto } from '@templates/providers/implementations/Crypto';
import { createICrypto } from '@templates/providers/models/ICrypto';
import messages from '@tools/messages';
import { IModuleNamesDTO } from 'index';

export class MakeDependentCryptoProvider {
  private fatherNames: IModuleNamesDTO;
  private messages: typeof messages;

  constructor(fatherNames: IModuleNamesDTO) {
    this.fatherNames = fatherNames;
    this.messages = messages;
  }

  public async execute(): Promise<void> {
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
      appendFile('src/shared/container/index.ts', createContainer(), error => {
        if (error) throw error;
      });
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
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
        '',
        error => {
          if (error) throw error;
        },
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
    appendFile(
      `src/shared/container/index.ts`,
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
      error => {
        if (error) throw error;
      },
    );
    appendFile(
      `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
      `\nimport './CryptoProvider';`,
      error => {
        if (error) throw error;
      },
    );
    if (!existsSync('src/config/crypto.ts')) {
      appendFile('src/config/crypto.ts', createCryptoConfig(), error => {
        if (error) throw error;
      });
    } else {
      truncate('src/config/crypto.ts', error => {
        if (error) console.log(error);
      });
      appendFile('src/config/crypto.ts', createCryptoConfig(), error => {
        if (error) throw error;
      });
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/dtos/ICryptoDTO.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/dtos/ICryptoDTO.ts`,
        createICryptoDTO(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/dtos/ICryptoDTO.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/dtos/ICryptoDTO.ts`,
        createICryptoDTO(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/implementations/CryptoProvider.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/implementations/CryptoProvider.ts`,
        createCrypto(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/implementations/CryptoProvider.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/implementations/CryptoProvider.ts`,
        createCrypto(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/models/ICryptoProvider.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/models/ICryptoProvider.ts`,
        createICrypto(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/models/ICryptoProvider.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/models/ICryptoProvider.ts`,
        createICrypto(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/index.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/index.ts`,
        createCryptoIndex(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/index.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/CryptoProvider/index.ts`,
        createCryptoIndex(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- CryptoProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
