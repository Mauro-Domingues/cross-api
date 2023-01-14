import makeProvider from '../makeProvider/independent';
import makeInfra from './infra';
import makeFirstLayer from './srcLayer1';
import makeSecondLayer from './srcLayer2';
import makeThirdLayer from './srcLayer3';
import makeFourthLayer from './srcLayer4';
import makeTemporary from './temporary';

export default async function createApi(): Promise<void> {
  await makeInfra();
  await makeFirstLayer();
  await makeSecondLayer();
  await makeThirdLayer();
  await makeFourthLayer();
  await makeTemporary();
  return makeProvider('cache');
}
