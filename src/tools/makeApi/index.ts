import { MakeCacheProvider } from '@tools/makeProvider/independent/cache';
import { MakeInfra } from './infra';
import { MakeFirstLayer } from './srcLayer1';
import { MakeSecondLayer } from './srcLayer2';
import { MakeThirdLayer } from './srcLayer3';
import { MakeFourthLayer } from './srcLayer4';
import { MakeLastLayer } from './srcLastLayer';

export class CreateApi {
  private readonly makeCacheProvider: MakeCacheProvider;
  private readonly makeSecondLayer: MakeSecondLayer;
  private readonly makeFourthLayer: MakeFourthLayer;
  private readonly makeFirstLayer: MakeFirstLayer;
  private readonly makeThirdLayer: MakeThirdLayer;
  private readonly makeLastLayer: MakeLastLayer;
  private readonly makeInfra: MakeInfra;

  constructor() {
    this.makeCacheProvider = new MakeCacheProvider();
    this.makeSecondLayer = new MakeSecondLayer();
    this.makeFourthLayer = new MakeFourthLayer();
    this.makeThirdLayer = new MakeThirdLayer();
    this.makeFirstLayer = new MakeFirstLayer();
    this.makeLastLayer = new MakeLastLayer();
    this.makeInfra = new MakeInfra();
  }

  public execute(): void {
    this.makeInfra.execute();
    this.makeFirstLayer.execute();
    this.makeSecondLayer.execute();
    this.makeThirdLayer.execute();
    this.makeFourthLayer.execute();
    this.makeLastLayer.execute();
    return this.makeCacheProvider.execute();
  }
}
