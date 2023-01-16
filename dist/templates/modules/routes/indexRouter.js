"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createIndexRoute;
function createIndexRoute(lowerModuleName, pluralLowerModuleName) {
  return `import ${lowerModuleName}Router from './${lowerModuleName}Router';
routes.use('/${pluralLowerModuleName}', ${lowerModuleName}Router);
`;
}