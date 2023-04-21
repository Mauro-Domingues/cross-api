import { CreateProvider } from '@tools/makeProvider/index';
import { MakeInfra } from './infra';
import { MakeFirstLayer } from './srcLayer1';
import { MakeSecondLayer } from './srcLayer2';
import { MakeThirdLayer } from './srcLayer3';
import { MakeFourthLayer } from './srcLayer4';
import { MakeTemporary } from './temporary';

export class CreateApi {
  private createProvider: CreateProvider;
  private makeTemporary: MakeTemporary;
  private makeFourthLayer: MakeFourthLayer;
  private makeThirdLayer: MakeThirdLayer;
  private makeSecondLayer: MakeSecondLayer;
  private makeFirstLayer: MakeFirstLayer;
  private makeInfra: MakeInfra;

  constructor() {
    this.createProvider = new CreateProvider('cache', undefined);
    this.makeTemporary = new MakeTemporary();
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
    await this.makeTemporary.execute();
    return this.createProvider.execute();
  }
}
