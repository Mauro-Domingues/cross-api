import { existsSync, mkdirSync } from 'fs';
import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { resolve } from 'path';
import { Console } from '@tools/console';

export class MakeStructure {
  private messages: IMessagesDTO;
  private console: Console;
  private names: IModuleNamesDTO | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
  }

  public async execute(): Promise<void> {
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
