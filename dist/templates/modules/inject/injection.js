"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInjection = createInjection;
function createInjection(names) {
  return `import I${names.pluralUpperModuleName}Repository from '@modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository';
import ${names.pluralUpperModuleName}Repository from '@modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository';

container.registerSingleton<I${names.pluralUpperModuleName}Repository>(
  '${names.pluralUpperModuleName}Repository',
  ${names.pluralUpperModuleName}Repository,
);
`;
}