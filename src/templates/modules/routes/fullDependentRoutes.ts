export default function createFullDependentRoute(
  upperModuleName: string,
  pluralLowerModuleName: string,
  fatherLowerModuleName: string,
  pluralFatherLowerModuleName: string,
): string {
  return `import { Router } from 'express';
  
import Create${upperModuleName}Controller from '@modules/${pluralFatherLowerModuleName}/services/create${upperModuleName}/Create${upperModuleName}Controller';
import Show${upperModuleName}Controller from '@modules/${pluralFatherLowerModuleName}/services/show${upperModuleName}/Show${upperModuleName}Controller';
import List${upperModuleName}Controller from '@modules/${pluralFatherLowerModuleName}/services/list${upperModuleName}/List${upperModuleName}Controller';
import Update${upperModuleName}Controller from '@modules/${pluralFatherLowerModuleName}/services/update${upperModuleName}/Update${upperModuleName}Controller';
import Delete${upperModuleName}Controller from '@modules/${pluralFatherLowerModuleName}/services/delete${upperModuleName}/Delete${upperModuleName}Controller';

const ${fatherLowerModuleName}Router = Router();
const create${upperModuleName}Controller = new Create${upperModuleName}Controller();
const list${upperModuleName}Controller = new List${upperModuleName}Controller();
const show${upperModuleName}Controller = new Show${upperModuleName}Controller();
const update${upperModuleName}Controller = new Update${upperModuleName}Controller();
const delete${upperModuleName}Controller = new Delete${upperModuleName}Controller();

${fatherLowerModuleName}Router.post('/track/${pluralLowerModuleName}', create${upperModuleName}Controller.handle);
${fatherLowerModuleName}Router.get('/track/${pluralLowerModuleName}', list${upperModuleName}Controller.handle);
${fatherLowerModuleName}Router.get('/track/${pluralLowerModuleName}/:id', show${upperModuleName}Controller.handle);
${fatherLowerModuleName}Router.put('/track/${pluralLowerModuleName}/:id', update${upperModuleName}Controller.handle);
${fatherLowerModuleName}Router.delete('/track/${pluralLowerModuleName}/:id', delete${upperModuleName}Controller.handle);

export default ${fatherLowerModuleName}Router;
`;
}
