import IModuleNamesDTO from 'index';
import makeDependentModule from './dependent';
import makeModule from './independent';

export default async function createModule(
  names: IModuleNamesDTO | undefined,
  fatherNames: IModuleNamesDTO | undefined,
): Promise<void> {
  if (names && fatherNames) {
    makeDependentModule(names, fatherNames);
  } else if (names) {
    makeModule(names);
  }
}
