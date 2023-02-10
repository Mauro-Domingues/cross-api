import IModuleNamesDTO from 'index';

export default function createIndexRoute(
  names: Pick<IModuleNamesDTO, 'lowerModuleName' | 'routeModuleName'>,
): string {
  return `import ${names.lowerModuleName}Router from './${names.lowerModuleName}Router';
routes.use('/${names.routeModuleName}', ${names.lowerModuleName}Router);
`;
}
