import messages from '@tools/messages';
import makeInfra from './infra';
import makeFunctionalities from './functionalities';
import makeStructure from './structure';
import makeUnitTests from './unitTests';

export default async function makeModule(moduleData: {
  [key: string]: string;
}): Promise<void> {
  await makeStructure(moduleData);
  await makeInfra(moduleData);
  await makeFunctionalities(moduleData);
  await makeUnitTests(moduleData);

  return console.log(
    '\x1b[38;2;255;255;0m',
    `- ${moduleData.lowerModuleName}Module ${messages.created}`,
    '\x1b[0m',
  );
}
