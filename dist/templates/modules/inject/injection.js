"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createInjection;
function createInjection(pluralLowerModuleName, pluralUpperModuleName) {
  return `import I${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/I${pluralUpperModuleName}Repository';
import ${pluralUpperModuleName}Repository from '@modules/${pluralLowerModuleName}/repositories/${pluralUpperModuleName}Repository';

container.registerSingleton<I${pluralUpperModuleName}Repository>(
  '${pluralUpperModuleName}Repository',
  ${pluralUpperModuleName}Repository,
);
`;
}