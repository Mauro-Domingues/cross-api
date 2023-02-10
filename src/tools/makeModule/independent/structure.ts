import fs from 'fs';
import IModuleNamesDTO from 'index';

export default async function makeStructure(
  names: IModuleNamesDTO,
): Promise<void> {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
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
  if (!fs.existsSync('src/routes')) {
    fs.mkdirSync('src/routes');
  }
  if (!fs.existsSync(`src/modules/${names.pluralLowerModuleName}`)) {
    fs.mkdirSync(`src/modules/${names.pluralLowerModuleName}`);
  }
  if (!fs.existsSync(`src/modules/${names.pluralLowerModuleName}/dtos`)) {
    fs.mkdirSync(`src/modules/${names.pluralLowerModuleName}/dtos`);
  }
  if (!fs.existsSync(`src/modules/${names.pluralLowerModuleName}/entities`)) {
    fs.mkdirSync(`src/modules/${names.pluralLowerModuleName}/entities`);
  }
  if (
    !fs.existsSync(`src/modules/${names.pluralLowerModuleName}/repositories`)
  ) {
    fs.mkdirSync(`src/modules/${names.pluralLowerModuleName}/repositories`);
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/repositories/fakes`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${names.pluralLowerModuleName}/repositories/fakes`,
    );
  }
  if (!fs.existsSync(`src/modules/${names.pluralLowerModuleName}/services`)) {
    fs.mkdirSync(`src/modules/${names.pluralLowerModuleName}/services`);
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}`,
    );
  }
}
