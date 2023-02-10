import messages from '@tools/messages';
import IModuleNamesDTO from 'index';
import makeInfra from './infra';
import makeFunctionalities from './functionalities';
import makeStructure from './structure';
import makeUnitTests from './unitTests';

export default async function makeModule(
  names: IModuleNamesDTO,
): Promise<void> {
  await makeStructure(names);
  await makeInfra(names);
  await makeFunctionalities(names);
  await makeUnitTests(names);

  return console.log(
    '\x1b[38;2;255;255;0m',
    `- ${names.lowerModuleName}Module ${messages.created}`,
    '\x1b[0m',
  );
}
