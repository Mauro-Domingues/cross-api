import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { createHashConfig } from '@templates/providers/config/hashConfig';
import { createFakeHash } from '@templates/providers/fakes/fakeHash';
import { createHashIndex } from '@templates/providers/hashIndex';
import { createHash } from '@templates/providers/implementations/BCrypt';
import { createIHash } from '@templates/providers/models/IHash';
import messages from '@tools/messages';

export async function makeHashProvider(): Promise<void> {
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
    appendFile('src/config/hash.ts', createHashConfig(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/config/hash.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/config/hash.ts', createHashConfig(), error => {
      if (error) throw error;
    });
  }
  if (
    !existsSync(
      'src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts',
      createFakeHash(),
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
      createFakeHash(),
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
      createHash(),
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
      createHash(),
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
      createIHash(),
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
      createIHash(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (!existsSync('src/shared/container/providers/HashProvider/index.ts')) {
    appendFile(
      'src/shared/container/providers/HashProvider/index.ts',
      createHashIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate('src/shared/container/providers/HashProvider/index.ts', error => {
      if (error) console.log(error);
    });
    appendFile(
      'src/shared/container/providers/HashProvider/index.ts',
      createHashIndex(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- HashProvider ${messages.created}`,
    '\x1b[0m',
  );
}
