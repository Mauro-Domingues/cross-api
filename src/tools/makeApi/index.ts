import { CreateProvider } from '@tools/makeProvider/index';
import { MakeInfra } from './infra';
import { MakeFirstLayer } from './srcLayer1';
import { MakeSecondLayer } from './srcLayer2';
import { MakeThirdLayer } from './srcLayer3';
import { MakeFourthLayer } from './srcLayer4';
import { MakeLastLayer } from './srcLastLayer';

export class CreateApi {
  private readonly makeSecondLayer: MakeSecondLayer;
  private readonly makeFourthLayer: MakeFourthLayer;
  private readonly createProvider: CreateProvider;
  private readonly makeFirstLayer: MakeFirstLayer;
  private readonly makeThirdLayer: MakeThirdLayer;
  private readonly makeLastLayer: MakeLastLayer;
  private readonly makeInfra: MakeInfra;

  constructor() {
    this.createProvider = new CreateProvider('cache', undefined);
    this.makeSecondLayer = new MakeSecondLayer();
    this.makeFourthLayer = new MakeFourthLayer();
    this.makeThirdLayer = new MakeThirdLayer();
    this.makeFirstLayer = new MakeFirstLayer();
    this.makeLastLayer = new MakeLastLayer();
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
