"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFullDependentRoute;
function createFullDependentRoute(names, fatherNames) {
  return `import { Router } from 'express';

import Create${names.upperModuleName}Controller from '@modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller';
import Show${names.upperModuleName}Controller from '@modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller';
import List${names.upperModuleName}Controller from '@modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller';
import Update${names.upperModuleName}Controller from '@modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller';
import Delete${names.upperModuleName}Controller from '@modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller';

const ${fatherNames.lowerModuleName}Router = Router();
const create${names.upperModuleName}Controller = new Create${names.upperModuleName}Controller();
const list${names.upperModuleName}Controller = new List${names.upperModuleName}Controller();
const show${names.upperModuleName}Controller = new Show${names.upperModuleName}Controller();
const update${names.upperModuleName}Controller = new Update${names.upperModuleName}Controller();
const delete${names.upperModuleName}Controller = new Delete${names.upperModuleName}Controller();

${fatherNames.lowerModuleName}Router.post('/track/${names.routeModuleName}', create${names.upperModuleName}Controller.handle);
${fatherNames.lowerModuleName}Router.get('/track/${names.routeModuleName}', list${names.upperModuleName}Controller.handle);
${fatherNames.lowerModuleName}Router.get('/track/${names.routeModuleName}/:id', show${names.upperModuleName}Controller.handle);
${fatherNames.lowerModuleName}Router.put('/track/${names.routeModuleName}/:id', update${names.upperModuleName}Controller.handle);
${fatherNames.lowerModuleName}Router.delete('/track/${names.routeModuleName}/:id', delete${names.upperModuleName}Controller.handle);

export default ${fatherNames.lowerModuleName}Router;
`;
}