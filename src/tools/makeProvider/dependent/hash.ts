import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { createContainer } from '@templates/index/container';
import { createHashConfig } from '@templates/providers/config/hashConfig';
import { createFakeHash } from '@templates/providers/fakes/fakeHash';
import { createHashIndex } from '@templates/providers/hashIndex';
import { createHash } from '@templates/providers/implementations/BCrypt';
import { createIHash } from '@templates/providers/models/IHash';
import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';

export class MakeDependentHashProvider {
  private fatherNames: IModuleNamesDTO;
  private messages: typeof messages;

  constructor(fatherNames: IModuleNamesDTO) {
    this.fatherNames = fatherNames;
    this.messages = messages;
  }

  public async makeDependentHashProvider(): Promise<void> {
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
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/models`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/models`,
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
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
        createFakeHash(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
        createFakeHash(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`,
        createHash(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`,
        createHash(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
        createIHash(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
        createIHash(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/index.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/index.ts`,
        createHashIndex(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/index.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/index.ts`,
        createHashIndex(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- HashProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
