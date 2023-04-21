import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';

export class MakeStructure {
  messages;
  console;
  names;
  constructor(names) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
  }
  async execute() {
    if (!this.names) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }
    if (!existsSync(resolve('src'))) {
      mkdirSync(resolve('src'));
    }
    if (!existsSync(resolve('src', 'modules'))) {
      mkdirSync(resolve('src', 'modules'));
    }
    if (!existsSync(resolve('src', 'shared'))) {
      mkdirSync(resolve('src', 'shared'));
    }
    if (!existsSync(resolve('src', 'shared', 'container'))) {
      mkdirSync(resolve('src', 'shared', 'container'));
    }
    if (!existsSync(resolve('src', 'routes'))) {
      mkdirSync(resolve('src', 'routes'));
    }
    if (
      !existsSync(resolve('src', 'modules', this.names.pluralLowerModuleName))
    ) {
      mkdirSync(resolve('src', 'modules', this.names.pluralLowerModuleName));
    }
    if (
      !existsSync(
        resolve('src', 'modules', this.names.pluralLowerModuleName, 'dtos'),
      )
    ) {
      mkdirSync(
        resolve('src', 'modules', this.names.pluralLowerModuleName, 'dtos'),
      );
    }
    if (
      !existsSync(
        resolve('src', 'modules', this.names.pluralLowerModuleName, 'entities'),
      )
    ) {
      mkdirSync(
        resolve('src', 'modules', this.names.pluralLowerModuleName, 'entities'),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          'fakes',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          'fakes',
        ),
      );
    }
    if (
      !existsSync(
        resolve('src', 'modules', this.names.pluralLowerModuleName, 'services'),
      )
    ) {
      mkdirSync(
        resolve('src', 'modules', this.names.pluralLowerModuleName, 'services'),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `create${this.names.upperModuleName}`,
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `delete${this.names.upperModuleName}`,
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `list${this.names.upperModuleName}`,
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `show${this.names.upperModuleName}`,
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          `update${this.names.upperModuleName}`,
        ),
      );
    }
  }
}
