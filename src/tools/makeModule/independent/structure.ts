import { existsSync, mkdirSync } from 'fs';
import { IModuleNamesDTO } from '@tools/names';
import messages from '@tools/messages';

export class MakeStructure {
  private messages: typeof messages;
  private names: IModuleNamesDTO | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = messages;
    this.names = names;
  }

  public async execute(): Promise<void> {
    if (!this.names) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    if (!existsSync('src')) {
      mkdirSync('src');
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
    if (!existsSync('src/routes')) {
      mkdirSync('src/routes');
    }
    if (!existsSync(`src/modules/${this.names.pluralLowerModuleName}`)) {
      mkdirSync(`src/modules/${this.names.pluralLowerModuleName}`);
    }
    if (!existsSync(`src/modules/${this.names.pluralLowerModuleName}/dtos`)) {
      mkdirSync(`src/modules/${this.names.pluralLowerModuleName}/dtos`);
    }
    if (
      !existsSync(`src/modules/${this.names.pluralLowerModuleName}/entities`)
    ) {
      mkdirSync(`src/modules/${this.names.pluralLowerModuleName}/entities`);
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/repositories`,
      )
    ) {
      mkdirSync(`src/modules/${this.names.pluralLowerModuleName}/repositories`);
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/fakes`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/fakes`,
      );
    }
    if (
      !existsSync(`src/modules/${this.names.pluralLowerModuleName}/services`)
    ) {
      mkdirSync(`src/modules/${this.names.pluralLowerModuleName}/services`);
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/create${this.names.upperModuleName}`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/delete${this.names.upperModuleName}`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/list${this.names.upperModuleName}`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/show${this.names.upperModuleName}`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.names.pluralLowerModuleName}/services/update${this.names.upperModuleName}`,
      );
    }
  }
}
