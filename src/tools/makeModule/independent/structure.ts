import { existsSync, mkdirSync } from 'fs';
import { IModuleNamesDTO } from 'index';

export async function makeStructure(names: IModuleNamesDTO): Promise<void> {
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
  if (!existsSync(`src/modules/${names.pluralLowerModuleName}`)) {
    mkdirSync(`src/modules/${names.pluralLowerModuleName}`);
  }
  if (!existsSync(`src/modules/${names.pluralLowerModuleName}/dtos`)) {
    mkdirSync(`src/modules/${names.pluralLowerModuleName}/dtos`);
  }
  if (!existsSync(`src/modules/${names.pluralLowerModuleName}/entities`)) {
    mkdirSync(`src/modules/${names.pluralLowerModuleName}/entities`);
  }
  if (!existsSync(`src/modules/${names.pluralLowerModuleName}/repositories`)) {
    mkdirSync(`src/modules/${names.pluralLowerModuleName}/repositories`);
  }
  if (
    !existsSync(`src/modules/${names.pluralLowerModuleName}/repositories/fakes`)
  ) {
    mkdirSync(`src/modules/${names.pluralLowerModuleName}/repositories/fakes`);
  }
  if (!existsSync(`src/modules/${names.pluralLowerModuleName}/services`)) {
    mkdirSync(`src/modules/${names.pluralLowerModuleName}/services`);
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}`,
    )
  ) {
    mkdirSync(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}`,
    );
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}`,
    )
  ) {
    mkdirSync(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}`,
    );
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}`,
    )
  ) {
    mkdirSync(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}`,
    );
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}`,
    )
  ) {
    mkdirSync(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}`,
    );
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}`,
    )
  ) {
    mkdirSync(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}`,
    );
  }
}
