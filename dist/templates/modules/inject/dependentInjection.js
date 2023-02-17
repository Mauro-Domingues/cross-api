"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDependentInjection = createDependentInjection;
function createDependentInjection(names, fatherNames) {
  return `import I${names.pluralUpperModuleName}Repository from '@modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository';
import ${names.pluralUpperModuleName}Repository from '@modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository';

container.registerSingleton<I${names.pluralUpperModuleName}Repository>(
  '${names.pluralUpperModuleName}Repository',
  ${names.pluralUpperModuleName}Repository,
);
`;
}