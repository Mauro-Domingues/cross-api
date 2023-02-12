import { IModuleNamesDTO } from 'index';

export function createInjection(
  names: Pick<
    IModuleNamesDTO,
    'pluralLowerModuleName' | 'pluralUpperModuleName'
  >,
): string {
  return `import I${names.pluralUpperModuleName}Repository from '@modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository';
import ${names.pluralUpperModuleName}Repository from '@modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository';

container.registerSingleton<I${names.pluralUpperModuleName}Repository>(
  '${names.pluralUpperModuleName}Repository',
  ${names.pluralUpperModuleName}Repository,
);
`;
}
