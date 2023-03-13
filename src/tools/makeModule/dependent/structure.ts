import { existsSync, mkdirSync } from 'fs';
import { IModuleNamesDTO } from '@tools/names';

export async function makeDependentStructure(
  names: IModuleNamesDTO,
  fatherNames: IModuleNamesDTO,
): Promise<void> {
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
  if (!existsSync(`src/modules/${fatherNames.pluralLowerModuleName}`)) {
    mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}`);
  }
  if (!existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/dtos`)) {
    mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/dtos`);
  }
  if (
    !existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/entities`)
  ) {
    mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/entities`);
  }
  if (
    !existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/repositories`)
  ) {
    mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/repositories`);
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes`,
    );
  }
  if (
    !existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/services`)
  ) {
    mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/services`);
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}`,
    );
  }
}
