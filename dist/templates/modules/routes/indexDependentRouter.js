"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createIndexDependentRoute;
function createIndexDependentRoute(fatherLowerModuleName, pluralFatherLowerModuleName) {
  return `import ${fatherLowerModuleName}Router from './${fatherLowerModuleName}Router';
routes.use('/${pluralFatherLowerModuleName}', ${fatherLowerModuleName}Router);
`;
}