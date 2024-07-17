import { IInputDTO } from '@interfaces/IInputDTO';
import { BuildPayload } from '@tools/buildPayload';

export class Console {
  private readonly buildPayload: BuildPayload;

  constructor() {
    this.buildPayload = new BuildPayload();
  }

  public execute(assets: IInputDTO | Array<IInputDTO>): void {
    const payload = this.buildPayload.execute(assets);

    return console.log(payload);
  }
}
