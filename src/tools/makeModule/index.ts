import { IModuleNamesDTO } from '@tools/names';
import { makeDependentModule } from './dependent';
import { makeModule } from './independent';

export async function createModule(
  names: IModuleNamesDTO | undefined,
  fatherNames: IModuleNamesDTO | undefined,
): Promise<void> {
  if (names && fatherNames) {
    makeDependentModule(names, fatherNames);
  } else if (names) {
    makeModule(names);
  }
}
