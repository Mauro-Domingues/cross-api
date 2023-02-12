"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIndexDependentRoute = createIndexDependentRoute;
function createIndexDependentRoute(fatherNames) {
  return `import ${fatherNames.lowerModuleName}Router from './${fatherNames.lowerModuleName}Router';
routes.use('/${fatherNames.routeModuleName}', ${fatherNames.lowerModuleName}Router);
`;
}