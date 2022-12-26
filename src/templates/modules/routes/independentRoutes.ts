export default function createIndependentRoute(
  lowerModuleName: string,
  upperModuleName: string,
  pluralLowerModuleName: string,
): string {
  return `import { Router } from 'express';

import Create${upperModuleName}Controller from '@modules/${pluralLowerModuleName}/services/create${upperModuleName}/Create${upperModuleName}Controller';
import Show${upperModuleName}Controller from '@modules/${pluralLowerModuleName}/services/show${upperModuleName}/Show${upperModuleName}Controller';
import List${upperModuleName}Controller from '@modules/${pluralLowerModuleName}/services/list${upperModuleName}/List${upperModuleName}Controller';
import Update${upperModuleName}Controller from '@modules/${pluralLowerModuleName}/services/update${upperModuleName}/Update${upperModuleName}Controller';
import Delete${upperModuleName}Controller from '@modules/${pluralLowerModuleName}/services/delete${upperModuleName}/Delete${upperModuleName}Controller';

const ${lowerModuleName}Router = Router();
const create${upperModuleName}Controller = new Create${upperModuleName}Controller();
const list${upperModuleName}Controller = new List${upperModuleName}Controller();
const show${upperModuleName}Controller = new Show${upperModuleName}Controller();
const update${upperModuleName}Controller = new Update${upperModuleName}Controller();
const delete${upperModuleName}Controller = new Delete${upperModuleName}Controller();

${lowerModuleName}Router.post('/', create${upperModuleName}Controller.handle);
${lowerModuleName}Router.get('/', list${upperModuleName}Controller.handle);
${lowerModuleName}Router.get('/:id', show${upperModuleName}Controller.handle);
${lowerModuleName}Router.put('/:id', update${upperModuleName}Controller.handle);
${lowerModuleName}Router.delete('/:id', delete${upperModuleName}Controller.handle);

export default ${lowerModuleName}Router;
`;
}
