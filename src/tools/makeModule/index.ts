import makeDependentModule from './dependent';
import makeModule from './independent';

export default async function createModule(
  moduleData: { [key: string]: string },
  fatherData: { [key: string]: string },
): Promise<void> {
  if (moduleData && fatherData) {
    makeDependentModule(moduleData, fatherData);
  } else if (moduleData) {
    makeModule(moduleData);
  }
}
