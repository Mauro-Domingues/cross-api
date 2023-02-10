import fs from 'fs';
import createContainer from '@templates/index/container';
import createHashConfig from '@templates/providers/config/hashConfig';
import createFakeHash from '@templates/providers/fakes/fakeHash';
import createHashIndex from '@templates/providers/hashIndex';
import createHash from '@templates/providers/implementations/BCrypt';
import createIHash from '@templates/providers/models/IHash';
import messages from '@tools/messages';
import IModuleNamesDTO from 'index';

export default async function makeDependentHashProvider(
  fatherNames: IModuleNamesDTO,
): Promise<void> {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/config')) {
    fs.mkdirSync('src/config');
  }
  if (!fs.existsSync('src/modules')) {
    fs.mkdirSync('src/modules');
  }
  if (!fs.existsSync('src/shared')) {
    fs.mkdirSync('src/shared');
  }
  if (!fs.existsSync('src/shared/container')) {
    fs.mkdirSync('src/shared/container');
  }
  if (!fs.existsSync('src/shared/container/index.ts')) {
    fs.appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  }
  if (!fs.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}`)) {
    fs.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}`);
  }
  if (
    !fs.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/providers`)
  ) {
    fs.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/providers`);
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
      '',
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/models`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/models`,
    );
  }
  fs.appendFile(
    `src/shared/container/index.ts`,
    `import '@modules/${fatherNames.pluralLowerModuleName}/providers';`,
    error => {
      if (error) throw error;
    },
  );
  fs.appendFile(
    `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
    `\nimport './HashProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (!fs.existsSync('src/config/hash.ts')) {
    fs.appendFile('src/config/hash.ts', createHashConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/hash.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/hash.ts', createHashConfig(), error => {
      if (error) throw error;
    });
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
      createFakeHash(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
      createFakeHash(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`,
      createHash(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`,
      createHash(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
      createIHash(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
      createIHash(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/index.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/index.ts`,
      createHashIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/index.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/HashProvider/index.ts`,
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
