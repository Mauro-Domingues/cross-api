import createCryptoConfig from '@templates/providers/config/cryptoConfig';
import createCryptoIndex from '@templates/providers/cryptoIndex';
import createICryptoDTO from '@templates/providers/dtos/ICryptoDTO';
import createFakeCrypto from '@templates/providers/fakes/fakeCrypto';
import createCrypto from '@templates/providers/implementations/Crypto';
import createICrypto from '@templates/providers/models/ICrypto';
import messages from '@tools/messages';
import fs from 'fs';

export default async function makeCryptoProvider(): Promise<void> {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/config')) {
    fs.mkdirSync('src/config');
  }
  if (!fs.existsSync('src/shared')) {
    fs.mkdirSync('src/shared');
  }
  if (!fs.existsSync('src/shared/container')) {
    fs.mkdirSync('src/shared/container');
  }
  if (!fs.existsSync('src/shared/container/providers')) {
    fs.mkdirSync('src/shared/container/providers');
  }
  if (!fs.existsSync('src/shared/container/providers/CryptoProvider')) {
    fs.mkdirSync('src/shared/container/providers/CryptoProvider');
  }
  if (!fs.existsSync('src/shared/container/providers/CryptoProvider/dtos')) {
    fs.mkdirSync('src/shared/container/providers/CryptoProvider/dtos');
  }
  if (!fs.existsSync('src/shared/container/providers/CryptoProvider/fakes')) {
    fs.mkdirSync('src/shared/container/providers/CryptoProvider/fakes');
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/CryptoProvider/implementations',
    )
  ) {
    fs.mkdirSync(
      'src/shared/container/providers/CryptoProvider/implementations',
    );
  }
  if (!fs.existsSync('src/shared/container/providers/CryptoProvider/models')) {
    fs.mkdirSync('src/shared/container/providers/CryptoProvider/models');
  }
  fs.appendFile(
    'src/shared/container/providers/index.ts',
    `import './CryptoProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (!fs.existsSync('src/config/crypto.ts')) {
    fs.appendFile('src/config/crypto.ts', createCryptoConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/crypto.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/crypto.ts', createCryptoConfig(), error => {
      if (error) throw error;
    });
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts',
      createICryptoDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts',
      createICryptoDTO(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/CryptoProvider/fakes/FakeCryptoProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/CryptoProvider/fakes/FakeCryptoProvider.ts',
      createFakeCrypto(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/CryptoProvider/fakes/FakeCryptoProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/CryptoProvider/fakes/FakeCryptoProvider.ts',
      createFakeCrypto(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts',
      createCrypto(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts',
      createCrypto(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts',
      createICrypto(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts',
      createICrypto(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync('src/shared/container/providers/CryptoProvider/index.ts')
  ) {
    fs.appendFile(
      'src/shared/container/providers/CryptoProvider/index.ts',
      createCryptoIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/CryptoProvider/index.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
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
