export default function createIndexRoute(lowerModuleName: string): string {
  return `import ${lowerModuleName}Router from './${lowerModuleName}Router';
routes.use('/${lowerModuleName}', ${lowerModuleName}Router);
`;
}
