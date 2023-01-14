import fs from 'fs';

export default async function makeDependentStructure(
  moduleData: { [key: string]: string },
  fatherData: { [key: string]: string },
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
  if (!fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}`)) {
    fs.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}`);
  }
  if (!fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/dtos`)) {
    fs.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/dtos`);
  }
  if (
    !fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/entities`)
  ) {
    fs.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/entities`);
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes`,
    );
  }
  if (
    !fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services`)
  ) {
    fs.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/services`);
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}`,
    );
  }
}
