import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateContainer } from '@templates/index/container';
import { CreateHashConfig } from '@templates/providers/config/hashConfig';
import { CreateFakeHash } from '@templates/providers/fakes/fakeHash';
import { CreateHashIndex } from '@templates/providers/hashIndex';
import { CreateHash } from '@templates/providers/implementations/BCrypt';
import { CreateIHash } from '@templates/providers/models/IHash';
import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';

export class MakeDependentHashProvider {
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private messages: typeof messages;
  private createIHash: CreateIHash;
  private createHash: CreateHash;
  private createFakeHash: CreateFakeHash;
  private createHashConfig: CreateHashConfig;
  private createHashIndex: CreateHashIndex;
  private createContainer: CreateContainer;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.fatherNames = fatherNames;
    this.messages = messages;
    this.createIHash = new CreateIHash();
    this.createHash = new CreateHash();
    this.createFakeHash = new CreateFakeHash();
    this.createHashConfig = new CreateHashConfig();
    this.createHashIndex = new CreateHashIndex();
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
    appendFileSync(
      `src/shared/container/index.ts`,
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    appendFileSync(
      `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
      `\nimport './HashProvider';`,
    );
    if (!existsSync('src/config/hash.ts')) {
      appendFileSync('src/config/hash.ts', this.createHashConfig.execute());
    } else {
      truncateSync('src/config/hash.ts');
      appendFileSync('src/config/hash.ts', this.createHashConfig.execute());
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
        this.createFakeHash.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`,
        this.createFakeHash.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`,
        this.createHash.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`,
        this.createHash.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
        this.createIHash.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`,
        this.createIHash.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/index.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/index.ts`,
        this.createHashIndex.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/index.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/HashProvider/index.ts`,
        this.createHashIndex.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- HashProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
