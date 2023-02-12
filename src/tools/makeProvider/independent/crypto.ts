import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { createCryptoConfig } from '@templates/providers/config/cryptoConfig';
import { createCryptoIndex } from '@templates/providers/cryptoIndex';
import { createICryptoDTO } from '@templates/providers/dtos/ICryptoDTO';
import { createCrypto } from '@templates/providers/implementations/Crypto';
import { createICrypto } from '@templates/providers/models/ICrypto';
import messages from '@tools/messages';

export async function makeCryptoProvider(): Promise<void> {
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
    !existsSync('src/shared/container/providers/CryptoProvider/implementations')
  ) {
    mkdirSync('src/shared/container/providers/CryptoProvider/implementations');
  }
  if (!existsSync('src/shared/container/providers/CryptoProvider/models')) {
    mkdirSync('src/shared/container/providers/CryptoProvider/models');
  }
  appendFile(
    'src/shared/container/providers/index.ts',
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
      'src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts',
      createICryptoDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts',
      createICryptoDTO(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      'src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts',
      createCrypto(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts',
      createCrypto(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      'src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts',
      createICrypto(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts',
      createICrypto(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (!existsSync('src/shared/container/providers/CryptoProvider/index.ts')) {
    appendFile(
      'src/shared/container/providers/CryptoProvider/index.ts',
      createCryptoIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/CryptoProvider/index.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/CryptoProvider/index.ts',
      createCryptoIndex(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- CryptoProvider ${messages.created}`,
    '\x1b[0m',
  );
}
