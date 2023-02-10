import fs from 'fs';
import IModuleNamesDTO from 'index';

export default async function makeDependentStructure(
  names: IModuleNamesDTO,
  fatherNames: IModuleNamesDTO,
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
  if (!fs.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}`)) {
    fs.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}`);
  }
  if (!fs.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/dtos`)) {
    fs.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/dtos`);
  }
  if (
    !fs.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/entities`)
  ) {
    fs.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/entities`);
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes`,
    );
  }
  if (
    !fs.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services`)
  ) {
    fs.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/services`);
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}`,
    );
  }
}
