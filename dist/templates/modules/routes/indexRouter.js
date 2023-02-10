"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createIndexRoute;
function createIndexRoute(names) {
  return `import ${names.lowerModuleName}Router from './${names.lowerModuleName}Router';
routes.use('/${names.routeModuleName}', ${names.lowerModuleName}Router);
`;
}