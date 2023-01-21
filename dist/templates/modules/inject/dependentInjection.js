"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDependentInjection;
function createDependentInjection(pluralUpperModuleName, pluralFatherLowerModuleName) {
  return `import I${pluralUpperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import ${pluralUpperModuleName}Repository from '@modules/${pluralFatherLowerModuleName}/repositories/${pluralUpperModuleName}Repository';

container.registerSingleton<I${pluralUpperModuleName}Repository>(
  '${pluralUpperModuleName}Repository',
  ${pluralUpperModuleName}Repository,
);
`;
}