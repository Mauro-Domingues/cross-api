export default function createDependentInjection(
  pluralUpperModuleName: string,
  pluralFatherLowerModuleName: string,
): string {
  return `import I${pluralUpperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import ${pluralUpperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/${pluralUpperModuleName}Repository';

container.registerSingleton<I${pluralUpperModuleName}Repository>(
  '${pluralUpperModuleName}Repository',
  ${pluralUpperModuleName}Repository,
);
`;
}
