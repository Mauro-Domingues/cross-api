import { IModuleNamesDTO } from 'index';

export function createDependentInjection(
  names: Pick<
    IModuleNamesDTO,
    'pluralUpperModuleName' | 'pluralLowerModuleName'
  >,
  fatherNames: Pick<IModuleNamesDTO, 'pluralLowerModuleName'>,
): string {
  return `import I${names.pluralUpperModuleName}Repository from '@modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository';
import ${names.pluralUpperModuleName}Repository from '@modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository';

container.registerSingleton<I${names.pluralUpperModuleName}Repository>(
  '${names.pluralUpperModuleName}Repository',
  ${names.pluralUpperModuleName}Repository,
);
`;
}
