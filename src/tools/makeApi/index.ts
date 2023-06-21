import { CreateProvider } from '@tools/makeProvider/index.js';
import { MakeInfra } from './infra.js';
import { MakeFirstLayer } from './srcLayer1.js';
import { MakeSecondLayer } from './srcLayer2.js';
import { MakeThirdLayer } from './srcLayer3.js';
import { MakeFourthLayer } from './srcLayer4.js';
import { MakeLastLayer } from './srcLastLayer.js';

export class CreateApi {
  private readonly createProvider: CreateProvider;
  private readonly makeLastLayer: MakeLastLayer;
  private readonly makeFourthLayer: MakeFourthLayer;
  private readonly makeThirdLayer: MakeThirdLayer;
  private readonly makeSecondLayer: MakeSecondLayer;
  private readonly makeFirstLayer: MakeFirstLayer;
  private readonly makeInfra: MakeInfra;

  constructor() {
    this.createProvider = new CreateProvider('cache', undefined);
    this.makeLastLayer = new MakeLastLayer();
    this.makeFourthLayer = new MakeFourthLayer();
    this.makeThirdLayer = new MakeThirdLayer();
    this.makeSecondLayer = new MakeSecondLayer();
    this.makeFirstLayer = new MakeFirstLayer();
    this.makeInfra = new MakeInfra();
  }

  public async execute(): Promise<void> {
    await this.makeInfra.execute();
    await this.makeFirstLayer.execute();
    await this.makeSecondLayer.execute();
    await this.makeThirdLayer.execute();
    await this.makeFourthLayer.execute();
    await this.makeLastLayer.execute();
    return this.createProvider.execute();
  }
}
