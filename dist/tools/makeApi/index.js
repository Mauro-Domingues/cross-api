import { CreateProvider } from '../makeProvider/index.js';
import { MakeInfra } from './infra.js';
import { MakeFirstLayer } from './srcLayer1.js';
import { MakeSecondLayer } from './srcLayer2.js';
import { MakeThirdLayer } from './srcLayer3.js';
import { MakeFourthLayer } from './srcLayer4.js';
import { MakeTemporary } from './temporary.js';

export class CreateApi {
  createProvider;
  makeTemporary;
  makeFourthLayer;
  makeThirdLayer;
  makeSecondLayer;
  makeFirstLayer;
  makeInfra;
  constructor() {
    this.createProvider = new CreateProvider('cache', undefined);
    this.makeTemporary = new MakeTemporary();
    this.makeFourthLayer = new MakeFourthLayer();
    this.makeThirdLayer = new MakeThirdLayer();
    this.makeSecondLayer = new MakeSecondLayer();
    this.makeFirstLayer = new MakeFirstLayer();
    this.makeInfra = new MakeInfra();
  }
  async execute() {
    await this.makeInfra.execute();
    await this.makeFirstLayer.execute();
    await this.makeSecondLayer.execute();
    await this.makeThirdLayer.execute();
    await this.makeFourthLayer.execute();
    await this.makeTemporary.execute();
    return this.createProvider.execute();
  }
}
