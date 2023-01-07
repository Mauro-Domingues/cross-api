export default function createIndexDependentRoute(
  fatherLowerModuleName: string,
  pluralFatherLowerModuleName: string,
): string {
  return `import ${fatherLowerModuleName}Router from './${fatherLowerModuleName}Router';
routes.use('/${pluralFatherLowerModuleName}', ${fatherLowerModuleName}Router);
`;
}
