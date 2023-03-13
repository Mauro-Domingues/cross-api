import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { makeDependentFunctionalities } from './funcionalities';
import { makeDependentInfra } from './infra';
import { makeDependentStructure } from './structure';
import { makeDependentUnitTests } from './unitTests';

export async function makeDependentModule(
  names: IModuleNamesDTO,
  fatherNames: IModuleNamesDTO,
): Promise<void> {
  await makeDependentStructure(names, fatherNames);
  await makeDependentInfra(names, fatherNames);
  await makeDependentFunctionalities(names, fatherNames);
  await makeDependentUnitTests(names, fatherNames);

  return console.log(
    '\x1b[38;2;255;255;0m',
    `- ${names.lowerModuleName}Module ${messages.created}`,
    '\x1b[0m',
  );
}
