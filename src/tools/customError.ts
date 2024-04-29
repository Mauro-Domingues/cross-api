import { IInputDTO } from '@interfaces/IInputDTO';
import { Console } from '@tools/console';

export class CustomError extends Console {
  protected readonly error: string;
  constructor(assets: IInputDTO | Array<IInputDTO>) {
    super();
    this.error = this.buildPayload(assets);
  }
}
