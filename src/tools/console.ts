import { log } from 'node:console';
import { IInputDTO } from '@interfaces/IInputDTO';
import { IConsoleDTO } from '@interfaces/ISingletonDTO';
import { BuildPayload } from '@tools/buildPayload';

export class Console {
  private readonly buildPayload: BuildPayload;
  private static instance: IConsoleDTO;

  private constructor() {
    this.buildPayload = BuildPayload.getInstance();
  }

  public static getInstance(): IConsoleDTO {
    if (!Console.instance) {
      Console.instance = new Console();
    }
    return Console.instance;
  }

  public execute(assets: IInputDTO | Array<IInputDTO>): void {
    const payload = this.buildPayload.execute(assets);

    return log(payload);
  }
}
