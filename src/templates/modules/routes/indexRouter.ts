export default function createIndexRoute(
  lowerModuleName: string,
  pluralLowerModuleName: string,
): string {
  return `import ${lowerModuleName}Router from './${lowerModuleName}Router';
routes.use('/${pluralLowerModuleName}', ${lowerModuleName}Router);
`;
}
