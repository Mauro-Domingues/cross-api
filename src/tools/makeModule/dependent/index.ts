import messages from '@tools/messages';
import makeDependentFunctionalities from './funcionalities';
import makeDependentInfra from './infra';
import makeDependentStructure from './structure';
import makeDependentUnitTests from './unitTests';

export default async function makeDependentModule(
  moduleData: {
    [key: string]: string;
  },
  fatherData: {
    [key: string]: string;
  },
): Promise<void> {
  await makeDependentStructure(moduleData, fatherData);
  await makeDependentInfra(moduleData, fatherData);
  await makeDependentFunctionalities(moduleData, fatherData);
  await makeDependentUnitTests(moduleData, fatherData);

  return console.log(
    '\x1b[38;2;255;255;0m',
    `- ${moduleData.lowerModuleName}Module ${messages.created}`,
    '\x1b[0m',
  );
}
