import { IInputDTO } from '@interfaces/IInputDTO';
import { BuildPayload } from '@tools/buildPayload';

export class CustomError extends Error {
  public constructor(assets: IInputDTO | Array<IInputDTO>) {
    super();
    this.message = BuildPayload.getInstance().execute(assets);
  }
}
