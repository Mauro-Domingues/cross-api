import IModuleNamesDTO from 'index';

export default function createIndexDependentRoute(
  fatherNames: Pick<IModuleNamesDTO, 'lowerModuleName' | 'routeModuleName'>,
): string {
  return `import ${fatherNames.lowerModuleName}Router from './${fatherNames.lowerModuleName}Router';
routes.use('/${fatherNames.routeModuleName}', ${fatherNames.lowerModuleName}Router);
`;
}
