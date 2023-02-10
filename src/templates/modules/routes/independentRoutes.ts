import IModuleNamesDTO from 'index';

export default function createIndependentRoute(
  names: Pick<
    IModuleNamesDTO,
    'lowerModuleName' | 'upperModuleName' | 'pluralLowerModuleName'
  >,
): string {
  return `import { Router } from 'express';

import Create${names.upperModuleName}Controller from '@modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller';
import Show${names.upperModuleName}Controller from '@modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller';
import List${names.upperModuleName}Controller from '@modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller';
import Update${names.upperModuleName}Controller from '@modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller';
import Delete${names.upperModuleName}Controller from '@modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller';

const ${names.lowerModuleName}Router = Router();
const create${names.upperModuleName}Controller = new Create${names.upperModuleName}Controller();
const list${names.upperModuleName}Controller = new List${names.upperModuleName}Controller();
const show${names.upperModuleName}Controller = new Show${names.upperModuleName}Controller();
const update${names.upperModuleName}Controller = new Update${names.upperModuleName}Controller();
const delete${names.upperModuleName}Controller = new Delete${names.upperModuleName}Controller();

${names.lowerModuleName}Router.post('/', create${names.upperModuleName}Controller.handle);
${names.lowerModuleName}Router.get('/', list${names.upperModuleName}Controller.handle);
${names.lowerModuleName}Router.get('/:id', show${names.upperModuleName}Controller.handle);
${names.lowerModuleName}Router.put('/:id', update${names.upperModuleName}Controller.handle);
${names.lowerModuleName}Router.delete('/:id', delete${names.upperModuleName}Controller.handle);

export default ${names.lowerModuleName}Router;
`;
}
