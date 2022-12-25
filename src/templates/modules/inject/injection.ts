export default function createInjection(
  pluralLowerModuleName: string,
  pluralUpperModuleName: string,
): string {
  return `import I${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import ${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/${pluralUpperModuleName}Repository';

container.registerSingleton<I${pluralUpperModuleName}Repository>(
  '${pluralUpperModuleName}Repository',
  ${pluralUpperModuleName}Repository,
);`;
}
