import { IInputDTO } from '@interfaces/IInputDTO';
import { Console } from '@tools/console';

export class CustomError extends Error {
  public constructor(assets: IInputDTO | Array<IInputDTO>) {
    super();
    this.message = new Console().buildPayload(assets);
  }
}
